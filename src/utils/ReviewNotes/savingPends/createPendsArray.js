export const createPendsArray = (pends) => {
    return pends.map(pend => {
        return {name: pend, count: 0}
    })
}