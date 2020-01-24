

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React, {useState, useEffect, useCallback} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { policySuggestions } from '../../utils/AutoComplete';
import ReactSelect from './ReactSelect';
import * as utils from '../../utils';
import * as reviewNotesUtils from '../../utils/ReviewNotes/';
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
  const { lob, code, policy } = props.values;
  const { handleInputs } = props;
  const [suggestions, setSuggestions] = useState(policySuggestions(lob));

  const handleCodeSelect = useCallback(() => {
    const codes = utils.formatCodes(code);
    const policies = reviewNotesUtils.setPolicyByCode(codes, lob);
    if(policies) {
      const policiesInValues = policy;
      const allPolicies = [...policiesInValues, ...policies];
      const policyNumbers = Array.from(new Set(allPolicies.map(policy => { return policy["Policy #"]})))
      const returnedPolicies = policyNumbers.map( number => {
        return allPolicies.find(policy => {
          return policy["Policy #"] === number
        })
      })
      handleInputs({name: "policy", value: returnedPolicies});
    }
  }, [code, lob, policy, handleInputs]) 
  
  useEffect(handleCodeSelect, [code]);
  
  useEffect(() => {
    setSuggestions(policySuggestions(lob));
    handleInputs({name: "policy", value: []})
  }, [lob, handleInputs]);

  return (
    <div>          
      <ReactSelect id="policy" suggestions={suggestions} label="Medical Policy" updateValue={props.handleInputs} />
      <InterQualInput visible={props.values.interqual} values={props.values} handleInputs={props.handleInputs} />  
    </div>
  );
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(withStyles(styles)(PolicyInput))