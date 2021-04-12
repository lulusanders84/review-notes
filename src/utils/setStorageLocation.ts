import { storageLocations } from "../data/storageLocations"
import { capWord } from "./Notes"

/**creates a storage location string in format "fep[Id]" or "id" */
export const setStorageLocation = (lob: string, id: string): string => {
  console.log(lob, id)
  return storageLocations[id](lob)
}