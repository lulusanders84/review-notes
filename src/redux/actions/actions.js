import { saveToStorage } from '../../utils';


export const setPolicyVersion = ({version, lob}) => (dispatch) => {
  const location = `${lob}CurrentVersion`
  saveToStorage(location, version)
  dispatch(_setCurrentVersion(version, location))
}

const SET_CURRENT_VERSION = 'SET_CURRENT_VERSION';
const _setCurrentVersion = (version, key) => ({
  type: SET_CURRENT_VERSION,
  version,
  key
});