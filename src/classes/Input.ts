import withConditionTest from '../HOCs/withNewConditionTest'
import ITextInputProps from '../interfaces/ITextInputProps'
import IRadioInputProps from '../interfaces/IRadioInputProps'


export class Input {

  logic: boolean | Function
  props: IRadioInputProps | ITextInputProps | object
  id?: string
  component: Function
  
  constructor(
    props: IRadioInputProps | ITextInputProps | object, 
    logic: boolean | Function, 
    component: Function
    ) {
      this.logic = logic;
      this.props = props;
      this.component = component;
  }

  buildComponent() {
    return withConditionTest(this.component, this.logic, this.props)
  }
  
  jsx() {
    return this.buildComponent()
  }
}
