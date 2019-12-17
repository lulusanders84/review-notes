import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Info from '../Notes/Info';
import FaxAndDate from '../Notes/FaxAndDate';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: 75,
  },
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
export function LetterNote(props) {
  const {...values} = props.values;
  const classes = useStyles();
  return (
    <Card>
    <CardContent>
      <Typography component="h3" variant="h6">Note for Letter</Typography>
      <div contentEditable className={classes.notes}>
        REQ-{values.req}: Additional Info Requested
        <Info />
        <FaxAndDate />
      </div>
    </CardContent>
    </Card>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(LetterNote)