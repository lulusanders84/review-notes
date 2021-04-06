import BenefitsInput from '../components/Inputs/BenefitsInput';
import ClaimInfoInputs from '../components/Inputs/ClaimInfoInputs';
import CodeAndService from '../components/Inputs/CodeAndService';
import DeniedInputs from '../components/Inputs/DeniedInputs';
import DeterInputs from '../components/Inputs/DeterInputs';
import Dose from '../components/Inputs/Dose'
import InfoInputs from '../components/Inputs/InfoInputs';
import PaDeterInputs from '../components/Inputs/PaDeterInputs';
import PendInput from '../components/Inputs/PendInput';
import PolicyInput from '../components/Inputs/PolicyInput';
import PricingInputs from '../components/Inputs/PricingInputs';
import RadioInput from '../components/Inputs/RadioInput';
import { RelatedInfo } from '../components/Inputs/RelatedInfo';
import ReviewedInputs from '../components/Inputs/ReviewedInputs';
import ServiceTypeInput from '../components/Inputs/ServiceTypeInput';
import TextInput from '../components/Inputs/TextInput';

import IInputs from '../interfaces/IInputs';
import IValues from '../interfaces/IValues'
import { displayClinicalRationale } from '../utils/Inputs/displayClinicalRationale';


const repeatedInputs = {

  denied: (denialId: string) => ({
    component: DeniedInputs,
    componentType: "propped",
    logic: (values: IValues): boolean => { 
      return values.reviewed === "no" 
        ? values.deter === "deny"
          ? true
          : false
        : values.paDeter === "denied"
          ? true
          : false 
    },
    props: {denialId}
  }),
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

  req: (id: string) => ({
    component: TextInput,
    componentType: "propped",
    props: {id, label: "REQ-"},
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

  "clinicalRationale": {
    component: TextInput,
    componentType: "propped",
    props: {id:"clinicalRationale", multiline: true, rows:"10", label:"Clinical Rationale"},
    logic: (values: IValues): boolean => values.denialId === "paRationale" ? displayClinicalRationale(values) : false, 
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
  
  "denialType": {
    component: RadioInput,
    componentType: "propped",
    logic: (values: IValues): boolean => values.denialId !== "paRationale" && values.deter === "deny" ? true : false,
    props: {id: "denialType", options: ["entire claim", "code only"], label:"Deny"},
  },

  "denied": repeatedInputs.denied("rationale"),

  "deter": {
    component: DeterInputs,
    componentType: "propless",
    logic: true
  },

  "diagnosis": repeatedInputs.diagnosis("diagnosis"),

  "dos": repeatedInputs.dos("dos"),

  "dose": {
    component: Dose,
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

  "misrouteRationale": {
    component: TextInput,
    componentType: "propped",
    logic: true,
    props: {id:"misrouteRationale", label:"Misroute Rationale"}
  },

  "name": {
    component: TextInput,
    componentType: "propped",
    props: {id: "name", label: "Name:"},
    logic: true
  },

  "paDenied": repeatedInputs.denied("paRationale"),

  "paDeter": {
    component: PaDeterInputs,
    componentType: "propless",
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

  "paMatch": {
    component: RadioInput,
    componentType: "propped",
    props: {id: "paMatch", label: "Claim matches for diagnosis and provider?:", options: ["yes", "no"]},
    logic: true
  },

  "paProvider": repeatedInputs.dos("paProvider"),

  "par": {
    component: RadioInput,
    componentType: "propped",
    props: {id: "proPar", label: "Par status:", options: ["Par", "Non-Par"]},
    logic: true
  },      

  "paReq": repeatedInputs.req("paReq"),

  "paType": {
    component: RadioInput,
    componentType: "propped",
    props: {id: "paType", label: "Review type:", options: ["PA", "related claim"]},
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
    component: PricingInputs,
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

  "req": repeatedInputs.req("req"),

  "reviewed": {
    component: RadioInput,
    componentType: "propped",
    logic: true,
    props: {id: "reviewed", label: "Following a decision:", options: ["no", "yes"]},      
  },

  "reviewedInputs": {
    component: ReviewedInputs,
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