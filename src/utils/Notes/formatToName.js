import {capWord } from './capitalizeWord';
import {prepositions} from './prepositions';
import { CapWords } from '../../classes/CapWords'

const capWords = new CapWords();

export const formatToName = (entry) => {
    if(entry !== undefined) {
    const nameArray = entry.trim().split(" ");
    return nameArray.map(word => {
        return prepositions.includes(word) 
            ? word
            : capWords.getAll().includes(word.toUpperCase())
                ? word.toUpperCase()
                : capWord(word); 
    }).join(" ");    
    }
    else return entry
    
}