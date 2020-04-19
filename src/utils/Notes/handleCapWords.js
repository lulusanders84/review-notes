import { allCapWords } from '../../data/allCapWords';
import { CapWords } from '../../classes/CapWords';

export const handleCapWords = () => {
  const capWords = new CapWords();
  capWords.mergeAndStoreCapWords(allCapWords);  
}


