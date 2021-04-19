import $ from 'jquery';

export const checkHref = async (policy) => {
  let url = policy.href
  await $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent(url), function (data) {
    if(data.status.http_code === 404) {
      let { type, policyNo, version} = policy
      policyNo = policyNo.toLowerCase()
      url = `https://securecms.bluecrossmnonline.com/content/medpolicy/en/minnesota/core/all/policies/${type}/${policyNo}/${policyNo}-${version}.html` 
    } 
  });
  return url;
}