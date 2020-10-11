import { formatToSentence } from '../Notes';
import { formatToName } from '../Notes';

export const formatSuggestions = (options, sentence) => {
  if(options) {
 return options.map(option => {
    option.label = sentence 
      ? formatToSentence(option.label)
      : formatToName(option.label);
    return option;
  })      
  } else return []
}