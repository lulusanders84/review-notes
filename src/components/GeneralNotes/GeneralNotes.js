import React from 'react';
import MedClaimReviewNote from '../Notes/MedClaimReviewNote/MedClaimReviewNote';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import MedPolicy from '../Notes/MedPolicy';
import { Card, CardContent, Typography } from '@material-ui/core';
import { ClinicalRationale } from '../Notes/ClinicalRationale';
import * as utils from '../../utils/Notes';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import styles from '../../styles/noteStyles';

const useStyles = makeStyles(() => (styles));

export const GeneralNotes = (props) => {
  const classes = useStyles();
  const values = utils.formatValues(props.values);
  return (
    <div>
      <MedClaimReviewNote />
      <ClaimNote />
      {values.policy.length !== 0
        ? <MedPolicy />   
        : null }   
      {values.rationale === "Not Medically Necessary" || values.rationale === "Experimental/Investigative" 
      ? <Card>
          <CardContent className={{root: classes.root}}>
            <Typography component="h3" variant="h6">Fax Transmission</Typography>
            <div contentEditable className={classes.notes}>
                REQ-{props.values.req}: Fax not required for claim denials. Letter generated.
            </div> 
          </CardContent>
        </Card>
      : null }
      {values["pa-deter"] === "denied" && values["clinical-rationale"]
        ? <ClinicalRationale values={props.values} />
        : null }
      <Routing />        
    </div> 
  )  
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(GeneralNotes)
