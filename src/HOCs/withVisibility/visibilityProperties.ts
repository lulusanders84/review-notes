import { IVisibilityProperties } from './IVisibilityProperties';

export const visibilityProperties: {
  [key: string]: IVisibilityProperties;
} = {
  "claimNote": { valueKey: "deter", test: "send to medical director", operator: "!==" },
  "clinRat": { valueKey: "pa-deter", test: "denied", operator: "==="},
  "medDir": { valueKey: "deter", test: "send to medical director", operator: "==="}, 
  "medPol": { valueKey: "policy", keyProperty: "length", test: 0, operator: "!=="}, 
  "routing": { valueKey: "claimSystem", test: "OCWA", operator: "!=="},
  "criteria": { valueKey: "name", test: "Lucy / 21597", operator: "==="},
};


