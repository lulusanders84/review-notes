export const createAndPopulateDiv = (htmlString) => {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  return div;
};
