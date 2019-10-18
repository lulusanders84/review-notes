import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as utils from '../../utils/Notes';
import MedDirectorNote from './MedDirectorNote';
import styles from '../../styles/noteStyles';

const useStyles = makeStyles(theme => (styles));

export default function MedClaimReviewNote(props) {
  const {...values} = props.values;
  const classes = useStyles();
  const policyString = utils.setPolicyString(values);
  
  return (
    <Card>
    <CardContent classes={{root: classes.root}}>
      <Typography component="h3" variant="h6">Med Claim Review Note</Typography>
      <div contentEditable className={classes.notes}>
        REQ-{values.req}: Clinical Note
        <br />Clinician name/Extension: {values.name}
        <br />LOB: {utils.capWord(values.lob)}
        <br />Service: {utils.formatToName(values.service.toLowerCase())}
        <br />Drug Request: {props.values.drugReview ? utils.capWord(props.values.drugReviewType) : "N/A"}
        <br />Suspended codes: {values.code.toUpperCase()}
        <br />Suspension: {values.pend ? values.pend.map(pend => { return pend.value }).join(" / ") : values.pend}
        <br />PA on file: {utils.setHistory(values, "PA")}
        <br />Claim history: {utils.setHistory(values, "related claim")}
        <br />Medical Policy/Criteria: {utils.setPolicyString(values, "med policy")}
        <br />Benefits: {values.lob === "FEP" ? values.fepBenefits : values.benefits}
        <br />Case summary: {utils.setCaseSummary(values)} 
        <br />Extenuating Circumstances: NA
        <br />Criteria Met: {values.allMet ? `Applicable ${policyString} criteria met`: values.criteriaMet ? values.criteriaMet : policyString === "N/A" ? policyString : "None"}
        <br />Criteria Not Met: {values.criteriaNotMet ? values.criteriaNotMet: policyString === "N/A" ? policyString :"None"}
        <br />Determination: {utils.capWord(values.deter)}{utils.setRationale(values, policyString, props.denialMessage)}
        {values.deter === "send to medical director" ?
          <MedDirectorNote values={props.values} selected={values.referReason} />
          : null}
        
      </div>
    </CardContent>
    </Card>
  )
}