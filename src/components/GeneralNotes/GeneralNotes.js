import React from 'react';
import MedClaimReviewNote from '../Notes/MedClaimReviewNote/MedClaimReviewNote';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import MedPolicy from '../Notes/MedPolicy';
import { FaxTransmission } from '../Notes/FaxTransmission';
import { ClinicalRationale } from '../Notes/ClinicalRationale';
import * as utils from '../../utils/Notes';
import { connect } from 'react-redux';

export const GeneralNotes = (props) => {
  const values = utils.formatValues(props.values);
  return (
    <div>
      <MedClaimReviewNote />
      <ClaimNote />
      {values.policy.length !== 0
        ? <MedPolicy />   
        : null }   
      {values.rationale === "Not Medically Necessary" || values.rationale === "Experimental/Investigative" 
      ? <FaxTransmission />
      : null }
      {values["pa-deter"] === "denied" && values["clinical-rationale"]
        ? <ClinicalRationale />
        : null }
      <Routing />        
    </div> 
  )  
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(GeneralNotes)
