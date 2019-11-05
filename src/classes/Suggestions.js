export default class Suggestions {
  constructor() {
    
  }
}

export function suggestions (dataFile) {
  if(Array.isArray(dataFile)) {
      return dataFile.map(data => {
          return utils.createSelectValue(data);
      })
  } else {
      return Object.keys(dataFile).map(key =>{
          return utils.createSelectValue(key);
      });
  }
}
export function policySuggestions(lob) {
const policies = lob === "commercial" ? medPolicies : [...fepPolicies,...medPolicies];
const suggestions = policies.map(policy => {
    return buildPolicy(policy)
});
return suggestions;
}

export function buildPolicy(policy) {
if(policy) {
    const number = policy["Policy #"];
    const name = policy["Full Policy"];
    return {value: number, label: `${number}: ${name}`}   
} else return null;

}