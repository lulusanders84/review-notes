export const saveCodeServicePair = (pairArray) => {
    const storedPairs = JSON.parse(window.localStorage.getItem("codeServicePairs"));
    const pairs =  storedPairs ? storedPairs : {};
    pairArray.forEach(pair => {
        pairs[pair.code] = pair.service;
    })
    window.localStorage.setItem("codeServicePairs", JSON.stringify(pairs))
}

