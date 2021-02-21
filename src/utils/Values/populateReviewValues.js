import { handleInputs } from "../../redux/actions";

export const populateReviewedValues = (values, dispatch) => {
  const { req, dos, diagnosis, provider } = values;
  const decisionInputs = { 
  "reviewed": "yes",
  "pa-type": "related claim",
  "pa-req": req,
  "pa-dos": dos,
  "pa-diagnosis": diagnosis,
  "pa-provider": provider,
  "pa-deter": "approved",
  "pa-match": "yes",
  "pa-rationale": "",
  }
  Object.keys(decisionInputs).forEach(key => {
    const value = { 
      name: key,
      value: decisionInputs[key]
    }
    dispatch(handleInputs(value))
  })
}