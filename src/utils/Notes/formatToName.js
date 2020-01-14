import {capWord } from './capitalizeWord';
import {prepositions} from './prepositions';
import { nonCapWords } from './nonCapWords';
import { allCapWords } from './allCapWords';

export const formatToName = (entry) => {
    const nameArray = entry.trim().split(" ");
    return nameArray.map(word => {
        return [...prepositions, ...nonCapWords].includes(word) 
            ? word
            : allCapWords.includes(word.toUpperCase())
                ? word.toUpperCase()
                : capWord(word); 
    }).join(" ");
}