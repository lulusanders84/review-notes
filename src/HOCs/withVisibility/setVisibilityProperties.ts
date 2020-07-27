import { visibilityProperties } from './visibilityProperties';
import { setValue } from './setValue';

export const setVisibilityProperties = (noteType: string, values: {[key: string]: string}) => {
  const props = visibilityProperties[noteType];
  props.value = setValue(values, props.valueKey, props.keyProperty);
  return props;
}
