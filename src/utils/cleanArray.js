export const cleanArray = (array) => {
  const cleanedArray = new Set(array);
  return Array.from(cleanedArray);
};
