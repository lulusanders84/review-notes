import { getFepPolicyHref } from './getFepPolicyHref';
import { updateFepPolicies } from './updateFepPolicies';
import $ from 'jquery';

export async function fetchFepPolicies(policies) {
  const totalPageCount = await findPageCount("https://www.fepblue.org/policies", "pagination");
  let workingStore = {};
  let pageNumber = 1;
  const url = "https://www.fepblue.org/policies?page=";
  for (let i = pageNumber; i <= totalPageCount; i++) {
    workingStore = await getFepPolicyHref(url, pageNumber, workingStore);
    pageNumber += 1;
  }
  return updateFepPolicies(workingStore, policies);
}

const findPageCount = async (url, ulId) => {
  let count;
  await $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent(url), function (data) {
    const div = document.createElement("div");
    div.innerHTML = data.contents;
    count = $(div).find(`#${ulId}`)[0].children.length - 2;
  });
  return count;
}
