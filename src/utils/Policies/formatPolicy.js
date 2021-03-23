export const formatPolicy = (policy) => {
  if (policy["Full Policy"] === undefined) {
    const fullName = policy["Brand Drug Name"] !== undefined && policy["Brand Drug Name"] !== ""
      ? policy["Brand Drug Name"]
      : policy["Full Policy Description (or Generic Name (s) of Drug)"];
    policy["Full Policy"] = fullName;
  }
    return policy;
};
