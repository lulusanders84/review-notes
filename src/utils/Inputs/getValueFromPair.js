export const getValueFromPair = (storageLocation, key) => {
    const pair = getStoredPair(storageLocation, key);
    return pair ? pair[key] : null;
}

const getStoredPair = (storageLocation, key) => {
    const storedPairs = JSON.parse(window.localStorage.getItem(storageLocation));
    if(storedPairs) {
        return storedPairs[key] ? {[key]: storedPairs[key]} : null;
    } else return null;
}