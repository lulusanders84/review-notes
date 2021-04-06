import { saveToStorage } from '../../saveToStorage';

export const lob = (value, values) => {
  saveToStorage("lob", value.value);
  return { 
    special: value.value !== "commercial"
      ? "N/A"
      : values.special,
    claimType: value.value === "FEP"
      ? "local"
      : values.claimType
  }
};
