export const bindMethods = (thisObj) => {
  const boundMethods = [];
  Object.keys(thisObj).forEach(key => {
    if(key.charAt(0) !== "_") {
      boundMethods.push(key)
    }
  })
  boundMethods.forEach(method => {
    thisObj[method] = thisObj[method].bind(thisObj)
  })
}