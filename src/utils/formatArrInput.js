export const formatToArray = (str) => {
    str = !str ? "" : str; 
    str = str.trim();
    const comma = str.includes(",");
    const slash = str.includes("/");
    if(str !== ""){
    const inputs = comma 
        ? str.split(",")
        : slash
            ? str.split("/")
            : str.split(" ");
    return inputs.map(input => { return input.trim()})
    } else {
        return [""];
    }
}

export const formatToString = (arr) => {
    return arr.join(", ");
}

export const formatArrInput = (input) => {
    const inputTypes = {
        "string": formatToArray,
        "object": formatToString
    }
    return inputTypes[typeof input](input);
}