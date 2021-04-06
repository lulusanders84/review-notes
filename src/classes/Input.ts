import withConditionTest from '../HOCs/withNewConditionTest'
import withCard from '../HOCs/withCard'
import {IProps} from '../interfaces/IProps';

export class Input {

  logic: boolean | Function
  props: IProps | {}
  id?: string
  component: Function
  onCard: boolean | undefined 
  
  constructor(
    props: IProps | {}, 
    logic: boolean | Function, 
    component: Function,
    onCard: boolean | undefined
  ) {
    this.logic = logic;
    this.props = this.formatProps(props);
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
  
  formatProps(props: any) {
    let modifiedProps: any = props;
    if(props !== undefined) {
      Object.keys(props).forEach((key: string) => {
        if(this.formatting[key] !== undefined) {
          modifiedProps[key] = this.formatting[key](props[key])
        } else modifiedProps[key] = props[key]
      })
    }
    return modifiedProps;
  }

  formatting: {[index: string]: Function} = {
    label: (label: string): any => label.charAt(label.length - 1) === ":" ? label : label + ":"
  }
  jsx() {
    return this.buildComponent()
  }
}
