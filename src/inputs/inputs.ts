import CodeAndService from '../components/Inputs/CodeAndService';
import { CriteriaQuill } from '../components/Inputs/CriteriaQuill';
import Dose from '../components/Inputs/Dose'
import PaDeterInputs from '../components/Inputs/PaDeterInputs';
import PendInput from '../components/Inputs/PendInput';
import PolicyInput from '../components/Inputs/PolicyInput';
import PricingInputs from '../components/Inputs/PricingInputs';
import RadioInput from '../components/Inputs/RadioInput';
import IntegrationReactSelect from '../components/Inputs/ReactSelectSingle';
import { RelatedInfo } from '../components/Inputs/RelatedInfo';
import ServiceTypeInput from '../components/Inputs/ServiceTypeInput';
import SimpleSelect from '../components/Inputs/SimpleSelect';
import TextInput from '../components/Inputs/TextInput';
import InputsContainer from '../components/InputsContainer';

import IInputs from '../interfaces/IInputs';
import IValues from '../interfaces/IValues'
import { reviewed } from '../templates/inputTemplates';
import { claimInfo } from '../templates/inputTemplates/claimInfo';
import { criteria } from '../templates/inputTemplates/criteria';
import { denied } from '../templates/inputTemplates/denied';
import { deter } from '../templates/inputTemplates/deter';
import { getStorage } from '../utils';
import { suggestions } from '../utils/AutoComplete';
import { displayClinicalRationale } from '../utils/Inputs/displayClinicalRationale';
import { rejectCodes } from '../data/rejectCodes';
import Checkbox from '../components/Inputs/Checkbox';
import Button from '../components/Inputs/Button';
import { saveInfoToPolicy } from '../utils/Inputs/savePair';
import { infoInputs } from '../templates/inputTemplates/info';
import { iq } from '../templates/inputTemplates/iq';

const repeatedInputs = {


  denied: (denialId: string) => ({
    component: InputsContainer,
    logic: (values: IValues): boolean => { 
      return values.reviewed === "no" 
        ? values.deter === "deny"
          ? true
          : false
        : values.paDeter === "denied"
          ? true
          : false 
    },
    props: {template: denied(denialId), denialId}
  }),

  diagnosis: (id: string) => ({
    component: TextInput,
    props: {id, label: "Diagnosis:"},
    logic: true
  }),

  dos: (id: string) => ({
    component: TextInput,
    props: {id, label: "DOS:"},
    logic: true
  }),

  provider: (id: string) => ({
    component: TextInput,
    props: {id, label: "Provider:"},
    logic: true
  }),

  rationale: (id: string) => ({
    component: IntegrationReactSelect,
    logic: (values: IValues): boolean => id === "rationale" 
      ? values.deter === "deny" ? true : false
      : values.paDeter === "denied" ? true : false,
    props: {id, suggestions: suggestions(rejectCodes), label: "Denial Rationale:"} 
  }),

  req: (id: string) => ({
    component: TextInput,
    props: {id, label: "REQ-"},
    logic: true
  }),

  sccf: (id: string, label: string) => ({
    component: TextInput,
    props: {id, label},
    logic: (values: IValues): boolean => values.claimType === "home" ? true : false
  })
}

