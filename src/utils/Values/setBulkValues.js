export const setBulkValues = (values, value) => {
  let store = {};
  values.forEach(item => {
    store[item] = value;
  })
  return store;  
}
