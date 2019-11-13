import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
export function MisrouteClaimNote(props) {
  const { req } = props.values;
  const classes = useStyles();
  return (
    <Card>
    <CardContent>
      <Typography component="h3" variant="h6">Claim Note</Typography>
      <div contentEditable className={classes.notes}>
      REQ-{req}: Claim referred in error, see DLP for claim resolution.
      </div>
    </CardContent>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(MisrouteClaimNote)