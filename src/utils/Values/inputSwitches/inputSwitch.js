import { allMet } from './allMet'; 
import { claimType } from './claimType';
import { code } from './code';
import { deter } from './deter'; 
import { lob } from './lob';
import { name } from './name';
import { paMatch } from './paMatch'; 
import { paDiagnosis } from './paDiagnosis'; 
import { paDeter } from './paDeter'; 
import { paProvider } from './paProvider'; 
import { pend } from './pend';
import { policy } from './policy';
import { rationale } from './rationale';
import { serviceType } from './serviceType';
import { special } from './special';

export const inputSwitch = {
  "allMet": allMet,
  "claimType": claimType,
  "code": code,
  "deter": deter,
  "lob": lob,
  "name": name,
  "pa-diagnosis": paDiagnosis,
  "pa-deter": paDeter,
  "pa-match": paMatch,
  "pa-provider": paProvider,
  "pend": pend,
  "policy": policy,
  "rationale": rationale,
  "serviceType": serviceType,
  "special": special
};