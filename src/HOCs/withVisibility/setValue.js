export const setValue = (values, key, keyProperty) => {
  console.log(keyProperty)
  return keyProperty 
    ? values[key][keyProperty] 
    : values[key];
};
