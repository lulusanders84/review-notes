
import React from 'react';
export default function (updating, date, time) {
  return updating
    ? <p>Policies updating...</p>
    : <p> Policies updated {date} {time} </p>;
}
