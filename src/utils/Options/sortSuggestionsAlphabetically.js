export const sortSuggestionsAlphabetically = (options) => {
  if(options) {
    return options.sort((a, b) => {
    if(a.value  < b.value) {
      return -1;
    } else if (a.value > b.value) {
      return 1;
    } else return 0
  })
  } else return [];
}