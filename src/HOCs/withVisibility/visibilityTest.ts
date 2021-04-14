import IValues from '../../interfaces/IValues';
import { IVisibilityProperties } from './IVisibilityProperties';

const reviewedDenialFunc = (values: IValues): boolean => values.reviewed === "yes" 
  && values.paType === "related claim" 
  && values.paDeter === "denied"
const infoFaxDateFunc = (values: IValues): boolean => values.serviceType === "Information Request"

export const visibilityTest: IVisibilityProperties = {
  "claimNote": (values: IValues): boolean => values.deter !== "send to medical director",
  "clinicalRationale": reviewedDenialFunc,
  "date": infoFaxDateFunc,
  "denialLetter": reviewedDenialFunc,
  "medDir": (values: IValues): boolean => values.deter === "send to medical director", 
  "medPolicy": (values: IValues): boolean => values.policy.length !== 0, 
  "routing": (values: IValues): boolean => values.claimSystem !== "OCWA",
  "letterNote": (values: IValues): boolean => values.claimType === "local" || values.lob === "fep",
  "fax": infoFaxDateFunc,
  "info": infoFaxDateFunc,
  "initialSccf": (values: IValues): boolean => values.relatedInfo === "related" && values.claimType === "home",
  "sccf": (values: IValues): boolean => values.claimType === "home",

};
 

