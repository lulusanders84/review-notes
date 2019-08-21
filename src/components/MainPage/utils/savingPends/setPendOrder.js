export const setPendOrder = (pends, lob) => {
    const savedPends = lob === "FEP" ? window.localStorage.getItem("fepPends") : window.localStorage.getItem("pends")
    if(savedPends) {
        return JSON.parse(savedPends).sort((a, b) => {
            return b.count - a.count;
        }).map(pend => {
            return pend.name;
        })
    } else return pends;
}