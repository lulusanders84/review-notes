import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles} from '@material-ui/core';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import { Time } from '../../classes/Time';

const useStyles = makeStyles({
  table: {
    width: "425px"
  }
})
function ClaimTable(props) {
  const classes = useStyles();

  return (
      <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>REQ #</TableCell>
              <TableCell align="right">Date/Time</TableCell>
              <TableCell align="right">Claim Type</TableCell>
              <TableCell align="right">LOB</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.dailyClaims.map(claim => {
              const dateAndTime = new Time(claim.dateTime).getDateAndTime();
              return (
              <TableRow key={uuidv4()}>
                <TableCell component="th" scope="row">
                  REQ-{claim.req}
                </TableCell>
                <TableCell align="right">{dateAndTime}</TableCell>
                <TableCell align="right">{claim.serviceType}</TableCell>
                <TableCell align="right">{claim.lob}</TableCell>
              </TableRow>
            )})}
          </TableBody>
        </Table>   
  )
}

const mapStateToProps = (state) => ({
  dailyClaims: state.claims.dailyClaims
});

export default connect(mapStateToProps)(ClaimTable)