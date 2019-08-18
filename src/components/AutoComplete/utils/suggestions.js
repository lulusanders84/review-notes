import createSelectValue from "../../../utils/createSelectValue";

export function suggestions (dataFile) {
    if(Array.isArray(dataFile)) {
        return dataFile.map(data => {
            return createSelectValue(data);
        })
    } else {
        return Object.keys(dataFile).map(key =>{
            return createSelectValue(key);
        });
    }
}