import { formatToSentence } from '../Notes';
import { formatToName } from '../Notes';

export const formatSuggestions = (options, isSentence, keepFormat) => {

  if(options) {
  return suggestionsIsArray[Array.isArray(options)](options, isSentence, keepFormat)       
  } else return []
}

const formatOption = (option, isSentence, keepFormat) => 
  isSentence 
    ? formatToSentence(option) 
    : keepFormat 
      ? option
      : formatToName(option)

const formatOptionObj = (option, isSentence, keepFormat) => {
  if(keepFormat) {
    option.value = formatOption(option.value, isSentence, keepFormat)
  }
  option.label = formatOption(option.label, isSentence, keepFormat)
  return option
}
const optionType = {
  "object": formatOptionObj,
  "string": formatOption
}

const suggestionsIsArray = {
  true: (options, isSentence, keepFormat) => {
    return options.map(option => {
      return optionType[typeof option](option, isSentence, keepFormat)
    })
  },
  false: (option, isSentence, keepFormat) => {
    return optionType[typeof option](option, isSentence, keepFormat)
  }
}