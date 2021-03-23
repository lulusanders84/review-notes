

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React, {useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { policySuggestions } from '../../utils/AutoComplete';
import ReactSelect from './ReactSelect';
import InterQualInput from './InterQualInput';
import { connect } from 'react-redux';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formPaper: {
    maxWidth: "500px",
    marginTop: theme.spacing(4),
  },
  form: {
    padding: "10px",
    width: '100%', // Fix IE 11 issue.
    maxWidth: "500px",
    marginTop: theme.spacing(1),
  },
});

const PolicyInput = (props) => {
  const { lob } = props.values;
  const [suggestions, setSuggestions] = useState(policySuggestions(lob));
  
  useEffect(() => {
    setSuggestions(policySuggestions(lob));
  }, [lob]);

  return (
    <div>          
      <ReactSelect id="policy" suggestions={suggestions} label="Medical Policy"  />
      <InterQualInput visible={props.values.interqual} values={props.values}  />  
    </div>
  );
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(withStyles(styles)(PolicyInput))