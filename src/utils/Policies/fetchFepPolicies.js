import { getFepPolicyHref } from './getFepPolicyHref';
import { updateFepPolicies } from './updateFepPolicies';

export async function fetchFepPolicies(policies) {
  let workingStore = {};
  let pageNumber = 1;
  const url = "https://www.fepblue.org/benefit-plans/medical-policies-and-utilization-management-guidelines/medical-policies?page=";
  for (let i = pageNumber; i < 17; i++) {
    workingStore = await getFepPolicyHref(url, pageNumber, workingStore);
    pageNumber += 1;
  }
  return updateFepPolicies(workingStore, policies);
}
