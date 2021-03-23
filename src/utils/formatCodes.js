export const formatCodesToArray = (codesStr) => {
    codesStr = !codesStr ? "" : codesStr; 
    codesStr = codesStr.toUpperCase().trim();
    const comma = codesStr.includes(",");
    const slash = codesStr.includes("/");
    if(codesStr !== ""){
    const codes = comma 
        ? codesStr.split(",")
        : slash
            ? codesStr.split("/")
            : codesStr.split(" ");
    return codes.map(code => { return code.toUpperCase().trim()})
    } else {
        return [""];
    }
}

export const formatCodesToString = (codesArr) => {
    return codesArr.join(", ");
}

export const formatCodes = (codes, source) => {
    const codesTypes = {
        "string": formatCodesToArray,
        "object": formatCodesToString
    }
    return codesTypes[typeof codes](codes);
}