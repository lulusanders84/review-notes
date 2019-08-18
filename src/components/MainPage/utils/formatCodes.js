export const formatCodes = (codesStr) => {
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
        return null;
    }
}