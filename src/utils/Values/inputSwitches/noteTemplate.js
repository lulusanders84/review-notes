export const noteTemplate = (value) => {
  if(value.value === "misroute") {
    return { serviceType: "Misroute"}
  } else return {}
}