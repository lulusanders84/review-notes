export const sendDispatches = (dataRequests: any[], dispatch: any, values: any) => {
  dataRequests.forEach(request => {
    dispatch(request(values));
  });
};
