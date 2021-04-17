export const buildPolicies = (reducer) => {
  const {
    fepStoredPolicies
  } = reducer;
  return {
    fep: {
      fepStoredPolicies,
    },
    commercial: {
    }
  }
}