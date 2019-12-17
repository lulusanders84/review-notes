export const formatDateTime = (unix) => {
  const date = new Date(unix);
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();

  return `${m}/${d} ${hour}:${min}`;
}