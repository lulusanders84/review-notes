import * as utils from "../";
import { formatToSentence } from "../Notes/formatToSentence";

export function suggestions (dataFile, format) {
    if(Array.isArray(dataFile)) {
        return dataFile.map(data => {
            data = format === "lower"
            ? formatToSentence(data)
            : data;
            return utils.createSelectValue(data, format);
        })
    } else {
        return Object.keys(dataFile).map(key =>{
            return utils.createSelectValue(key, format);
        });
    }
}