export const store: Map<string, LibraryVariable[]> = new Map();

export async function getStoreData() {
    store.clear();
    const libraryCollections = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync().catch(e => {
        throw e;
    });

    await Promise.all(libraryCollections.map(async (collection) => {
        return await figma.teamLibrary.getVariablesInLibraryCollectionAsync(collection.key).then(data => {
            let variables: LibraryVariable[] = store.get(collection.libraryName) || [];
            variables = variables.concat(data);
            store.set(collection.libraryName, variables);
        });
    }));

    const localLibraryVariables = await collectLocalVariables();

    if(localLibraryVariables) {
        store.set(localLibraryVariables.name, localLibraryVariables.libraryVariables)
    }

    return store;
}

async function collectLocalVariables() {
    const variables = await figma.variables.getLocalVariablesAsync().catch(err => {
        throw (err);
    });

    const libraryVariables: LibraryVariable[] = variables.map(variable => {
        const {
            key, resolvedType, name
        } = variable;

        return { name, key, resolvedType };
    })

    let name = "Local variables";

    if(libraryVariables.length) {
        return {name, libraryVariables}
    }
    else {
        return null;
    }
}


export async function set(name: string, data: LibraryVariable[]) {
    store.set(name, data)
    return store;
}

export function get(name) {
    return store.get(name)
}

export async function remove(name) {
    store.delete(name)
    return store;
}

export function clearStore() {
    store.clear();
    return store;
}