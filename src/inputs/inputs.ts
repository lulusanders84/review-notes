import CodeAndService from '../components/Inputs/CodeAndService';
import { CriteriaQuill } from '../components/Inputs/CriteriaQuill';
import RadioInput from '../components/Inputs/RadioInput';
import IntegrationReactSelect from '../components/Inputs/ReactSelectSingle';
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
import { rejectCodes } from '../data/rejectCodes';
import Checkbox from '../components/Inputs/Checkbox';
import Button from '../components/Inputs/Button';
import { saveInfoToPolicy } from '../utils/Inputs/savePair';
import { infoInputs } from '../templates/inputTemplates/info';
import { iq } from '../templates/inputTemplates/iq';
import { paDeter } from '../templates/inputTemplates/paDeter';
import { pricing } from '../templates/inputTemplates/pricing';
import { referReasons } from '../data/referReasons';
import { networkNames } from '../data/networkNames';
import CreatableReactSelect from '../components/Inputs/CreatableReactSelect';
import ReactSelect from '../components/Inputs/ReactSelect';
import { SideBySideInputs } from '../components/Inputs/SideBySideInputs';



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
    component: SimpleSelect,
    logic: (values: IValues): boolean => id === "rationale" 
      ? values.deter === "deny" ? true : false
      : values.paDeter === "denied" ? true : false,
    props: {id, options: Object.keys(rejectCodes), label: "Denial Rationale:"} 
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

  "allowable": {    
    component: TextInput,
    logic: (values: IValues): boolean => 
      values.pricing === "PPPWeb" || values.pricing === "DPW"
        ? true
        : false,
    props: {id:"allowable", label:"Allowed Amount" }
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
    logic: (values: IValues): boolean => {
      const {paRationale, paType, paDeter} = values
      const denial: boolean = rejectCodes[paRationale] ? rejectCodes[paRationale].clinicalRationale : false
      return paType === "related claim"
        ? paDeter === "denied"
          ? denial
          : false
        : false
    }
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

  "compCode": {    
    component: TextInput,
    logic: (values: IValues): boolean => 
      values.pricing === "PPPWeb"
        ? true
        : false,
    props: {id:"compCode", label:"Comparable Code" }
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
    component: TextInput,
    logic: true,
    props: { id: "dose", label: "Dose"}
  },
  
  "doseInputs": {
    component: SideBySideInputs,
    logic: (values: IValues): boolean => values.drugReview && values.lob === "commercial" ? true : false,
    props: {components: ["dose", "doseUnit"], gridSizes: [6, 6], styles: [{marginTop: "7px"}, {}]}
  },

  "doseUnit": {
    component: IntegrationReactSelect,
    logic: true,
    props: {id: "dose", label: "Unit", keepFormat: true}
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
    logic: (values: IValues): boolean => values.relatedInfo === "related",
  },

  "initialSccf": {
    component: TextInput,
    logic: (values: IValues): boolean => values.claimType === "home" && values.relatedInfo === "related" ? true : false,
    props: {id: "initialSccf", label: "Initial SCCF"},
  },

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

  "msr": {    
    component: RadioInput,
    logic: (values: IValues): boolean => 
      values.pricing === "PPPWeb"
        ? true
        : false,
    props: {id:"msr", label:"Comparable Code", options:["Eligible", "Ineligible"] }
  },

  "name": {
    component: TextInput,
    props: {id: "name", label: "Name:"},
    logic: true
  },

  "network" : {
    component: SimpleSelect,
    logic: (values: IValues): boolean => values.pricing === "PPPWeb" && values.lob === "GP" ? true : false,
    props: {id: "network", label:"Network", options: networkNames}
  },

  "noPricingRationale": {    
    component: RadioInput,
    logic: (values: IValues): boolean => 
      values.pricing !== "DPW" && values.pricing !== "PPPWeb"
        ? true
        : false,
    props: {
      id:"noPricingRationale", 
      label: "Reason pricing is not required",
      options: ["Home claim", "POC provider", "Facility claim", "DME", "Lab", "Unclassified code with pricing in PPPWeb"]
    }
  },

  "paDenied": repeatedInputs.denied("paRationale"),

  "paDeter": {
    component: RadioInput,
    logic: true,
    props: {id:"paDeter", options: ["approved", "denied", "pending decision"], label:"Determination:"}
  },

  "paDeterInputs": {
    component: InputsContainer,
    logic: true,
    props: {template: paDeter, denialId: "paRationale"}
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
    component: CreatableReactSelect,
    logic: true,
    props: {id: "pend", label: "Suspension"}
  },

  "plan": {
    component: RadioInput,
    logic: (values: IValues): boolean => values.lob === "GP" ? true : false,
    props: {id:"plan", options: ["platinum blue", "med supp", "MAPD"], label: "Plan"}
  },

  "policy": {
    component: ReactSelect,
    logic: true,
    props: {id: "policy", label:"Medical Policy" }
  },

  "pricing": {
    component: RadioInput,
    logic: true,
    props: {id:"pricing", options: ["Not required", "PPPWeb", "DPW"], label:"Pricing"}
  },

  "pricingInputs": {
    component: InputsContainer,
    logic: (values: IValues): boolean => values.pend && values.pend.some(pend => pend.value === "P5194"),
    props: {template: pricing}
  },

  "provider": repeatedInputs.dos("provider"),

  "rationale" : repeatedInputs.rationale("rationale"),

  "referReason": {
    component: SimpleSelect,
    logic: true,
    props: {
      id:"referReason", 
      label: "Reason for Referral",
      options: referReasons
    }
  },

  "relatedInfo": {
    component: RadioInput,
    logic: true,
    props: {id: "relatedInfo", label:"Request Type:", options: ["new", "related"]}
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
    component: IntegrationReactSelect,
    logic: true,
    props: {notClearable: true, id: "serviceType", label: "Service Type"}
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