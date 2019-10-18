export const setPolicyString = (values, field) => {
  return values.policy.length > 0 
    ? values.policy.map(policy => {
      const number = policy["Policy #"];
      const name = number === "InterQual"
        ? setInterqual(values, field)
        : number;
      return name}).join(" / ") 
    : "N/A";
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