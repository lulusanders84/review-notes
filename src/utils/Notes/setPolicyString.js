export const setPolicyString = (values, field) => {
  return values.policy.length > 0 
    ? values.policy.map(policy => {
      const number = policy["Policy #"];
      const policyType = setPolicyType(number);
      const name = number === "InterQual"
        ? setInterqual(values, field)
        : `${policyType} ${number}`;
      return name}).join(" / ") 
    : "N/A";
}

const setPolicyType = (number) => {
  return number !== "InterQual"
    ? isNaN(number.charAt(0))
      ? "BCBSMN"
      : "FEP"
    : ""
}

export const setInterqual = (values, field) => {
  const { iqYear, iqLoc, iqSubset } = values;
  switch(field) {
    case "med policy":
      return `InterQual ${iqYear} (LOC: ${iqLoc}, Subset: ${iqSubset})`;
    default:
      return `InterQual ${iqYear}`
  }
   
}