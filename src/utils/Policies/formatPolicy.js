export const formatPolicy = (rawPolicy) => {
  if (rawPolicy["Full Policy"] === undefined) {
    const fullName = rawPolicy["Brand Drug Name"] !== undefined && rawPolicy["Brand Drug Name"] !== ""
      ? rawPolicy["Brand Drug Name"]
      : rawPolicy["Full Policy Description (or Generic Name (s) of Drug)"];
    const policy = {
      "Policy #": rawPolicy["Policy #"],
      "Full Policy": fullName,
      "CPT": rawPolicy["CPT Code (s)"],
      "HCPCS": rawPolicy["HCPCS Code (s)"],
      "info": rawPolicy["info"]
    };
    return policy;
  }
  else
    return rawPolicy;
};
