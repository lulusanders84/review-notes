import { policies } from "../../../Policies/policies";

export const handlePolicyViaCode = (value, values) => {
  const { lob, policy } = values;
  const codes = value.value;
  return policies.getPoliciesByCodes(codes, lob) || policy
}