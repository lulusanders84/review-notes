export const setStyleParameters = (props) => {
  const {i, hour, hourNow, total, claimsMarker, minutePercent} = props;
  const colorTime = hour === hourNow
    ? minutePercent < 50
      ? "future"
      : "past"
    : hour < hourNow
      ? "past"
      : "future";
  const colorShade = i % 2 === 0
    ? "light"
    : "dark";
  const complete = total > claimsMarker - 2
    ? true
    : false;
  return {
    colorTime,
    colorShade,
    complete
  }
}