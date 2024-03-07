export const store: Map<string, LibraryVariable[]> = new Map();

export async function getStoreData() {
    store.clear();
    const libraryCollections = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync().catch(e => {
        throw e;
    });

    for(const collection of libraryCollections) {
        await getVariablesInLibraryCollection(collection, store);
    }

    const localLibraryVariables = await collectLocalVariables();

    if(localLibraryVariables) {
        store.set(localLibraryVariables.name, localLibraryVariables.libraryVariables)
    }
    debugger
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


async function getVariablesInLibraryCollection(collection: LibraryVariableCollection, store: Map<string, LibraryVariable[]> ) {
    let variables: LibraryVariable[] = store.get(collection.libraryName) || [];

    let collectionVars = await figma.teamLibrary.getVariablesInLibraryCollectionAsync(collection.key);
    variables = variables.concat(collectionVars)

    store.set(collection.libraryName, variables)
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