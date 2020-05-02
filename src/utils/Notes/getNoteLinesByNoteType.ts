import { noteLines } from "./noteLines"

export const getNoteLinesByNoteType = (noteType: string) => {
  return noteLines[noteType];
}