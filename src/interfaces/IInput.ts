import { ReactElement } from "react";
import ITextInputProps from "./ITextInputProps";
import IRadioInputProps from "./IRadioInputProps"
import IButtonProps from "./IButtonProps";
import IDeniedInputsProps from "./IDeniedInputsProps";


export default interface IInput {
  component: Function | object | ReactElement,
  componentType: string,
  props?: ITextInputProps | IRadioInputProps | IButtonProps | IDeniedInputsProps,
  logic: boolean |  Function
}