import { Input } from '../classes/Input';
import IInputs from '../interfaces/IInputs';
import { IProps } from '../interfaces/IProps';
import { bindMethods } from '../utils/Classes';

export default class Inputs {

  _inputComponents: {component: Function, id: string}[]
  _inputKeys: string[]
  _inputList: IInputs

  constructor(inputKeys: string[], inputList: IInputs) {
    console.log(inputKeys)
    this._inputKeys = inputKeys;
    this._inputList = inputList;
    bindMethods(this)
    this._inputComponents = this.buildInputs()
  }

  buildComponent = (
    logic: boolean | Function, 
    component: Function, 
    props: IProps,
    onCard: boolean | undefined
  ) => {
    const compProps: IProps | {} = props === undefined ? {} : props
    return new Input(compProps, logic, component, onCard).jsx()
      
  }

  buildInputs = () => {
    return this._inputKeys.map(key => {
      const {component, onCard, props, logic} = this._inputList[key]
      return {
        component: this.buildComponent(logic, component, props, onCard),
        id: key
      }
    })
  }



  getInput = (id: string) => {
    const input = this._inputComponents.find(component => component.id === id)
    return input !== undefined ? input.component : null
  }

  getComponents = () => {
    return this._inputComponents
  }
}