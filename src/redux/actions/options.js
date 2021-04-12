import { getPolicyOptions } from '../../utils/Options/getPolicyOptions';
import { getPendOptions } from '../../utils/Options/getPendOptions';
import { saveToStorage } from '../../utils';
import { setStorageLocation } from '../../utils/setStorageLocation';

const optionsObj = {
  pend: getPendOptions,
  policy: getPolicyOptions
}

export const setOptions = ({lob, id}) => async (dispatch) => {
  const options = await optionsObj[id](lob)
  const key = `${id}Options`
  dispatch(_setOptions(options, key))
}

export const saveNewOptions = ({options, lob, id}) => (dispatch) => {
  const storageLocation = setStorageLocation(lob, id)
  saveToStorage(storageLocation, options)
  dispatch(setOptions({lob, id}))
}


const SET_OPTIONS = 'SET_OPTIONS';
const _setOptions = (options, key) => ({
  type: SET_OPTIONS,
  options,
  key
});

