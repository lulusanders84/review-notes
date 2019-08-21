import { rejectCodes } from '../../../data/rejectCodes'

export default function (values) {
  const rationale = values.rationale === "Per PA Enforcement" ? "per PA enforcement" : values.rationale.toLowerCase();
  const connector = values.rationale ? rejectCodes[values.rationale].connector ? `${rejectCodes[values.rationale].connector} ` : "" : "";  
  return `${connector}${rationale}`;
}
