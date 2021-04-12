import { pends } from '../../../data/pends';
import { fepPends } from '../../../data/fepPends';
import { getStorage } from '../../getStorage';
import { IPend } from '../../../interfaces/IPend';
import { formatStoredPends } from '../../formatting/formatStoredPends';

/**Retrieves pend options */
export const retrievePendOptions = (lob: string): Promise<any[]> => {
  
  return new Promise(function( resolve, reject): void {
    
    const storageLocation: string = lob === "FEP" ? "fepPends" : "pends";
    const pendCodes: string[] = lob === "FEP" ? fepPends : pends;
    const storedPends: IPend[] | undefined = getStorage(storageLocation);
    const options = storedPends === undefined ? pendCodes : formatStoredPends(storedPends)
    resolve(options);
  
  }) 
};



