export const savePair = (storageLocation, pairArray) => {
    const storedPairs = JSON.parse(window.localStorage.getItem(storageLocation));
    const pairs =  storedPairs ? storedPairs : {};
    pairArray.forEach(pair => {
        Object.keys(pair).forEach(key => {
          pairs[key] = pair[key].toLowerCase();  
        })
        
    })
    window.localStorage.setItem(storageLocation, JSON.stringify(pairs))
}

