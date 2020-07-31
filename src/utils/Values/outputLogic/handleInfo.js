import { getInfo } from './getInfo';
export const handleInfo = (policies) => {
  return policies.length !== 0 ? getInfo(policies) : "";
};
