
const options = {
  claimSystemOptions: ["OCWA", "INSINQ"],
  hostOptions: ["live", "adjustment"],
  claimTypeOptions: ["local", "home"],
  deterOptions: ["approve", "deny", "send to medical director"],
  lobOptions: ["commercial", "FEP", "GP"],
  planOptions: ["platinum blue", "med supp", "MAPD"],
  specialOptions: ["N/A", "employee", "foreign", "hormel", "host"]
}


export const getOptions = (input) => {
  return options[input]
}