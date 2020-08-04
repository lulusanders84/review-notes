import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactSelectSingle from './ReactSelectSingle';
import CriteriaQuill from './CriteriaQuill';
import { referReasons } from '../../data/referReasons'; 
import { connect } from 'react-redux';
import { suggestions } from '../../utils/AutoComplete';

const useStyles = makeStyles(() => ({
  card: {
    width: "100%",
  }
}));
export function CriteriaInputs(props) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
        <CriteriaQuill id="criteriaMet" label="Criteria Met"   />
        <CriteriaQuill id="criteriaNotMet" label="Criteria Not Met"  />
        <ReactSelectSingle id="referReason" suggestions={suggestions(referReasons)} label="Reason for Referral"   /> 
    </div>
  )
}

const mapStateToProps = (state) => ({
  options: state.suggestions.options,
});

export default connect(mapStateToProps)(CriteriaInputs)