import { setPolicyByCode } from "../../ReviewNotes";

export const handlePolicyViaCode = (value, values) => {
  const { lob, policy } = values;
  const codes = value.value;
  const policies = setPolicyByCode(codes, lob);
  console.log(codes, policies)
  if(policies) {
    const policiesInValues = policy;
    const allPolicies = [...policiesInValues, ...policies];
    const policyNumbers = Array.from(new Set(allPolicies.map(policy => { return policy["Policy #"]})))
    return policyNumbers.map( number => {
      return allPolicies.find(policy => {
        return policy["Policy #"] === number
      })
    })
  } else return values.policies
}