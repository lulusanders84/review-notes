import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/noteStyles';
import Info from './Info'
import { setClaimNoteData } from '../../actions';
import { connect } from 'react-redux';
import FaxAndDate from './FaxAndDate';

const useStyles = makeStyles(() => (styles));

export function ClaimNote(props) {
  const values = props.values;
  const classes = useStyles();
  const { dispatch } = props;
  const { ocwaNote, instructions, modifier22, remainder } = props.notes;
  React.useEffect(() => {
    dispatch(setClaimNoteData(values));
  }, [dispatch, values])
  return (
    <Card>
    <CardContent classes={{root: classes.root}}>
      <Typography component="h3" variant="h6">Claim Note</Typography>
      <div contentEditable className={classes.notes}>
      REQ-{values.req}: {ocwaNote} {instructions} {modifier22} {remainder}
      {props.info ? <Info /> : null}
      {props.faxAndDate ? <FaxAndDate /> : null}
      </div>
    </CardContent>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes
});

export default connect(mapStateToProps)(ClaimNote)