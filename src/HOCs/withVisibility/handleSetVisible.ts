import { setVisible } from "./setVisible"
import { setVisibilityProperties } from "./setVisibilityProperties"

export const handleSetVisible = (noteType: string, values: {[key: string]: string}) => {
  const props = setVisibilityProperties(noteType, values)
  return setVisible(props);
}