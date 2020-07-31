import { handleService } from '../outputLogic/handleServiceType';

export const code = (value) => {
  return {
    serviceType: handleService(value)
  }
}
  