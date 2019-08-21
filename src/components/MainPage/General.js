

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import ReactSelect from '../Inputs/ReactSelect';
import ReactSelectSingle from '../Inputs/ReactSelectSingle';
import TextInput from '../Inputs/TextInput';
import RadioInput from '../Inputs/RadioInput';
import ReviewedInputs from '../Inputs/ReviewedInputs';
import Checkbox from '../Inputs/Checkbox';
import DeniedInputs from '../Inputs/DeniedInputs';
import CriteriaInputs from '../Inputs/CriteriaInputs';
import PricingInputs from '../Inputs/PricingInputs';
import PolicyInput from '../Inputs/PolicyInput';
import Notes from '../Notes/Notes';
import * as utils from './utils';
import { setPendOrder } from './utils/savingPends/setPendOrder';
import { savePends } from './utils/savingPends/savePends';
import { mergePolicyNameArrays } from './utils/setPolicy';
import { suggestions } from '../AutoComplete/utils';
import { pends, fepPends } from '../../data/pends';


const styles = theme => ({
  '@global': {
    body: {
      height: "100%",
      backgroundColor: theme.palette.common.white,
    },
    html: { 
      height: "100%", 
      overflow: "auto" 
    }
  },
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  formPaper: {
    maxWidth: "500px",
    marginTop: theme.spacing(4),
  },
  tabs: {
    marginTop: "-15px"
  },
  form: {
    padding: "10px",
    width: '100%', // Fix IE 11 issue.
    maxWidth: "500px",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  notes: {
    marginTop: theme.spacing(2)
  }
});

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policyNames: [],
      values: utils.initialValues,
      drugReview: true,
      disableAllMet: false
    }
  }
  onPolicyChange = (policy) => {
    let policyNames;
    let policies;
    if(policy){
      policies = utils.getPolicies(policy)
      policyNames = this.setPolicyNames(policies);
    } else {
      policyNames = [];
      policies = [];
    }
    this.handleInputs({name: "policy", value: policies})
    this.setState({policyNames,})

  }
  setPolicyNames = (policies) => {
    return policies.map(policy => {
      const number = policy["Policy #"];
      const name = policy["Full Policy"];
      return policy.policyName 
        ? policy.policyName 
        : {value: number, label: number, name,}})
  }
  addPolicyNames = (policyNames) => {
    const allPolicyNames = mergePolicyNameArrays(policyNames, this.state.policyNames);
    const policies = utils.getPolicies(allPolicyNames);
    this.handleInputs({name: "policy", value: policies})
    this.setState({policyNames: allPolicyNames})

  }
  handleReviewed = (event) => {
    const reviewed = event.target.value === "yes" ? true : false
    this.setState({reviewed,});
  }
  handlePendInput = (value) => {
    const newValues = this.state.values;
    newValues.pend = value;
    this.setState({values: newValues});
    if(value) {value.forEach(value => {savePends(value.value, this.state.values.lob)})}
  }

  handleInputs = (value) => {
    const newValues = this.state.values;
    newValues[value.name] = value.value;
    this.setState({newValues,});
    utils.handleInputsSwitch(
      this.handleInputs, 
      this.handleServiceSelect, 
      this.handleStorage, 
      this.setState, 
      value, 
      this.state.values);
  }
  handleStorage = (value) => {
    window.localStorage.setItem(value.name.trim(), value.value.trim())
  }
  handleServiceSelect = (value) => {
    const firstChar = value.value.charAt(0).toUpperCase();
    const parsed = parseInt(firstChar);
    const serviceType = firstChar === "J" ? "drug" : !parsed ? "DME" : "procedure";
    this.handleInputs({name: "serviceType", value: serviceType});
  }

  setIndex(e, i) {
    this.setState({
      index: i
    })
  }
  render() {
    console.log(this.state, "general");
    const { classes } = this.props;
    const claimTypeOptions = this.state.values.lob === "GP" ? ["platinum blue", "med supp", "MAPD"] : ["local", "home"];
    const claimSystemOptions = this.state.values.special === "host" ? ["live", "adjustment"] : ["OCWA", "INSINQ"];
    const pendOptions = this.state.values.lob === "FEP" ? [...fepPends, ...pends] : pends;
    return (
      <div>
        <TextInput id="name" placeholder="" label="Clinician:" onBlur={this.handleInputs} values={this.state.values} />
        <RadioInput id="lob" options={["commercial", "FEP", "GP"]} label="LOB" updateValue={this.handleInputs} values={this.state.values} />      
        { this.state.values.lob !== "FEP" 
          ? <RadioInput id="claimType" options={claimTypeOptions} label="Claim Type" updateValue={this.handleInputs} values={this.state.values} />
          : null}
        { this.state.values.lob === "commercial"
          ? <ReactSelectSingle id="special" suggestions={suggestions(["N/A", "employee", "foreign", "hormel", "host", ])} label="Specialty claim" updateValue={this.handleInputs} values={this.state.values} />             
          : null}                         
        <RadioInput id="claimSystem" options={claimSystemOptions} label="Claim System" updateValue={this.handleInputs} values={this.state.values} />             
        <ReactSelect id="pend" suggestions={suggestions(setPendOrder(pendOptions, this.state.values.lob))} label="Suspension" updateValue={this.handlePendInput} values={this.state.values} value={this.state.values.pend} />             
        <RadioInput id="reviewed" options={["no", "yes"]} label="Service previously reviewed" onChange={this.handleReviewed} updateValue={this.handleInputs} values={this.state.values} />  
        <ReviewedInputs reviewed={this.state.reviewed} handleInputs={this.handleInputs} rationaleValue={this.state.values.rationale} values={this.state.values} />
        <TextInput id="req" placeholder="Enter number" label="REQ-" onBlur={this.handleInputs} values={this.state.values} />
        <TextInput id="age" placeholder="" label="Age" onBlur={this.handleInputs} values={this.state.values} /> 
        <TextInput id="dos" placeholder="" label="Date of service" onBlur={this.handleInputs} values={this.state.values} />              
        <TextInput id="code" placeholder="" label="Suspended Codes" onBlur={this.handleInputs} values={this.state.values} />

        <TextInput id="service" placeholder="" label="Service" onBlur={this.handleInputs} values={this.state.values} />
        <RadioInput id="serviceType" options={["drug", "procedure", "DME"]} label="Service Type" updateValue={this.handleInputs} values={this.state.values} />
        {this.state.drugReview ?
          <RadioInput id="drugReview" options={["new", "renewal"]} label="Drug Review Type" updateValue={this.handleInputs} values={this.state.values} />
          : null } 
        {this.state.values.claimType === "local" && this.state.values.lob === "commercial" 
          ? <RadioInput id="paList" options={["no", "yes"]} label="On PA List?" updateValue={this.handleInputs} values={this.state.values} />
          : null } 
        {this.state.values.pend && this.state.values.pend.some(pend => {return pend.value === "P5194"})
          ? <PricingInputs handleInputs={this.handleInputs} values={this.state.values} />
          : null}           
        <PolicyInput handleInputs={this.handleInputs} values={this.state.values} />        
        <TextInput id="benefits" placeholder="" label="Benefits" onBlur={this.handleInputs} values={this.state.values} />               
        <TextInput id="diagnosis" placeholder="" label="Diagnosis" onBlur={this.handleInputs} values={this.state.values} />
        <TextInput id="provider" placeholder="" label="Provider" onBlur={this.handleInputs} values={this.state.values} />
        <RadioInput id="proType" options={["professional", "facility"]} label="Provider Type" updateValue={this.handleInputs} values={this.state.values} />
        <RadioInput id="proPar" options={["Par", "Non-Par"]} label="Par Status" updateValue={this.handleInputs} values={this.state.values} />
        <TextInput id="summary" multiline={true} rows="5" label="Additional Clinical information" values={this.state.values} onBlur={this.handleInputs} />
        <RadioInput id="deter" options={["approve", "deny", "send to medical director"]} label="Determination" updateValue={this.handleInputs} values={this.state.values} />
        {this.state.values.deter === "deny" 
          ? <DeniedInputs denialId="rationale" handleInputs={this.handleInputs} values={this.state.values} />
          : this.state.values.deter === "send to medical director"
            ? <CriteriaInputs handleInputs={this.handleInputs} values={this.state.values} /> 
            : <Checkbox id="allMet" value={this.state.values.allMet} updateValue={this.handleInputs} label="All crtieria met" disabled={this.state.disableAllMet} />
        }
      <Divider variant="fullWidth" />
      <div className={classes.notes}>
        <Notes values={this.state.values} drugReview={this.state.drugReview}  />
      </div>
      </div>
    );
  }
}

export default withStyles(styles)(General)