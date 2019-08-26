import { capWord } from "./capitalizeWord";

export const saveFormatting = (passage) => {
    console.log(passage)
    let formattedPassage = capWord(passage.replace(/ /g, "&nbsp;"));
    formattedPassage = "&nbsp;" + formattedPassage.replace(/\n/g, "<br />");
    return formattedPassage;
}