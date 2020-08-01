import $ from 'jquery';
export const getPage = async (url, pageNumber, workingStore) => {
  const store = workingStore;
  await $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent(url + pageNumber), function (data) {
    const htmlObj = document.createElement("div");
    data.contents = data.contents.substring(data.contents.search("media-listing"));
    data.contents = '<ul class="' + data.contents.substring(0, data.contents.search("</ul>") + 5);
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
        ? "https://www.fepblue.org/benefit-plans/medical-policies-and-utilization-management-guidelines/" + $(li).find('a').attr("href")
        : null;
      if (policy.number) {
        policy.number = policy.number.split("\n").join("").trim();
        acc.push(policy);
      }
      return acc;
    }, []);
    policies.forEach(policy => {
      const number = policy.number;
      store[number] = policy;
    });
  });
  return store;
};
