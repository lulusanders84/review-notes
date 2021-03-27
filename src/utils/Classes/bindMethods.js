export const bindMethods = (thisObj) => {
  const boundMethods = [];
  Object.keys(thisObj).forEach(key => {
    if(key.charAt(0) !== "_") {
      boundMethods.push(key)
    }
  })
  console.log(boundMethods)
  boundMethods.forEach(method => {
    thisObj[method] = thisObj[method].bind(thisObj)
  })
}