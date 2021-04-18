import { storageLocations } from "../data/storageLocations"

/**creates a storage location string in format "fep[Id]" or "id" */
export const setStorageLocation = (lob: string, id: string): string => {
  return storageLocations[id](lob)
}