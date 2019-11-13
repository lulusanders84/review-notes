import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MedDirectorNote from './MedDirectorNote';
import styles from '../../../styles/noteStyles';
import { connect } from 'react-redux';
import { setMedClaimReviewData } from '../../../actions/notes';

const useStyles = makeStyles(() => (styles));

export function MedClaimReviewNote(props) {
  const { dispatch, values, notes } = props;
  React.useEffect(() => {
    dispatch(setMedClaimReviewData(values))
  }, [dispatch, values])
  const classes = useStyles();
  
  return (
    <Card>
    <CardContent classes={{root: classes.root}}>
      <Typography component="h3" variant="h6">Med Claim Review Note</Typography>
      <div contentEditable className={classes.notes}>
        REQ-{values.req}: Clinical Note
        <br />Clinician name/Extension: {values.name}
        <br />LOB: {notes.lob}
        <br />Service: {notes.service}
        <br />Drug Request: {notes.drugRequest}
        <br />Suspended codes: {notes.code}
        <br />Suspension: {notes.pend}
        <br />PA on file: {notes.pa}
        <br />Claim history: {notes.claimHistory}
        <br />Medical Policy/Criteria: {notes.policyString}
        <br />Benefits: {notes.benefits}
        <br />Case summary: {notes.summary} 
        <br />Extenuating Circumstances: NA
        <br />Criteria Met: {notes.criteriaMet}
        <br />Criteria Not Met: {notes.criteriaNotMet}
        <br />Determination: {notes.deter}
        {values.deter === "send to medical director" ?
          <MedDirectorNote />
          : null}
        
      </div>
    </CardContent>
    </Card>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes
});

export default connect(mapStateToProps)(MedClaimReviewNote)