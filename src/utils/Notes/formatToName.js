import {capWord } from './capitalizeWord';
import {prepositions} from './prepositions';
import { nonCapWords } from './nonCapWords';

export const formatToName = (entry) => {
    const nameArray = entry.trim().split(" ");
    return nameArray.map(word => {
        return [...prepositions, ...nonCapWords].includes(word) 
            ? word
            : capWord(word); 
    }).join(" ");
}