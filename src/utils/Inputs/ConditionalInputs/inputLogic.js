export const inputLogic = {
  doseInput: (values) => {
    return values.drugReview && values.lob === "commercial"
      ? true
      : false
    },
  drugReviewType: (values) => {
    return values.drugReview && values.reviewed === "no"
      ? true
      : false 
    },
  paList: (values) => {
    return values.claimType === "local" && values.lob === "commercial"
      ? true
      : false
  },
  pricingInputs: (values) => {
    return values.pend && values.pend.some(pend => pend.value === "P5194")
      ? true
      : false
  },
  exCircum: (values) => {
    return values.deter === "approve" && values.allMet === false
      ? true
      : false
  },
  covidRelated: (values) => {
    return values.pend.some(element => element.value === "CZB") 
      ? true
      : false
  },
  c3x: (values) => {
    return values.c3xPend 
  },
  sccf: (values) => {
    return values.claimType === "home"
      ? true
      : false
  }
}