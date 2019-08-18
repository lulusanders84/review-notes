import $ from 'jquery';

const store = {};

export const scrapePolicies = async () => {
  let pageNumber = 1;
  const url = "https://www.fepblue.org/benefit-plans/medical-policies-and-utilization-management-guidelines/medical-policies?page=";
  for(let i = pageNumber; i < 16; i++) {
    getPage(url, pageNumber);
    pageNumber += 1;
  }
  console.log(store);

}
const getPage = (url, pageNumber) => {
    $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent(url + pageNumber), function (data) {
      const htmlObj = document.createElement("div");
      htmlObj.innerHTML = data.contents;
      const html = $(htmlObj).find("ul.media-listing li");
      const array = Object.keys(html).map(key => {
        return html[key];
      });
      const policies = array.reduce((acc, item, index) => {
        const policy = {};
        const li = index < array.length - 2 
          ? item
          : null;
        policy.number = li 
          ? $(li).find('span').html()
          : null;
        policy.href = li
          ? $(li).find('a').attr("href")
          : null;
        if(policy.number) {
            acc.push(policy)
        }
        return acc;
      }, [])
      policies.forEach(policy => {
        const number = policy.number;
        store[number] = policy;
      });
  });
}