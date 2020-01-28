import $ from 'jquery';
import { medPolicies } from '../../data/medPolicies';
  
const policyTypes = {
    "Ancillary_Services": ["III", "IX", "VII"], 
    "Behavioral_Health": ["X"], 
    "Laboratory": ["VI"], 
    "Medicine": ["II"], 
    "Miscellaneous": ["XI"], 
    "Radiology": ["V"], 
    "Surgery": ["IV"]
  }

export const getBcbsPolicyLinks = async () => {
    
    const newPolicies = async () => {
      const policies = medPolicies.map( async (policy) => {
        const number = policy["Policy #"].toUpperCase();
          if(number !== "INTERQUAL") {
          const policyType = findPolicyType(number);
          const url = `https://securecms.bluecrossmnonline.com/content/medpolicy/en/minnesota/core/all/policies/${policyType}/${number}/${number}-`;
          const versions = await incrementThroughVersions(url);
          const versionKeys = Object.keys(versions)
          const latestVersion = versionKeys[versionKeys.length - 1];
          const fullUrl = versions[latestVersion].fullUrl;
          if(fullUrl) {
            policy.href = versions[latestVersion].fullUrl;
          }
          return policy;    
        }
      })
    Promise.resolve(policies).then(res => { console.log(res)})  
  }
}

  const findPolicyType = (number) => {
    const dashIndex = number.indexOf("-")
    number = number.substring(0, dashIndex).toUpperCase();
    return Object.keys(policyTypes).reduce((acc, key) => {
      const found = policyTypes[key].includes(number);
      acc = found ? key : acc;
      return acc;
    }, "")
  }

  const incrementThroughVersions = async (url) => {
    let versions = {}
    let versionNo = 1;
    let version = setVersion(versionNo);
    let fullUrl = url + version + ".html";
    let pageObj = await getPageObj(fullUrl);
    let { status, effectiveDateUnix } = pageObj;
    versions[versionNo] = { status, effectiveDateUnix, fullUrl } ;
    while(status !== 404) {
      versionNo += 1;
      version = setVersion(versionNo);
      fullUrl = url + version + ".html";
      pageObj = await getPageObj(fullUrl);
      ({ status, effectiveDateUnix } = pageObj);
      versions[versionNo] = { status, effectiveDateUnix, fullUrl } ;
    }
    delete versions[versionNo];
    return versions;
  }

  const setVersion = (versionNo) => {
    return "00" + versionNo.toString();
  }
  const getPageObj = async (url) => {
    let pageObj = {}
    await $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent(url), function (data) {
      let status = data.status.http_code;
      let effectiveDateUnix;
      if(status === 200) {
        const htmlObj = document.createElement("div");
        htmlObj.innerHTML = data.contents;
        const html = $(htmlObj).find("div.divTableCellHeader:contains('Effective Date:')").next()[0].innerText;
        effectiveDateUnix = new Date(html).getTime();      
      } else {
        effectiveDateUnix = null;
      }
      pageObj = {
        status,
        effectiveDateUnix
      }
  });
  return pageObj;
}