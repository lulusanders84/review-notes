import { formatToName } from "./Notes";

export function createSelectValue(value, format) {
    const label = format === "lower"
        ? value
        : formatToName(value);

    return {label, value, };
}