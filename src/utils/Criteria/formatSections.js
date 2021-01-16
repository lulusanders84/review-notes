import $ from 'jquery';
import { createAndPopulateDiv } from '../createAndPopulateDiv';

export const formatSections = (sections) => {
  return sections.map(section => {
    const sectionObj = {};
    const endOfTitle = section.indexOf("</p>") + 4;
    sectionObj.title = section.substring(0, endOfTitle);
    sectionObj.policy = section.slice(endOfTitle);
    const div = createAndPopulateDiv(sectionObj.policy);
    $(div).children().each(function() {
        findAndEditLis(this) 
      })
    sectionObj.policy = div.innerHTML;
    return sectionObj;
  })
}
const editLi = (item) => {
  $( item ).html(`<input type="checkbox">${item.innerHTML}</input>`)
}
const findAndEditLis = (item) => {
  if(item.nodeName === "LI") {
    editLi(item);
  }
  if($(item).children().length > 0) {
    $(item).children().each(function() {
      findAndEditLis(this);
    })
  }
}