import {capWord } from './capitalizeWord';
import {prepositions} from './prepositions';
import { nonCapWords } from './nonCapWords';
import { CapWords } from '../../classes/CapWords'

const capWords = new CapWords();

export const formatToName = (entry) => {
    const nameArray = entry.trim().split(" ");
    return nameArray.map(word => {
        return [...prepositions, ...nonCapWords].includes(word) 
            ? word
            : capWords.getAll().includes(word.toUpperCase())
                ? word.toUpperCase()
                : capWord(word); 
    }).join(" ");
}