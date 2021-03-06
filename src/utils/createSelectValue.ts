import { formatToName } from "./Notes";

export function createSelectValue(value: string, keepFormat: boolean) {

    const label: string = keepFormat
        ? value
        : formatToName(value);

    return {label, value};
}