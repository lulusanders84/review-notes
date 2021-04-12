import { formatToSentence } from './formatToSentence';
import { formatToName } from './formatToName';

export const formatValue = (value: string, isSentence: boolean, keepFormat: boolean) => 
  isSentence 
    ? formatToSentence(value) 
    : keepFormat 
      ? value
      : formatToName(value)