
import { components } from '../../../utils/Inputs/ConditionalInputs'
import Dose from './Dose';
import PricingInputs from './PricingInputs';
import ReviewedInputs from './ReviewedInputs';
import DeniedInputs from './DeniedInputs';
import DeterInputs from '../DeterInputs';

export const Conditional = {
  C3XList: components["radio"]({id: "c3x", options: ["yes", "no"], label:"On C3X list?"}),
  ClinicalRationale: components["text"]({id:"clinicalRationale", multiline: true, rows: "10", placeholder:"", label: "Clinical Rationale"}),
  CovidRelated: components["radio"]({id: "covidRelated", options: ["yes", "no"], label:"Treatment is COVID-19 related?" }),
  DenialType: components["radio"]({id: "denialType", options: ["entire claim", "code only"], label:"Deny"}),
  DeniedInputs,
  DeterInputs,
  Dose,
  DrugReviewType: components["radio"]({id:"drugReviewType", options: ["new", "renewal"], label:"Drug Review Type"}),
  ExCircum: components["text"]({id: "exCircum", placeholder:"", label:"Extenuating Circumstances"}),
  PAList: components["radio"]({id: "paList", options: ["no", "yes"], label:"On PA List?"}),
  PricingInputs,
  ReviewedInputs,
  SCCF: components["text"]({id:"sccf", placeholder:"", label:"SCCF:"})

}

export default Conditional;