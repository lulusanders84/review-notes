export const createHourBlockProps = (props) => {
  const { i, claimsGoal, minuteNow } = props;
  return {
    claimsMarker: (i + 1) * claimsGoal,
    hour: i + 7,
    minutePercent: (minuteNow / 60) * 100,
  }
}