export const formatCriteria = (input) => {
  if(input) {
    const inputArr = input.split("</p>");
    input = inputArr.map((input, index) => {
      input = input.split("<p>").join("");    
      input = index === 0
        ? input.replace("<p>", "")
        : input.replace("<p>", "<br>");
      if(index > inputArr.length - 4) {
        input = input.replace("<br>", "")
      }
      return input;
    }).join("");
    return input;
  } else return "";
  
}