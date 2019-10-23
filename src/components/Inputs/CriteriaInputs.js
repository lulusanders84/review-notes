import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextInput from './TextInput';
import ReactSelectSingle from './ReactSelectSingle';
import { referReasons } from '../../data/referReasons'; 
import { suggestions } from '../../utils/AutoComplete';

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
  }
}));
export default function (props) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
        <TextInput id="criteriaMet" multiline={true} rows="5" placeholder="" label="Criteria Met" onBlur={props.handleInputs}  />
        <TextInput id="criteriaNotMet" multiline={true} rows="5" placeholder="" label="Criteria Not Met" onBlur={props.handleInputs}  />
        <ReactSelectSingle id="referReason" suggestions={suggestions(referReasons)} label="Reason for Referral" updateValue={props.handleInputs}  /> 
    </div>
  )
}