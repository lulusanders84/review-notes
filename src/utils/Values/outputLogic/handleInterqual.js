export const handleInterqual = (policy) => {
  return policy.value.some(policy => {
    return policy["Policy #"] === "InterQual";
  });
};
