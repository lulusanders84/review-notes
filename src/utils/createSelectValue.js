import { formatToName } from "./Notes";

export function createSelectValue(value) {
    return {label: formatToName(value), value, };
}