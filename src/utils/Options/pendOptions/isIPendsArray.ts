export const isIPendsArray = (options: any[]) => {
  let isIPend: boolean[] = [];
  options.forEach(option => {
    isIPend.push(...["count", "label", "value"].map(item => Object.keys(option).includes(item)));
  });
  return !isIPend.includes(false);
};
