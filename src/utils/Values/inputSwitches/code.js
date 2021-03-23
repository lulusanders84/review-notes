import { handleService } from '../outputLogic/handleServiceType';
import { handlePolicyViaCode } from '../outputLogic/handlePolicyViaCode';
import { getValueFromPair, formatMultiServices } from '../../Inputs';

export const code = (value, values) => {
  const codes = value.value;
  let service = "";
  let{ linked } = values;
    if(codes) {
        service = codes.reduce((acc, code) => {
            const service = getValueFromPair("codeServicePairs", code);
            if(service) {
                acc.push(service);
                linked = true;
            } else linked = false;
            return acc;
        }, [])
        service = formatMultiServices(service)
    } else {
      linked = false;
      service = "";
    }
  return {
    linked,
    policy: handlePolicyViaCode(value, values),
    service,
    serviceType: handleService(value) 
  }
}
  