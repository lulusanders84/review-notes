import { INoteContainer } from "./INoteContainer";
import { INote } from "./INoteLine";

export interface INotes {
  [index:string]: INote | INoteContainer
} 