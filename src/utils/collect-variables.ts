import * as store from "../utils/storage2";

function uuidv4() {
    var u = '', m = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', i = 0, rb = Math.random() * 0xffffffff | 0;
    while (i++ < 36) {
        var c = m[i - 1], r = rb & 0xf, v = c == 'x' ? r : (r & 0x3 | 0x8);
        u += (c == '-' || c == '4') ? c : v.toString(16); rb = i % 8 == 0 ? Math.random() * 0xffffffff | 0 : rb >> 4
    }
    return u
}

export interface FileVariablesRecord {
    type: string;
    fileName: string;
    timestamp: number;
    variables: VariableData[];
}

interface VariableData {
    key: string;
    id: string;
    name: string;
}

export async function getImportedVariables() {
    return await store.getStoreData();
}

export async function syncVariableCollections() {
    const store = await getImportedVariables();
    const data = {};
    store.forEach((value, key, map) => {
        data[key] = value;
    })

    figma.ui.postMessage({ event: "SYNC_VARS", data: data });
}

export async function removeVariableCollection(fileKey) {
    await store.remove(fileKey);
    await syncVariableCollections();
}