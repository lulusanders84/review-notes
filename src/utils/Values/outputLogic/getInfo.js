export const getInfo = (policies) => {
  return policies.reduce((acc, policy) => {
    if (policy.info !== "") {
      acc.push(policy.info);
    }
    return acc;
  }, []).join("\n\n");
};
