export const bindMethods = (thisObj) => {
  // console.log(thisObj)
  const boundMethods = [];
  Object.keys(thisObj).forEach(key => {
    if(key.charAt(0) !== "_") {
      boundMethods.push(key)
    }
  })
  boundMethods.forEach(method => {
    // console.log(method)
    thisObj[method] = thisObj[method].bind(thisObj)
  })
}