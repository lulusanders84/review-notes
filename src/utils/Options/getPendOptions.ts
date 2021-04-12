import { setPendOrder } from './pendOptions/setPendOrder';
import { retrievePendOptions } from './pendOptions/retrievePendOptions';
import { IPend } from '../../interfaces/IPend'
import { formatStringPends } from '../formatting/formatStringPends';
import { isIPendsArray } from './pendOptions/isIPendsArray';

/**gets pend options, sets pend order, returns pends in IPend format */
export const getPendOptions = (lob: string): Promise<IPend[]> => {
  
  const options = retrievePendOptions(lob).then(options => {
      return isIPendsArray(options) ? options : formatStringPends(options) 
    }).then(options => {
      return setPendOrder(options)
    }) 

  return Promise.resolve(options)
}


