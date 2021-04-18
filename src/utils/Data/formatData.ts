/**Formats data to an object with policy number as key */
export function formatData(itemsArr: any[], type: string) {
  const dataObj: {[index: string]: string} = {}
  itemsArr.forEach(item => dataObj[item.number.trim()] = item[type])
  return dataObj
}