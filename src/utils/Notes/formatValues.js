export const formatValues =  (values) =>  {
    return Object.keys(values).reduce((acc, item) => {
        const value = values[item]
        acc[item] = !value ? "" : value;
        return acc;
    }, {})
}   