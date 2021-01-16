import { romanNumerals } from "../../data/romanNumerals";

export const buildCriteriaSections = (htmlString) => {
  const indexesOfNumerals = findIndexesOfNumerals(htmlString);
  return indexesOfNumerals.map((num, index) => {
    const nextIndex = indexesOfNumerals[index + 1];
      return findSection(htmlString, num, nextIndex);
  })
}

const findSection = (htmlString, num, nextIndex) => {
  const lastIndex = htmlString.length - 1;
  const preface = "<p><b>"; 
  const end = nextIndex !== undefined && nextIndex !== -1
    ? nextIndex
    : lastIndex;
  return preface + htmlString.substring(num, end)
}

const findIndexesOfNumerals = (htmlString) => {
  let prevIndex = 0;
  return romanNumerals.reduce((acc, num) => {
    const index = htmlString.indexOf(num, prevIndex);
    prevIndex = index + num.length;
    if(index !== -1) {
      acc.push(index);
    }
    return acc;
  }, [])
}