import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as utils from './utils';
import {rejectCodes} from '../../data/rejectCodes';
import { setPricingNote } from './utils/setPricingNote';

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
export default function ClaimNote(props) {
  const values = props.values;
  const classes = useStyles();
  const denialType = values.denialType === "entire claim" ? "claim" : values.code;
  const codeType = `${utils.capWord(values.claimType)} ${values.proPar}`;
  const rejectCode = values.rationale ? rejectCodes[values.rationale][codeType]: "";
  const pend = values.pend ? values.pend.map(pend => {return pend.value.trim()}).join(" / ") : "[no pend entered]";
  const pricing = setPricingNote(values, "claim note");
  const ocwaNote = values.claimSystem === "OCWA" ? "Remove E1057/E1058 from claim.": "";
  const instructions = values.pend && values.pend.some(pend => {return pend.value === "R5027"})
    ? `Ignore ${pend},`
    : values.deter === "approve" 
      ? `Ignore ${pend}${pricing}`
      : `Deny ${denialType} ${props.denialMessage} (${rejectCode})`;
  const modifier22 = values.pend && values.pend.some(pend => {return pend.value === "R5027"})
    ? values.deter === "approve"
      ? ` allow additional allowance, pay ${values.code} at 120% of allowed amount. Apply E20 SAC`
      : ` no additional allowance for 22 modifier, apply E19 SAC`
    : "";
  const remainder = denialType === "claim" ? " ." : " and allow claim to continue processing.";
  return (
    <Card>
    <CardContent>
      <Typography component="h3" variant="h6">Claim Note</Typography>
      <div contentEditable className={classes.notes}>
      REQ-{values.req}: {ocwaNote} {instructions} {modifier22} {remainder}
      <br />{props.info}
      <br />{props.claimNoteAddendum}
      </div>
    </CardContent>
    </Card>
  )
}