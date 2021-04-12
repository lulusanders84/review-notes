export const createPendsArray = (pends: string[]) => {
    return pends.map(pend => {
        return {label: pend, value: pend, count: 0}
    })
}