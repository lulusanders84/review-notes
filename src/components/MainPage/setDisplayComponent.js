import React from 'react';
import ReviewNotes from '../ReviewNotes/ReviewNotes';
import ClaimLog from '../ClaimLog/ClaimLog';

export default function (tabValue) {
  return tabValue === 0
    ? <ReviewNotes showType={true} />
    : tabValue === 1
      ? <ClaimLog />
      : null;
}
