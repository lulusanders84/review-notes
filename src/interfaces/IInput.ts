import { ReactElement } from "react";
import ITextInputProps from "./ITextInputProps";
import IRadioInputProps from "./IRadioInputProps"
import IButtonProps from "./IButtonProps";


export default interface IInput {
  component: Function | object | ReactElement,
  componentType: string,
  props?: ITextInputProps | IRadioInputProps | IButtonProps,
  logic: boolean |  Function
}