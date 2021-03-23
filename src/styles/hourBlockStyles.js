export const colors = {
  past: {
    light: "#e5e5e5",
    dark: "#cccccc"
  },
  future: {
    light: "#bfbfbf",
    dark: "#a6a6a6"
  },
  complete: "#00b300",
  font: {
    complete: "inherit",
    past: "#a6a6a6",
    future: "inherit"
  }
}

const radiusAmount = "6px";

const setRadiusStyle = (props) => {
  const { i, shiftHours } = props;
  return i === 0 
    ? {borderTopLeftRadius: radiusAmount, borderBottomLeftRadius: radiusAmount}
    : i === parseInt(shiftHours) 
      ? {borderTopRightRadius: radiusAmount, borderBottomRightRadius: radiusAmount}
      : ""
}

const setColorStyles = (props) => {
  const { complete, colorTime, colorShade, total, claimsMarker, claimsGoal } = props;
  const color = {};
  color.backgroundColor = complete
    ? colors.complete
    : colors[colorTime][colorShade];
  if(total > claimsMarker - claimsGoal && total < claimsMarker) {
    const gradient = setGradientPercent(total, claimsMarker, claimsGoal)
    color.backgroundImage = `linear-gradient(to right, #00b300, ${colors[colorTime][colorShade]} ${gradient}%)`;
    color.backgroundColor = null;
  }
  return color;
}

const setGradientPercent = (total, claimsMarker, claimsGoal) => {
  let count = 0;
  let segment = 0;
  let inc = 100 / claimsGoal;
  const diff = claimsGoal - (claimsMarker - total)
  const spacer = inc / 2;
  while(count < diff) {
    segment += inc;
    count += 1;
  }
  return segment + spacer;
}
const setFontStyle = (props) => {
  const { complete, colorTime } = props;
  const font = {};
  font.color = complete
    ? colors.font.complete
    : colors.font[colorTime] 
  return font; 
} 
const setStyleObjs = (props) => {
  return {
    radius: setRadiusStyle(props),
    color: setColorStyles(props),
    font: setFontStyle(props)
  }
}
export const setStyles = (props) => {
  const {minutePercent, colorShade} = props;
  const { radius, color, font } = setStyleObjs(props);
  return {
    hourBlock: { 
      position: "relative", 
      display: "flex", 
      flexDirection: "column", 
      alignContent: "center", 
      alignItems: "center", 
      justifyContent: "center", 
      flex: "1", 
      ...color, 
      ...radius },
    minutes: {
      height: "100%", 
      width: "100%"},
    blockInProgress: {
      display: "flex", 
      height: "100%", 
      width: "100%"
    },
    pastMinutes: {
      height: "100%", 
      width:`${minutePercent}%`, 
      borderRight: "1px dashed white", 
      backgroundColor: colors.past[colorShade]
    },
    futureMinutes: {
      width: `${100 - minutePercent}%`,
      height: "100%", 
      backgroundColor: colors.future[colorShade]
    },
    label: {
      position: "absolute", 
      margin: "auto",
      ...font,
    }
  }
}