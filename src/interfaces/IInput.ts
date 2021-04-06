
import { IProps } from "./IProps";

export default interface IInput {

  component: Function,
  logic: boolean |  Function  
  onCard?: boolean,  
  props?: IProps
}