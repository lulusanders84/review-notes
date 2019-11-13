export const sortSuggestionsAlphabetically = (options) => {
  return options.sort((a, b) => {
    if(a.value  < b.value) {
      return -1;
    } else if (a.value > b.value) {
      return 1;
    } else return 0
  })
}