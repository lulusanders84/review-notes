import { IVisibilityProperties } from "./IVisibilityProperties";

export const setVisible = (props: IVisibilityProperties) => {
  const { value, test, operator } = props;
  switch(operator) {
    case "===": 
      return value === test
      ? true
      : false;
    case "!==":
      return value !== test
      ? true
      : false;
    default:
      return null;
  }
};
