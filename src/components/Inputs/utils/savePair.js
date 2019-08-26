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

export const saveInfoToPolicy = (values) => {
  let storageLocation = "fepPolicies";
  if(values.lob === "commercial") {
    storageLocation = "bcbsmnPolicies";
  }
  const storedPolicies = JSON.parse(window.localStorage.getItem(storageLocation));
  values.policy.forEach(policy => {
    const policyIndex = storedPolicies.findIndex(storedPolicy => {
      return storedPolicy["Policy #"] === policy["Policy #"];
    });
    storedPolicies[policyIndex].info = values.info;
  })
  window.localStorage.setItem(storageLocation, JSON.stringify(storedPolicies))
}

