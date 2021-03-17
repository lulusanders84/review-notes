import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles} from '@material-ui/core';
import { connect } from 'react-redux';
import ClaimRow from './ClaimRow';

const useStyles = makeStyles({
  table: {
    width: "425px"
  }
})
function ClaimTable(props) {
  const classes = useStyles();

  return (
      <Table className={classes.table} size="small" aria-label="Claims Table">
          <TableHead>
            <TableRow>
              <TableCell>REQ #</TableCell>
              <TableCell align="right">Date/Time</TableCell>
              <TableCell align="right">Claim Type</TableCell>
              <TableCell align="right">LOB</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.dailyClaims.map((claim, i) => {
              return (
                <ClaimRow key={i} {...claim} />
            )})}
          </TableBody>
        </Table>   
  )
}

const mapStateToProps = (state) => ({
  dailyClaims: state.claims.dailyClaims
});

export default connect(mapStateToProps)(ClaimTable)