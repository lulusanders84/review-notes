import React from 'react';

export default function HourBlock(props) {
  const { claimsGoal, i, shiftHours, total } = props;
  const border = i < shiftHours - 1
    ? "1px dashed black"
    : "";
  const claimsMarker = (i + 1) * claimsGoal;
  const color = total < claimsMarker - 2
    ? {backgroundColor: ""}
    : total === claimsMarker - 1
      ? {backgroundImage: "linear-gradient(to right, #00b300, #E5E5E5 75%)"}
      : {backgroundColor: "#00b300"}
  return (
    <div style={{ display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center", flex: "1", borderRight: border, ...color }}>{ i + 7 }</div>
  )
}
