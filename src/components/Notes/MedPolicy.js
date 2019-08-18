import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  },
  list: {
    listStyle: "none",
    padding: 0
  }
}));
export default function MedPolicy(props) {
  const values = props.values;
  const classes = useStyles();
  const policies = values.policy;
  const fullNames = policies.map((policy, index) => {
      const number = policy["Policy #"];
      const name = policy["Full Policy"];
      const isNumber = isNaN(number.charAt(0))
      const policyOrigin = isNumber ? "Blue Cross Blue Shield of Minnesota Medical Policy for" : "Federal Employee Program (FEP) Medical Policy for"
      return <li key={index}>{number} {policyOrigin} {name}</li>

  })
  return (
    <Card>
    <CardContent>
      <Typography component="h3" variant="h6">Medical Policy</Typography>
      <ul contentEditable className={classes.list}>
        {fullNames}
      </ul>
    </CardContent>
    </Card>
  )
}