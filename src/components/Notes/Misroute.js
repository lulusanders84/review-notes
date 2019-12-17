import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: 75,
  },
  // textField: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  // },
  dense: {
    marginTop: 14,
  },
  menu: {
    width: 200,
  },
  notes: {
    padding: 0,
  }
}));
export function Misroute(props) {
  const { values } = props;
  const { code, pend } = props.notes;
  const classes = useStyles();
  return (
    <Card>
    <CardContent>
      <Typography component="h3" variant="h6">Misroute Note</Typography>
      <div contentEditable className={classes.notes}>
        REQ-{values.req}: Misroute
        <br />Suspended codes: {code}
        <br />Suspension: {pend}
        <br />Rationale: {values.misrouteRationale}
        <br />Determination: Claim referred in error
      </div>
    </CardContent>
    </Card>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes
});

export default connect(mapStateToProps)(Misroute)