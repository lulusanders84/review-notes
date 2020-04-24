import React from 'react';
import ReactSelectSingle from './ReactSelectSingle';
import { makeStyles } from '@material-ui/core/styles';
import { suggestions } from '../../utils/AutoComplete/';
import { rejectCodes } from '../../data/rejectCodes'
import RadioInput from './RadioInput';

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
        <ReactSelectSingle id="rationale" suggestions={suggestions(rejectCodes)} label="Denial Rationale:" updateValue={props.handleInputs} /> 
        <RadioInput id="denialType" options={["entire claim", "code only"]} label="Deny" updateValue={props.handleInputs} />
    </div>
  )
}