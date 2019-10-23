import React from 'react';
import ClaimCountButton from '../ClaimCount/ClaimCountButton';
import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles} from '@material-ui/core';
import { connect } from 'react-redux';
import { formatDateTime, formatDate } from '../../utils';

const useStyles = makeStyles({
  table: {
    width: "425px"
  }
})
function ClaimTable(props) {
  const classes = useStyles();
  const today = new Date(formatDate(Date.now())).getTime()
  const claims = props.claimLog.reduce((acc, claim) => {
    if(claim.dateTime > today) {
      acc.push(claim)
    }
    return acc;
  }, [])
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
            {claims.map(claim => (
              <TableRow key={claim.req}>
                <TableCell component="th" scope="row">
                  REQ-{claim.req}
                </TableCell>
                <TableCell align="right">{formatDateTime(claim.dateTime)}</TableCell>
                <TableCell align="right">{claim.type}</TableCell>
                <TableCell align="right">{claim.lob}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>   
  )
}

const mapStateToProps = (state) => ({
  claimLog: state.claims.claimLog,
  claimTotal: state.claims.claimTotal,
  dailyTarget: state.claims.dailyTarget,
  claimsGoal: state.claims.claimsGoal
});

export default connect(mapStateToProps)(ClaimTable)