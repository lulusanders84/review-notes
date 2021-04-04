import BenefitsInput from '../components/Inputs/BenefitsInput';
import ClaimInfoInputs from '../components/Inputs/ClaimInfoInputs';
import CodeAndService from '../components/Inputs/CodeAndService';
import Conditional from '../components/Inputs/ConditionalInputs/conditionalInputs';
import DeterInputs from '../components/Inputs/DeterInputs';
import InfoInputs from '../components/Inputs/InfoInputs';
import PendInput from '../components/Inputs/PendInput';
import PolicyInput from '../components/Inputs/PolicyInput';
import RadioInput from '../components/Inputs/RadioInput';
import { RelatedInfo } from '../components/Inputs/RelatedInfo';
import ServiceTypeInput from '../components/Inputs/ServiceTypeInput';
import TextInput from '../components/Inputs/TextInput';

import IInputs from '../interfaces/IInputs';
import IValues from '../interfaces/IValues'


const repeatedInputs = {
  diagnosis: (id: string) => ({
    component: TextInput,
    componentType: "propped",
    props: {id, label: "Diagnosis:"},
    logic: true
  }),

  dos: (id: string) => ({
    component: TextInput,
    componentType: "propped",
    props: {id, label: "DOS:"},
    logic: true
  }),

  provider: (id: string) => ({
    component: TextInput,
    componentType: "propped",
    props: {id, label: "Provider:"},
    logic: true
  }),

  sccf: (id: string, label: string) => ({
    component: TextInput,
    componentType: "propped",
    props: {id, label},
    logic: (values: IValues): boolean => values.claimType === "home" ? true : false
  })
}

export const inputs: IInputs = {

  "age": {
    component: TextInput,
    componentType: "propped",
    props: {id: "age", label: "Age:"},
    logic: true
  },

  "benefits": {
    component: BenefitsInput,
    componentType: "propless",
    logic: true
  },

  "c3x": {
    component: RadioInput,
    componentType: "propped",
    props: {id: "c3x", label: "On C3X list?", options: ["yes", "no"]},
    logic: (values: IValues): boolean => values.pend && values.pend.some(pend => pend.value === "C3X")
  },

  "claimHistory": {
    component: TextInput,
    componentType: "propped",
    props: {id: "claimHistory", label: "Claim history:"},
    logic: (values: IValues): boolean => values.reviewed === "no" ? true : values.paType !== "PA" ? true : false,
  },

  "claimInfo": {
    component: ClaimInfoInputs,
    componentType: "propless",
    logic: true
  },

  "code": {
    component: TextInput,
    componentType: "propped",
    logic: (values: IValues): boolean => 
      values.denialType !== "entire claim" && values.deter === "deny"
        ? true
        : false,
    props: {id:"code", label:"Suspended Codes" }

  },

  "codeAndService": {
    component: CodeAndService,
    componentType: "propless",
    logic: true
  },

  "covidRelated": {
    component: RadioInput,
    componentType: "propped",
    logic: (values: IValues): boolean => values.pend.some(element => element.value === "CZB"),
    props: {id: "covidRelated", options: ["yes", "no"], label:"Treatment is COVID-19 related?" }
  }, 

  "deter": {
    component: DeterInputs,
    componentType: "propless",
    logic: true
  },

  "diagnosis": repeatedInputs.diagnosis("diagnosis"),

  "dos": repeatedInputs.dos("dos"),

  "dose": {
    component: Conditional.Dose,
    componentType: "propless",
    logic: (values: IValues): boolean => values.drugReview && values.lob === "commercial" ? true : false,
  },

  "drugReviewType": {
    component: RadioInput,
    componentType: "propped",
    logic: (values: IValues): boolean => values.drugReview && values.reviewed === "no" ? true : false,
    props: {id:"drugReviewType", options: ["new", "renewal"], label:"Drug Review Type"}
  },

  "exCircum": {
    component: TextInput,
    componentType: "propped",
    props: {id: "exCircum", label:"Extenuating Circumstances"},
    logic: true
  },

  "info": {
    component: InfoInputs,
    componentType: "propless",
    logic: true
  },

  "initialReq": {
    component: TextInput,
    componentType: "propped",
    props: {id: "initialReq", label: "Initial REQ-"},
    logic: true
  },

  "initialSccf": repeatedInputs.sccf("initialSccf", "Initial SCCF:"),

  "name": {
    component: TextInput,
    componentType: "propped",
    props: {id: "name", label: "Name:"},
    logic: true
  },

  "paDiagnosis": repeatedInputs.diagnosis("paDiagnosis"),

  "paDos": repeatedInputs.dos("paDos"),

  "paList": {
    component: RadioInput,
    componentType: "propped",
    logic: (values: IValues): boolean => values.claimType === "local" && values.lob === "commercial" ? true : false,
    props: {id: "paList", options: ["no", "yes"], label:"On PA List?"}
  },

  "paProvider": repeatedInputs.dos("paProvider"),

  "par": {
    component: RadioInput,
    componentType: "propped",
    props: {id: "proPar", label: "Par status:", options: ["Par", "Non-Par"]},
    logic: true
  },      

  "pend": {
    component: PendInput,
    componentType: "propless",
    logic: (values: IValues): boolean => values.deter === "approve" ? true : false,
 
  },

  "policy": {
    component: PolicyInput,
    componentType: "propless",
    logic: true
  },

  "pricing": {
    component: Conditional.PricingInputs,
    componentType: "propless",
    logic: (values: IValues): boolean => values.pend && values.pend.some(pend => pend.value === "P5194")
  },

  "provider": repeatedInputs.dos("provider"),

  "relatedInfo": {
    component: RadioInput,
    componentType: "propped",
    logic: true,
    props: {id: "relatedInfo", label:"Request Type:", options: ["new", "related"]}
  },

  "relatedInfoInputs": {
    component: RelatedInfo,
    componentType: "propless",
    logic: (values: IValues): boolean => values["relatedInfo"] === "related",
  },

  "related": {
    component: TextInput,
    componentType: "propped",
    props: {id: "related", label: "Related UM REQs:"},
    logic: true
  },

  "req": {
    component: TextInput,
    componentType: "propped",
    props: {id: "req", label: "REQ-"},
    logic: true
  },

  "reviewed": {
    component: RadioInput,
    componentType: "propped",
    logic: true,
    props: {id: "reviewed", label: "Following a decision:", options: ["no", "yes"]},      
  },

  "reviewedInputs": {
    component: Conditional.ReviewedInputs,
    componentType: "propless",
    logic: (values: IValues): boolean => values.reviewed === "yes" ? true : false
  },


  "sccf": repeatedInputs.sccf("sccf", "SCCF:"),

  "serviceType": {
    component: ServiceTypeInput,
    componentType: "propless",
    logic: true
  },
  
  "summary": {
    component: TextInput,
    componentType: "propped",
    props: {id:"summary", multiline: true, rows:"5", label:"Additional Clinical information"},
    logic: true
  }
}

export default inputs