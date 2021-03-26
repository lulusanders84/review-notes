
import { components } from '../../../utils/Inputs/ConditionalInputs'
import Dose from './Dose';
import PricingInputs from './PricingInputs';

export const Conditional = {
  C3XList: components["radio"]({id: "c3x", options: ["yes", "no"], label:"On C3X list?"}),
  CovidRelated: components["radio"]({id: "covidRelated", options: ["yes", "no"], label:"Treatment is COVID-19 related?" }),
  Dose,
  DrugReviewType: components["radio"]({id:"drugReviewType", options: ["new", "renewal"], label:"Drug Review Type"}),
  ExCircum: components["text"]({id: "exCircum", placeholder:"", label:"Extenuating Circumstances"}),
  PAList: components["radio"]({id: "paList", options: ["no", "yes"], label:"On PA List?"}),
  PricingInputs,
  SCCF: components["text"]({id:"sccf", placeholder:"", label:"SCCF:"})

}

export default Conditional;