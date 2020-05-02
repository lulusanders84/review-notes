export const setValue = (values, key, keyProperty) => {
  return keyProperty 
    ? values[key][keyProperty] 
    : values[key];
};
