export const formatDate = (unix) => {
  const date = new Date(unix);
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const y = date.getFullYear();

  return `${m}/${d}/${y}`;
}