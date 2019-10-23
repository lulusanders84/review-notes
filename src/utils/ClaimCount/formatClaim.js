export const formatClaim = (values) => {
  const { req, lob, deter, type } = values;
  const peer = deter === "send to medical director"
    ? true
    : false;
  return   {
    req,
    type,
    dateTime: Date.now(),
    lob,
    peer,
  }
}