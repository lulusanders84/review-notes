import {capWord } from './capitalizeWord';
import {prepositions} from './prepositions';

export const formatToName = (entry) => {
    const nameArray = entry.trim().split(" ");
    return nameArray.map(word => {
        return prepositions.includes(word) 
            ? word
            : capWord(word); 
    }).join(" ");
}