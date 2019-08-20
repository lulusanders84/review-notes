import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as utils from './utils';
import MedDirectorNote from './MedDirectorNote';

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
export default function MedClaimReviewNote(props) {
  const {...values} = props.values;
  const classes = useStyles();
  const policyString = values.policy.length > 0 ? values.policy.map(policy => {return policy["Policy #"]}).join(" / ") : "N/A";
  
  return (
    <Card>
    <CardContent>
      <Typography component="h3" variant="h6">Med Claim Review Note</Typography>
      <div contentEditable className={classes.notes}>
        REQ-{values.req}: Clinical Note
        <br />Clinician name/Extension: {values.name}
        <br />LOB: {utils.capWord(values.lob)}
        <br />Service: {utils.formatToName(values.service.toLowerCase())}
        <br />Drug Request: {props.drugReview ? utils.capWord(props.values.drugReview) : "N/A"}
        <br />Suspended codes: {values.code.toUpperCase()}
        <br />Suspension: {values.pend ? values.pend.map(pend => { return pend.value }).join(" / ") : values.pend}
        <br />PA on file: {utils.setHistory(values, "PA")}
        <br />Claim history: {utils.setHistory(values, "related claim")}
        <br />Medical Policy/Criteria: {policyString}
        <br />Benefits: {values.benefits}
        <br />Case summary: {utils.setCaseSummary(values)} 
        <br />Extenuating Circumstances: NA
        <br />Criteria Met: {values.allMet ? `Applicable ${policyString} criteria met`: values.criteriaMet ? values.criteriaMet : "N/A"}
        <br />Criteria Not Met: {values.criteriaNotMet ? values.criteriaNotMet: "N/A"}
        <br />Determination: {utils.capWord(values.deter)} {utils.setRationale(values, policyString, props.denialMessage)}.
        {values.deter === "send to medical director" ?
          <MedDirectorNote values={props.values} selected={values.referReason} />
          : null}
        
      </div>
    </CardContent>
    </Card>
  )
}