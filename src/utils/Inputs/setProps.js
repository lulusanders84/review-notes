export const setProps = (props, propValues) => {
  const store = {};
  Object.keys(props).forEach(key => {
    if (propValues.includes(key)) {
      store[key] = props[key];
    }
  });
  return store;
};
