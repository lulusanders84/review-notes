export const saveCodeServicePair = (pairArray) => {
    const storedPairs = JSON.parse(window.localStorage.getItem("codeServicePairs"));
    const pairs =  storedPairs ? storedPairs : {};
    console.log(pairArray);
    pairArray.forEach(pair => {
        pairs[pair.code] = pair.service.toLowerCase();
    })
    window.localStorage.setItem("codeServicePairs", JSON.stringify(pairs))
}

