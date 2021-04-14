import { handleInputs } from "../redux/actions";

export const noteFrameActions = {
  infoRequest: [
    {
      func: handleInputs,
      params: {name: "deter", value: "deny"}
    },
    {
      func: handleInputs,
      params: {name: "serviceType", value: "Information Request"}
    },
    {
      func: handleInputs,
      params: {name: "rationale", value: "Information Request"}
    },
    {
      func: handleInputs,
      params: {name: "denialType", value: "entire claim"}
    },
  ]
}