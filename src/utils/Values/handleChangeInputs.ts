import { handleInputsChange } from './changeInputs';

interface Value {
  value: string | any[],
  name: string
}

interface ChangedValue {
  name: string, 
  value: string | any[],
  originalName: string
}

interface ChangedValuesContainer extends Array<ChangedValue>{}
  
export const handleChangeInputs = (value: Value, values: any[]): any => {
  let changedValues: ChangedValuesContainer = handleInputsChange(value, values);
  let allChangedValuesContainer: ChangedValuesContainer = changedValues;
  while(changedValues.length !==0) {
    let newChangedValues: ChangedValuesContainer = [];
    changedValues.forEach(changedValue => {
      const { name, value } = changedValue;
      newChangedValues = [...newChangedValues, ...handleInputsChange({name, value,}, values)]
    })
    allChangedValuesContainer = [...allChangedValuesContainer, ...newChangedValues];
    changedValues = newChangedValues;
  }
  return allChangedValuesContainer;
}

