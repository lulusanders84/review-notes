import { inputSwitch } from './inputSwitches'

export const handleInputsChange = (value, values) => {
  if(inputSwitch[value.name]) {
    const returnObj = inputSwitch[value.name](value, values);
    return Object.keys(returnObj).map(key => {
      return {name: key, value: returnObj[key], originalName: value.name}
    });  
  } else return [];
}





