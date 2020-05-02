import { INoteProps } from "../formatting/INoteProps";
import { getNoteLineDetails } from "./getNoteLineDetails";

export const buildNoteProps = (name: string, value: string) => {
  const line = getNoteLineDetails(name);
  const props: INoteProps = {
    name,
    value,
    line,
  }
  return props;
}

