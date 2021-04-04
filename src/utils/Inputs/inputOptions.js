
class Options {
  constructor(input, addOption) {
    this[input] = addOption !== undefined
      ? [...this[input], ...addOption]
      : this[input];
  }
  claimSystemOptions = (special) => {
    return special === "host" ? ["live", "adjustment"] : ["OCWA", "INSINQ"];
  }
  claimTypeOptions = ["local", "home"];
  deterOptions = ["approve", "deny", "send to medical director"];
  lobOptions = ["commercial", "FEP", "GP"];
  planOptions = ["platinum blue", "med supp", "MAPD"];
  specialOptions = ["N/A", "employee", "foreign", "hormel", "host"]
}


export const getOptions = (input, special, addOption) => {
  const options = new Options(input, addOption);
  return special 
    ? options[input](special)
    : options[input];
}