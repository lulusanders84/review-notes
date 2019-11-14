import * as utils from "../";

export function suggestions (dataFile, format) {
    if(Array.isArray(dataFile)) {
        return dataFile.map(data => {
            return utils.createSelectValue(data, format);
        })
    } else {
        return Object.keys(dataFile).map(key =>{
            return utils.createSelectValue(key, format);
        });
    }
}