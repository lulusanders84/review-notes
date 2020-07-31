export const isJSON = (string) => {
  let isValidJSON = true;
  try {
    JSON.parse(string)
  } catch {
    isValidJSON = false;
  }
  return isValidJSON;
}