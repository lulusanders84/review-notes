import IValues from '../../interfaces/IValues';
import { IVisibilityProperties } from './IVisibilityProperties';

export const visibilityTest: IVisibilityProperties = {
  "claimNote": (values: IValues): boolean => values.deter !== "send to medical director",
  "clinRat": (values: IValues): boolean => values.paDeter === "denied",
  "medDir": (values: IValues): boolean => values.deter === "send to medical director", 
  "medPol": (values: IValues): boolean => values.policy.length !== 0, 
  "routing": (values: IValues): boolean => values.claimSystem !== "OCWA",
  "letterNote": (values: IValues): boolean => values.claimType === "local" || values.lob === "fep",
  "faxAndDate": (values: IValues): boolean => values.serviceType === "Information Request",
  "info": (values: IValues): boolean => values.serviceType === "Information Request"

};
 

