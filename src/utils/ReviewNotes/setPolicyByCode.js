import { bcbsmnCodes } from '../../data/bcbsmnCodes';
import { formattedMedicareCodes } from "../../data/formattedMedicareCodes";
import { getFepPolicyByCodes, getPolicyByCodes, setValueAndLabel } from './setPolicy';

export const setPolicyByCode = (codes, lob) => {
  const isJ3490 = codes.includes("J3490");
  const codeObj = lob === "GP"
    ? formattedMedicareCodes()
    : bcbsmnCodes;
  const policies = codes && !isJ3490
    ? lob === "FEP"
      ? getFepPolicyByCodes(codes)
      : getPolicyByCodes(codes, codeObj)
    : [];
  return setValueAndLabel(policies);
};
