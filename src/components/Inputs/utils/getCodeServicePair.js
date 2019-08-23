export const getServiceFromPair = (code) => {
    const storedPairs = JSON.parse(window.localStorage.getItem("codeServicePairs"));
    console.log(storedPairs);
    if(storedPairs) {
        return storedPairs[code] ? storedPairs[code] : null;
    } else return null;

}