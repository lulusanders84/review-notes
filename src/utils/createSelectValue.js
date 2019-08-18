import { capWord, formatToName } from "../components/Notes/utils";

export default function(value) {
    return {label: formatToName(value), value, };
}