export const inputs: IInputs = {

  "age": {
    component: TextInput,
    props: {id: "age", label: "Age:"},
    logic: true
  },

  "allMet": {
    component: Checkbox,
    logic: (values: IValues): boolean => values.deter === "approve" ? true : false,
    props: {id: "allMet", label: "All crtieria met", disabled: false}
  },

  "benefits": {
    component: TextInput,
    logic: (values: IValues): boolean => values.lob !== "FEP" ? true : false,
    props: { id:"benefits", label:"Benefits"}
  },

  "c3x": {
    component: RadioInput,
    props: {id: "c3x", label: "On C3X list?", options: ["yes", "no"]},
    logic: (values: IValues): boolean => values.pend && values.pend.some(pend => pend.value === "C3X")
  },

  "claimHistory": {
    component: TextInput,
    props: {id: "claimHistory", label: "Claim history:"},
    logic: (values: IValues): boolean => values.reviewed === "no" ? true : values.paType !== "PA" ? true : false,
  },

  "claimInfo": {
    component: InputsContainer,
    logic: true,
    props: {template: claimInfo}
  },

  "claimSystem": {
    component: RadioInput,
    logic: (values: IValues): boolean => values.special !== "host" ? true : false,
    props: {id: "claimSystem", options: ["OCWA", "INSINQ"], label:"Claim System"}
  },

  "claimType": {
    component: RadioInput,
    logic: (values: IValues): boolean => values.lob === "commercial"
      ? true
      : values.lob === "GP" && values.plan === "MAPD"
        ? true
        : false,
    props: {id: "claimType", options: ["local", "home"], label:"Claim Type"},
  },

  "clinicalRationale": {
    component: TextInput,
    props: {id:"clinicalRationale", multiline: true, rows:"10", label:"Clinical Rationale"},
    logic: (values: IValues): boolean => values.denialId === "paRationale" ? displayClinicalRationale(values) : false, 
  },

  "code": {
    component: TextInput,
    logic: (values: IValues): boolean => 
      values.denialType !== "entire claim" && values.deter === "deny"
        ? true
        : false,
    props: {id:"code", label:"Suspended Codes" }
  },

  "codeAndService": {
    component: CodeAndService,
    logic: true
  },

  "covidRelated": {
    component: RadioInput,
    logic: (values: IValues): boolean => values.pend.some(element => element.value === "CZB"),
    props: {id: "covidRelated", options: ["yes", "no"], label:"Treatment is COVID-19 related?" }
  },

  "criteriaInputs": {
    component: InputsContainer,
    logic: (values: IValues): boolean => values.deter === "send to medical director" ? true : false,
    props: {template: criteria}
  },

  "criteriaMet": {
    component: CriteriaQuill,
    logic: true,
    props: {id: "criteriaMet", label:"Criteria Met"}
  },

  "criteriaNotMet": {
    component: CriteriaQuill,
    logic: true,
    props: {id: "criteriaNotMet", label:"Criteria Not Met"}
  },
  
  "denialType": {
    component: RadioInput,
    logic: (values: IValues): boolean => values.denialId !== "paRationale" && values.deter === "deny" ? true : false,
    props: {id: "denialType", options: ["entire claim", "code only"], label:"Deny"},
  },

  "denied": repeatedInputs.denied("rationale"),

  "deter": {
    component: RadioInput,
    logic: true,
    props: {id: "deter", options: ["approve", "deny", "send to medical director"], label:"Determination"}
  },

  "deterInputs": {
    component: InputsContainer,
    logic: true,
    props: {template: deter}
  },

  "diagnosis": repeatedInputs.diagnosis("diagnosis"),

  "dos": repeatedInputs.dos("dos"),

  "dose": {
    component: Dose,
    logic: (values: IValues): boolean => values.drugReview && values.lob === "commercial" ? true : false,
  },

  "drugReviewType": {
    component: RadioInput,
    logic: (values: IValues): boolean => values.drugReview && values.reviewed === "no" ? true : false,
    props: {id:"drugReviewType", options: ["new", "renewal"], label:"Drug Review Type"}
  },

  "exCircum": {
    component: TextInput,
    props: {id: "exCircum", label:"Extenuating Circumstances"},
    logic: true
  },

  "fepBenefits": {
    component: IntegrationReactSelect,
    logic: (values: IValues): boolean => values.lob === "FEP" ? true : false,
    props: {
      id: "fepBenefits", 
      label: "Benefits", 
      suggestions: getStorage("fepBenefits", []),
      sentence: true 
    },
  },

  "hostSystem": {
    component: RadioInput,
    logic: (values: IValues): boolean => values.special === "host" ? true : false,
    props: {id: "hostSystem", options: ["live", "adjustment"], label:"Claim System:"}
  },

  "info": {
    component: TextInput,
    logic: true,
    props: {id:"info", multiline: true, rows:"5", label: "Info To Request"}
  },

  "infoInputs": {
    component: InputsContainer,
    logic: true,
    props: {template: infoInputs}
  },

  "initialReq": {
    component: TextInput,
    props: {id: "initialReq", label: "Initial REQ-"},
    logic: true
  },

  "initialSccf": repeatedInputs.sccf("initialSccf", "Initial SCCF:"),

  "iqInputs": {
    component: InputsContainer,
    logic: (values: IValues): boolean => Array.isArray(values.policy)
      ? values.policy.some(policy => policy["Policy #"] === "InterQual") ? true : false
      : false,
    onCard: true,
    props: {template: iq} 
  },

  "iqLoc": {
    component: TextInput,
    props: {id: "iqLoc", label: "InterQual LOC"},
    logic: true
  },

  "iqSubset": {
    component: TextInput,
    props: {id: "iqSubset", label: "InterQual Subset"},
    logic: true
  },

  "iqYear": {
    component: TextInput,
    props: {id: "iqYear", label: "InterQual Year"},
    logic: true
  },

  "lob": {
    component: RadioInput,
    logic: true,
    props: {id:"lob", options: ["commercial", "FEP", "GP"], label:"LOB:"}
  },

  "misrouteRationale": {
    component: TextInput,
    logic: true,
    props: {id:"misrouteRationale", label:"Misroute Rationale"}
  },

  "name": {
    component: TextInput,
    props: {id: "name", label: "Name:"},
    logic: true
  },

  "paDenied": repeatedInputs.denied("paRationale"),

  "paDeter": {
    component: PaDeterInputs,
    logic: true
  },

  "paDiagnosis": repeatedInputs.diagnosis("paDiagnosis"),

  "paDos": repeatedInputs.dos("paDos"),

  "paList": {
    component: RadioInput,
    logic: (values: IValues): boolean => values.claimType === "local" && values.lob === "commercial" ? true : false,
    props: {id: "paList", options: ["no", "yes"], label:"On PA List?"}
  },

  "paMatch": {
    component: RadioInput,
    props: {id: "paMatch", label: "Claim matches for diagnosis and provider?:", options: ["yes", "no"]},
    logic: true
  },

  "paProvider": repeatedInputs.dos("paProvider"),

  "par": {
    component: RadioInput,
    props: {id: "proPar", label: "Par status:", options: ["Par", "Non-Par"]},
    logic: true
  }, 
  
  "paRationale" : repeatedInputs.rationale("paRationale"),

  "paReq": repeatedInputs.req("paReq"),

  "paType": {
    component: RadioInput,
    props: {id: "paType", label: "Review type:", options: ["PA", "related claim"]},
    logic: true
  }, 

  "pend": {
    component: PendInput,
    logic: (values: IValues): boolean => values.deter === "approve" ? true : false,
 
  },

  "plan": {
    component: RadioInput,
    logic: (values: IValues): boolean => values.lob === "GP" ? true : false,
    props: {id:"plan", options: ["platinum blue", "med supp", "MAPD"], label: "Plan"}
  },

  "policy": {
    component: PolicyInput,
    logic: true
  },

  "pricing": {
    component: PricingInputs,
    logic: (values: IValues): boolean => values.pend && values.pend.some(pend => pend.value === "P5194")
  },

  "provider": repeatedInputs.dos("provider"),

  "rationale" : repeatedInputs.rationale("rationale"),

  "referReason": {
    component: IntegrationReactSelect,
    logic: true,
    props: {
      id:"referReason", 
      label: "Reason for Referral",
      suggestions: ["Medical Necessity", "Benefit", "Cosmetic", "Investigative", "Mandatory Medical Director Review"], 
    }
  },

  "relatedInfo": {
    component: RadioInput,
    logic: true,
    props: {id: "relatedInfo", label:"Request Type:", options: ["new", "related"]}
  },

  "relatedInfoInputs": {
    component: RelatedInfo,
    
    logic: (values: IValues): boolean => values["relatedInfo"] === "related",
  },

  "related": {
    component: TextInput,
    props: {id: "related", label: "Related UM REQs:"},
    logic: true
  },

  "req": repeatedInputs.req("req"),

  "reviewed": {
    component: RadioInput,
    logic: true,
    props: {id: "reviewed", label: "Following a decision:", options: ["no", "yes"]},      
  },

  "reviewedInputs": {
    component: InputsContainer,
    logic: (values: IValues): boolean => values.reviewed === "yes" ? true : false,
    onCard: true,
    props: {template: reviewed}
  },

  "saveInfo": {
    component: Button,
    logic: true,
    props: {clickHandling: saveInfoToPolicy, preClickLabel: "Save Info to Policy", postClickLabel: "Saved"}
  },

  "sccf": repeatedInputs.sccf("sccf", "SCCF:"),

  "serviceType": {
    component: ServiceTypeInput,
    logic: true
  },

  "special": {
    component: SimpleSelect,
    logic: (values: IValues): boolean => values.lob === "commercial" ? true : false,
    props: {
      id: "special", 
      options: ["N/A", "employee", "foreign", "hormel", "host", ], 
      label: "Specialty claim"}
  },
  
  "summary": {
    component: TextInput,
    props: {id:"summary", multiline: true, rows:"5", label:"Additional Clinical information"},
    logic: true
  }
}

export default inputs