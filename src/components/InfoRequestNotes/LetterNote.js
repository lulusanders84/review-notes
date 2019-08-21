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
  }
}));
export default function LetterNote(props) {
  const {...values} = props.values;
  const classes = useStyles();
  return (
    <Card>
    <CardContent>
      <Typography component="h3" variant="h6">Note for Letter</Typography>
      <div contentEditable className={classes.notes}>
        REQ-{values.req}: Additional Info Requested
        <br />Info Requested: {props.info}
        {props.faxAndDate}
      </div>
    </CardContent>
    </Card>
  )
}