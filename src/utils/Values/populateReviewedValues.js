import { handleInputs } from "../../redux/actions";

export const populateReviewedValues = (values, dispatch) => {
  const { req, dos, diagnosis, provider } = values;
  const decisionInputs = { 
  "reviewed": "yes",
  "paType": "related claim",
  "paReq": req,
  "paDos": dos,
  paDiagnosis: diagnosis,
  "paProvider": provider,
  paDeter: "approved",
  "paMatch": "yes",
  "paRationale": "",
  }
  Object.keys(decisionInputs).forEach(key => {
    const value = { 
      name: key,
      value: decisionInputs[key]
    }
    dispatch(handleInputs(value))
  })
}