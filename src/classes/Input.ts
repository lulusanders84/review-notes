import withConditionTest from '../HOCs/withNewConditionTest'
import withCard from '../HOCs/withCard'
import ITextInputProps from '../interfaces/ITextInputProps'
import IRadioInputProps from '../interfaces/IRadioInputProps'


export class Input {

  logic: boolean | Function
  props: IRadioInputProps | ITextInputProps | object
  id?: string
  component: Function
  onCard: boolean | undefined 
  
  constructor(
    props: IRadioInputProps | ITextInputProps | object, 
    logic: boolean | Function, 
    component: Function,
    onCard: boolean | undefined
  ) {
    this.logic = logic;
    this.props = props;
    this.component = component;
    this.onCard = onCard;
  }

  buildComponent() {
    return withConditionTest(
      withCard(this.component, this.onCard), 
      this.logic, 
      this.props
    )
  }
  
  jsx() {
    return this.buildComponent()
  }
}
