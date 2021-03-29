import { displayClinicalRationale } from "./utils/Inputs/displayClinicalRationale";

export const logic = {
  components: {
    capWordButtons: values => values.show,
    inputs: {
      c3x: values => values.c3xPend,  
      covidRelated: values => values.pend.some(element => element.value === "CZB") ? true : false,
      clinicalRationale: values => values.denialId === "paRationale" ? displayClinicalRationale(values) : false,         
      denialType: values => values.denialId !== "paRationale" ? true : false,
      deniedInputs: values => values.deter === "deny" || values.paDeter === "denied" ? true : false,
      doseInput: values => values.drugReview && values.lob === "commercial" ? true : false,
      drugReviewType: values => values.drugReview && values.reviewed === "no" ? true : false,
      exCircum: values => values.deter === "approve" && values.allMet === false ? true : false,      
      paList: values => values.claimType === "local" && values.lob === "commercial" ? true : false,
      pricingInputs: values => values.pend && values.pend.some(pend => pend.value === "P5194") ? true : false,
      reviewedInputs: values => values.reviewed === "yes" ? true : false,
      sccf: values => values.claimType === "home" ? true : false
    }
  }
}