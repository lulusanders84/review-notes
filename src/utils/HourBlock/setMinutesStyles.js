export const setMinutesStyles = (minutesStyles, props) => {
  const { backgroundImage, backgroundColor } = props;
  if(backgroundImage) {
    minutesStyles.backgroundColor = null;
  }
  if(backgroundColor === "#00b300") {
    minutesStyles.backgroundColor = "#00b300";
  }
  return minutesStyles;
}