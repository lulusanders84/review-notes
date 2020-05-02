import { noteLineDetails } from "./noteLineDetails";
export const getNoteLineDetails = (name: string): string => {
  return noteLineDetails[name];
};
