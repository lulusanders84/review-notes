export const handleArrInputs = (value, values) => {
  if(Array.isArray(values)) {
    console.log(value, values)
    if(value.index === undefined) {
      if(value.value !== null) {
        values.push(value.value)
      } 
    } else values[value.index] = value.value;
  value.value = values;    
  }
  if(value.name === "policy") {
    value.value = [].concat(...value.value); 
  }
  return value; 
}