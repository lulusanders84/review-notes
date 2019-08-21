import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as utils from './utils';

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
export default function ClaimNote(props) {
  const values = props.values;
  const classes = useStyles();
  const queue = utils.setQueue(values);
  return (
    <Card>
    <CardContent>
      <Typography component="h3" variant="h6">Routing</Typography>
      <div contentEditable className={classes.notes}>
        Routing to queue {queue}
        <br />{values.lob === "FEP" ? "Routing to examiner": ""}
      </div>
    </CardContent>
    </Card>
  )
}