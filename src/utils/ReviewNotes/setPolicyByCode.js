import { bcbsmnCodes } from '../../data/bcbsmnCodes';
import { formattedMedicareCodes } from "../../data/formattedMedicareCodes";
import { getFepPolicyByCodes, getPolicyByCodes, setValueAndLabel } from './setPolicy';

export const setPolicyByCode = (codes, lob) => {
  console.log(codes, lob)
  const isJ3490 = codes.includes("J3490");
  console.log(isJ3490, "isJ3490");
  const codeObj = lob === "GP"
    ? formattedMedicareCodes()
    : bcbsmnCodes;
  const policies = codes && !isJ3490
    ? lob === "FEP"
      ? getFepPolicyByCodes(codes)
      : getPolicyByCodes(codes, codeObj)
    : [];
    console.log(policies)
  return setValueAndLabel(policies);
};
