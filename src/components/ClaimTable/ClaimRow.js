import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { Time } from '../../classes/Time';

export default function ClaimRow(props) {
  const {dateTime, lob, req, serviceType } = props;
  const dateAndTime = new Time(dateTime).getDateAndTime();
  return (
  <TableRow >
    <TableCell component="th" scope="row">
      REQ-{req}
    </TableCell>
    <TableCell align="right">{dateAndTime}</TableCell>
    <TableCell align="right">{serviceType}</TableCell>
    <TableCell align="right">{lob}</TableCell>
  </TableRow>
  )
}