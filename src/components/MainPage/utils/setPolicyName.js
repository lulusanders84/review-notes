export const setPolicyName = (policies, oldPolicies) => {
  if(policies.length !==0) {
    const newPolicies = policies.map(policy => {
      const number = policy["Policy #"];
      const name = policy["Full Policy"];
      return {value: number, label: number, name,}  
      })
    if(policies.length >= oldPolicies.length) {
      policies = policies.reduce((acc, policy) => {
        if(!oldPolicies.some(oldPolicy => { return policy.value === oldPolicy.value})) {
          acc.push(policy)
        }
        return acc;
      }, [])
    return [...newPolicies, ...oldPolicies]; 
    } else return newPolicies;
  } else return [];
}
  