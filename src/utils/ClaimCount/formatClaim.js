export const formatClaim = (values) => {
  const { req, lob, deter, serviceType } = values;
  const peer = deter === "send to medical director"
    ? true
    : false;
  return   {
    req,
    serviceType,
    dateTime: Date.now(),
    lob,
    peer,
  }
}