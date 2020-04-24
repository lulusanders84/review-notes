import React from 'react';
import MedClaimReviewNote from '../Notes/MedClaimReviewNote/MedClaimReviewNote';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import MedPolicy from '../Notes/MedPolicy';
import FaxTransmission from '../Notes/FaxTransmission';
import { ClinicalRationale } from '../Notes/ClinicalRationale';
import * as utils from '../../utils/Notes';
import { connect } from 'react-redux';

export const GeneralNotes = (props) => {
  const values = utils.formatValues(props.values);
  return (
    <div>
      <MedClaimReviewNote />
      <MedPolicy />   
      <ClaimNote />
      {values.claimSystem !== "OCWA"
        ? <Routing /> 
        : null
      }
      {values.rationale === "Not Medically Necessary" || values.rationale === "Experimental/Investigative" 
      ? <FaxTransmission values={props.values} />
      : null }
      {values["pa-deter"] === "denied" && values["clinical-rationale"]
        ? <ClinicalRationale values={props.values} />
        : null }          
    </div> 
  )  
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(GeneralNotes)
