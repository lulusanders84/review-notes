export function buildPolicy(policy) {
  if(policy) {
      const number = policy["Policy #"];
      const name = policy["Full Policy"];
      return {value: number, label: `${number}: ${name}`, name, ...policy}   
  } else return null;
  
}