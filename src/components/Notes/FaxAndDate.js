import React from 'react';
import * as utils from '../../utils'

export default function FaxAndDate() {
  return (
    <div>
      Return Fax: 651-662-1235
      <br />Return Due Date: {utils.getTwoWeeksFromNow()}
    </div>
  )   
}