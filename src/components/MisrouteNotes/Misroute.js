import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as utils from '../Notes/utils';

const useStyles = makeStyles(theme => ({
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
export default function Misroute(props) {
  const {...values} = props.values;
  const classes = useStyles();
  const policyString = values.policy.length > 0 ? values.policy.map(policy => {return policy["Policy #"]}).join(" / ") : "N/A";
  return (
    <Card>
    <CardContent>
      <Typography component="h3" variant="h6">Misroute Note</Typography>
      <div contentEditable className={classes.notes}>
        REQ-{values.req}: Misroute
        <br />Suspended codes: {values.code.toUpperCase()}
        <br />Suspension: {values.pend ? values.pend.map(pend => { return pend.value }).join(" / ") : values.pend}
        <br />Rationale: {values.misrouteRationale}
        <br />Determination: Claim referred in error

      </div>
    </CardContent>
    </Card>
  )
}