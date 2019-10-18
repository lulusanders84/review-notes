import { rejectCodes } from '../../data/rejectCodes'

export function setDenialMessage(values) {
  const rationale = values.rationale === "Per PA Enforcement" 
    ? "per PA enforcement" 
    : values.rationale === "Information Request" 
      ? "for lack of information"
      : values.rationale.toLowerCase();
  const connector = values.rationale ? rejectCodes[values.rationale].connector ? `${rejectCodes[values.rationale].connector} ` : "" : "";  
  return `${connector}${rationale}`;
}
