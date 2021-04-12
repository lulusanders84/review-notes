import { CapWords } from "../../classes/CapWords";

const capWords = new CapWords();

export const formatToSentence = (input) => {
  if(input) {
    const inputArr = input.split(". ");
    return inputArr.map(input => {
      input = input.split(" ").map(word => {
        return capWords.getAll().includes(word.toUpperCase())
          ? word.toUpperCase()
          : word
      }).join(" ");
      const l1 = input.charAt(0).toUpperCase();
      return l1 + input.substring(1);
    }).join(". ");
  } else return input;
}