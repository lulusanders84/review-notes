import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Info from './Info';

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
export default function InfoRequest(props) {
  const {...values} = props.values;
  const classes = useStyles();
  const policyString = values.policy.length > 0 ? values.policy.map(policy => {return policy["Policy #"]}).join(" / ") : "N/A";
  return (
    <Card>
    <CardContent>
      <Typography component="h3" variant="h6">Info Request Note</Typography>
      <div contentEditable className={classes.notes}>
        REQ-{values.req}: Additional Info Requested
        <br />Suspended codes: {values.code.toUpperCase()}
        <br />Suspension: {values.pend ? values.pend.map(pend => { return pend.value }).join(" / ") : values.pend}
        <br />Medical Policy/Criteria: {policyString}
        <br />PA research: No PA found, no history of info requests in UM
        <br />Related UM requests: {values.related !== "N/A" ? values.related.split(",").map(related => {return `REQ-${related}`}).join(", ") : values.related}
        <br />Route: {values.claimType === "home" ? `B2 (SCCF: ${values.sccf})` : "Letter"}
        <Info values={values} />
      </div>
    </CardContent>
    </Card>
  )
}