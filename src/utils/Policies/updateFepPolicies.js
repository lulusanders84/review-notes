export const updateFepPolicies = (store, policies) => {
  return policies.map(policy => {
    const number = policy["Policy #"];
    policy.href = store[number] ? store[number].href : null;
    return policy;
  });
};
