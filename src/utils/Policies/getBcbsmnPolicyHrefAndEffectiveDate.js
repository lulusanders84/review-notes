import $ from 'jquery';

export const getBcbsmnPolicyHrefAndEffectiveDate = async (policy) => {
  const returnPolicy = policy;
  const policyNo = policy["Policy #"];
  const url = "https://securecms.bluecrossmnonline.com/content/medpolicy/en/minnesota/core/all/search.html?q=" +
    policyNo + 
    "&sort-by-field=version&sort-by-order=desc&number=" +
    policyNo;
  await $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent(url), function (data) {
    const htmlObj = document.createElement("div");
    htmlObj.innerHTML = data.contents;
    const html = $(htmlObj).find("b:contains(Currently Active Policy)");
    const table = $(html).next();
    let type;
    try { 
      type = $(table).find("td")[0].innerHTML.trim();
      type = type.replace(" ", "_")
    }
    catch {
      returnPolicy.href = null;
      returnPolicy.effective = null;
      return returnPolicy;
    }
    const rows = $(table).find("td:contains(0)");
    if(rows[0] === undefined || table === undefined) {
      console.log(policy, table)
    }
    const version = findVersion(rows);

    returnPolicy.effective = $(rows).next()[0].innerHTML.trim();
    returnPolicy.href=`https://securecms.bluecrossmnonline.com/content/medpolicy/en/minnesota/core/all/policies/${type}/${policyNo}/${policyNo}-${version}.html`;
    returnPolicy.type = type;
    returnPolicy.version = version;
    returnPolicy.policyNo = policyNo;
  });
  return returnPolicy;
}

const findVersion = (rows) => {
  let version;
  Object.keys(rows).forEach(row => {
    if(!isNaN(row)) {
      const text = rows[row].innerHTML.trim();
      version = text.charAt(0) === "0" && text.length === 3 ? text : version; 
    }
  })
  return version;
}