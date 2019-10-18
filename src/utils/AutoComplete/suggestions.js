import * as utils from "../";

export function suggestions (dataFile) {
    if(Array.isArray(dataFile)) {
        return dataFile.map(data => {
            return utils.createSelectValue(data);
        })
    } else {
        return Object.keys(dataFile).map(key =>{
            return utils.createSelectValue(key);
        });
    }
}