export const updateFepPolicies = (store, policies) => {
  Object.keys(policies).forEach(number => {
    policies[number].href = store[number] ? store[number].href : null;
  })
  return policies;
};
