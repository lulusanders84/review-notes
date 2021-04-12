import IValues from "../../interfaces/IValues";

/**Replaces undefined values with empty string */
export const cleanValuesObj =  (values: IValues) =>  {
    return Object.keys(values).reduce((acc, item) => {
        const value: any = values[item]
        acc[item] = !value ? "" : value;
        return acc;
    },{} as IValues)
}   