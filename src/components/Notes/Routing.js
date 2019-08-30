import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as utils from './utils';
import styles from '../../styles/noteStyles';

const useStyles = makeStyles(theme => (styles));

export default function ClaimNote(props) {
  const values = props.values;
  const classes = useStyles();
  const queue = utils.setQueue(values);
  return (
    <Card>
    <CardContent classes={{root: classes.root}}>
      <Typography component="h3" variant="h6">Routing</Typography>
      <div contentEditable className={classes.notes}>
        Routing to queue {queue}
        <br />{values.lob === "FEP" ? "Routing to examiner": ""}
      </div>
    </CardContent>
    </Card>
  )
}