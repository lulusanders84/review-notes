

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { policySuggestions } from '../../utils/AutoComplete';
import ReactSelect from './ReactSelect';
import * as utils from '../../utils';
import * as reviewNotesUtils from '../../utils/ReviewNotes/';
import { mergePolicyNameArrays } from '../../utils/ReviewNotes/setPolicy';
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

class PolicyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policyNames: [],
      interqual: false
    }
  }
  handleCodeSelect = (code) => {
    const codes = utils.formatCodes(code);
    const policies = reviewNotesUtils.setPolicyByCode(codes, this.props.values.lob);
    if(policies) {
      const policiesInValues = this.props.values.policy;
      this.props.handleInputs({name: "policy", value:[...policiesInValues, ...policies]})
    }
  }
  onPolicyChange = (policy) => {
    policy = policy.value;
    let policies;
    if(policy){
      policies = reviewNotesUtils.getPolicies(policy)
    } else {
      policies = [];
    } 
    policies.some(policy => {
      return policy["Policy #"] === "InterQual";
    })
      ? this.setState({interqual: true})
      : this.setState({interqual: false})
    console.log(policy, policies);
    this.props.handleInputs({name: "policy", value: policies})
  }
  setPolicyNames = (policies) => {
    return policies.map(policy => {
      const number = policy["Policy #"];
      const name = policy["Full Policy"];
      const href = policy["href"]
      return policy.policyName 
        ? policy.policyName 
        : {value: number, label: number, name, href,}})
  }
  addPolicyNames = (policyNames) => {
    const allPolicyNames = mergePolicyNameArrays(policyNames, this.state.policyNames);
    const policies = reviewNotesUtils.getPolicies(allPolicyNames);
    this.props.handleInputs({name: "policy", value: policies})
    this.setState({policyNames: allPolicyNames})

  }
  componentDidMount() {
      this.setState({code: this.props.values.code})
  }
  componentDidUpdate(prevProps) {
    if(this.state.code !== this.props.values.code) {
        this.setState({code: this.props.values.code});
        this.handleCodeSelect(this.props.values.code);

    }
  }
  render() {
    return (
      <div>          
        <ReactSelect id="policy" suggestions={policySuggestions(this.props.values.lob)} label="Medical Policy" updateValue={this.props.handleInputs} />
        <InterQualInput visible={this.state.interqual} values={this.props.values} handleInputs={this.props.handleInputs} />  
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(withStyles(styles)(PolicyInput))