
import {prepositions} from './prepositions';
import { nonCapWords } from './nonCapWords';

export const capAcronyms = (entry) => {
    const nameArray = entry.trim().toLowerCase().split(" ");
    const excludedWords = [...prepositions, ...nonCapWords];
    return nameArray.map(word => {
        return excludedWords.includes(word) 
            ? word 
            : word.length < 4 
                ? word.toUpperCase() 
                : word; 
    }).join(" ");
}