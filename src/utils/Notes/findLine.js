export const findLine = (state, lineName) => {
  const stateArr = Object.keys(state);
  return stateArr.includes(lineName);
};
