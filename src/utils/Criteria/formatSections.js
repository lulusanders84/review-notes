import $ from 'jquery';
import { createAndPopulateDiv } from '../createAndPopulateDiv';
import { createCriteriaObj } from './createCriteriaObj';
import { setCriteriaType } from './setCriteriaType';

let indexTracker = 0;

export const formatSections = (sections, onClick) => {
  return sections.map(section => {
    const sectionObj = {};
    const endOfTitle = section.indexOf("</p>") + 4;
    sectionObj.title = section.substring(0, endOfTitle);
    sectionObj.policy = section.slice(endOfTitle);
    const div = createAndPopulateDiv(sectionObj.policy);
    $(div).children().each(function() {
        findAndEditLis(this, onClick) 
      })
    sectionObj.policy = createCriteriaObj(div);
    return sectionObj;
  })
}
const editLi = (item, onClick) => {
  console.log(onClick)
  $( item ).find("div").each(function() {
    $(this).contents().unwrap().wrap('<span/>');
  })
  if(item.innerText.trim() !== "AND" && item.innerText.trim() !== "OR") {
    $( item ).on( "click", "input", function( event ) {
      event.preventDefault();
      console.log( $( this ).text() );
    });    
    const content = item.innerHTML
    const input = document.createElement("input")
    input.id = indexTracker;
    input.type = "checkbox";
    $( item ).html(input)
    $( item ).append(`<label for=${indexTracker}>${content}</label>`)

    indexTracker += 1;
  }
}
const findAndEditLis = (item, onClick) => {
  if(item.nodeName === "LI") {
    editLi(item, onClick);
  }
  if($(item).children().length > 0) {
    $(item).children().each(function() {
      findAndEditLis(this, onClick);
    })
  }
}