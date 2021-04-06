import React from 'react';
import ReviewNotes from '../ReviewNotes';
import ClaimLog from '../ClaimLog/ClaimLog';

export default function (tabValue) {
  return tabValue === 0
    ? <ReviewNotes />
    : tabValue === 1
      ? <ClaimLog />
      : null;
}
