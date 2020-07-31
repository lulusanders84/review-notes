import { saveToStorage } from '../../saveToStorage';

export const lob = (value, values) => {
  saveToStorage("lob", value.value);
  return { 
    claimType: value.value === "FEP"
      ? "local"
      : values.claimType
  }
};
