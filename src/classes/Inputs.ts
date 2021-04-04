
import { Input } from '../classes/Input';
import IInputs from '../interfaces/IInputs';
import IRadioInputProps from '../interfaces/IRadioInputProps';
import ITextInputProps from '../interfaces/ITextInputProps';


export default class Inputs {

  inputComponents: {component: Function, id: string}[]
  inputKeys: string[]
  inputList: IInputs

  constructor(inputKeys: string[], inputList: IInputs) {
    this.inputKeys = inputKeys;
    this.inputList = inputList;
    this.inputComponents = this.buildInputs()
  }

  componentTypes: {[index: string]: Function} = {
    "propped": this.buildProppedComponent,
    "propless": this.buildProplessComponent
  }

  buildInputs() {
    return this.inputKeys.map(key => {
      const {component, componentType, props, logic} = this.inputList[key]
      return {
        component: this.componentTypes[componentType](logic, component, props),
        id: key
      }
    })
  }

  buildProplessComponent(logic: boolean | Function, component: Function) {
    return new Input({}, logic, component).jsx()
  }
  buildProppedComponent( logic: boolean | Function, component: Function, props: ITextInputProps | IRadioInputProps,) {
    return new Input(props, logic, component).jsx()
  }
}