import React from 'react';
import ReactSelectSingle from './BaseInputs/ReactSelectSingle';
import { makeStyles } from '@material-ui/core/styles';
import { suggestions } from '../../utils/AutoComplete/';
import { rejectCodes } from '../../data/rejectCodes'
import RadioInput from './BaseInputs/RadioInput';

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    padding: theme.spacing(2),
  }
}));
export default function (props) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
        <ReactSelectSingle id="rationale" suggestions={suggestions(rejectCodes)} label="Denial Rationale:"  /> 
        <RadioInput id="denialType" options={["entire claim", "code only"]} label="Deny"  />
    </div>
  )
}