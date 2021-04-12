export const formatCriteria = (input) => {
  if(input) {
    const inputArr = input.split("</p>");
    input = inputArr.map((input, index) => {
      const reg = new RegExp(input);
      if(reg.test("<p>")) {
        input = input.split("<p>")
        input[0] = "<br>";
        input = input.join("");   
      }
      input = index === 0
        ? input.replace("<p>", "")
        : input.replace("<p>", "<br>");
      return input;
    }).join("");
    if(input !== "N/A") {
      input = "<br>" + input;
    }
    return input;
  } else return "";
  
}