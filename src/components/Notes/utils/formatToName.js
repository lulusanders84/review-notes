import {capWord } from './capitalizeWord';
import {prepositions} from './prepositions';
import { capAcronyms } from './capitalizeAcronyms';

export const formatToName = (entry) => {
    const nameArray = entry.trim().split(" ");
    return nameArray.map(word => {
        return prepositions.includes(word) 
            ? word
            : capWord(word); 
    }).join(" ");
}