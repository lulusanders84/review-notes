import $ from 'jquery';

export const scrapeCriteriaData = async () => {
  const policy = {};
  const href = 
  "https://securecms.bluecrossmnonline.com/content/medpolicy/en/minnesota/core/all/policies/Medicine/II-161/II-161-010.html";
//  "https://securecms.bluecrossmnonline.com/content/medpolicy/en/minnesota/core/all/policies/Medicine/II-16/II-16-011.html";
// "https://securecms.bluecrossmnonline.com/content/medpolicy/en/minnesota/core/all/policies/Laboratory/VI-09/VI-09-009.html";
  await $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent(href), function (data) {
    const htmlObj = document.createElement("div");
    policy.html = document.createElement("div")
    htmlObj.innerHTML = data.contents;
    const policyDivs = $(htmlObj).find("strong");
    Object.keys(policyDivs).forEach(key =>{
      const div = policyDivs[key]
      if(div.innerHTML === "Policy Position ") {
        const allPolicyDivs = $(div).closest("div.divTable").nextAll()
        let endIndex = Object.keys(allPolicyDivs).length - 1;
        Object.keys(allPolicyDivs).forEach((div, index) => {
          const child = allPolicyDivs[div];
          if(child.classList !== undefined && child.classList.value === "divTable z-depth-1") {
            endIndex = index;
          }
          if(index < endIndex) {
            $(policy.html).append(allPolicyDivs[div])
          }          
        })
      }
    }) 
  })
  return policy
}
