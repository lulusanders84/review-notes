export const formatToSentence = (input) => {
  if(input) {
    const inputArr = input.split(". ");
    return inputArr.map(input => {
      input = input.toLowerCase();
      const l1 = input.charAt(0).toUpperCase();
      return l1 + input.substring(1);
    }).join(". ") + ".";
  } else return input;
}