import { Format } from "./Format";

export interface IValue<T> {
  name: string,
  value: T,
  formatting: Format
}

