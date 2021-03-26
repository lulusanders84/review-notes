import { buildComponent } from './buildComponents'
import RadioInput from '../../../components/Inputs/RadioInput';
import TextInput from '../../../components/Inputs/TextInput'; 

export const components = {
  radio: (props) => buildComponent(RadioInput, props),
  text: (props) => buildComponent(TextInput, props)
}