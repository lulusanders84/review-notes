import { IVisibilityProperties } from './IVisibilityProperties';

export const visibilityProperties: {
  [key: string]: IVisibilityProperties;
} = {
  "claimNote": { valueKey: "deter", test: "send to medical director", operator: "!==" }
};
