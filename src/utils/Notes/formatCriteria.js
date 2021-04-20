import { handleBullets } from "./handleBullets";

export const formatCriteria = (input) => {
  if(input) {
    const inputArr = input.split("</p>");
    input = inputArr.map((item, index) => {
      item = handleBullets(item)
      if(item.charAt(0) === "/") {
        item = item.substring(1)
      }
      let reg;
      try {
        reg = new RegExp(item); 
        // console.log(index, item)
        // if(reg.test("")) {
        //   console.log("passed test", item)
        //   const splitString = item.split("")
        //   console.log(splitString)
        // }
        if(reg.test("<p>")) {
          item = item.split("<p>")
          item[0] = "<br>";
          item = item.join("");   
        }     
      }
      catch {
        
      }

      item = index === 0
        ? item.replace("<p>", "")
        : item.replace("<p>", "<br>");
      return item;
    }).join("");
    if(input !== "N/A") {
      input = "<br>" + input;
    }
    return input;
  } else return "";
}