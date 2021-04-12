export function buildPolicy(policy) {
  if(policy) {
      const number = policy["Policy #"];
      const name = policy["Full Policy"];
      const href = policy.href;
      const info = policy.info;
      return {value: number, label: `${number}: ${name}`, href, info, name}   
  } else return null;
  
}