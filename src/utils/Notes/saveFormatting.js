import React from 'react';
import { capWord } from "./capitalizeWord";

export const saveFormatting = (passage) => {
    let formattedPassage = capWord(passage.replace(/ {2}/g, "&nbsp;&nbsp;"));
    formattedPassage = "&nbsp;" + formattedPassage.replace(/\n/g, "<br />");
    return <span dangerouslySetInnerHTML={{ __html: formattedPassage }} />
}