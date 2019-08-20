

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { policySuggestions, suggestions } from '../AutoComplete/utils';
import ReactSelect from '../ReactSelect';
import ReactSelectSingle from '../ReactSelectSingle';
import TextInput from '../TextInput';
import RadioInput from '../RadioInput';
import InfoRequestNotes from '../InfoRequestNotes/InfoRequestNotes';
import * as utils from './utils';
import { pends, fepPends } from '../../data/pends';
import { Divider } from '@material-ui/core';
import PolicyInput from '../PolicyInput';
import { bcbsmnPolicies } from '../../data/bcbsmnPolicies';

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

class InfoRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: utils.initialValues,
      drugReview: true,
      disableAllMet: false
    }
  }
  handleReviewed = (event) => {
    const reviewed = event.target.value === "yes" ? true : false
    this.setState({reviewed,});
  }
  handlePendInput = (value) => {
    const newValues = this.state.values;
    newValues.pend = value;
    this.setState({newValues,});
  }
  handleInfo = () => {
    const info = this.getInfo(this.state.values.policy);
    this.handleInputs({name: "info", value: info});
  }
  getInfo = (policies) => {
    return policies.map(policy => {
      const bcbsmnPolicy = bcbsmnPolicies.find(bcbsmnPolicy => {
        console.log(bcbsmnPolicy)
        return bcbsmnPolicy["Policy #"] === policy["Policy #"];
      })
      console.log(bcbsmnPolicy)
      return bcbsmnPolicy.info;
    }).join(" ");
    
  }
  handleInputs = (value) => {
    const newValues = this.state.values;
    newValues[value.name] = value.value;
    this.setState({newValues,});
    switch(value.name) {
      case "policy":
        this.handleInfo();
        break;
      case "pa-match": 
        const newValue = this.state.values["pa-deter"] === "approved" ? "approve" : "deny";
        this.handleInputs({name: "deter", value: newValue});
        if(value.value === "yes") {
          this.setState({disableAllMet: true})
        }
        break;
      case "deter":
        if(value.value !== "approve") {this.handleInputs({name: "allMet", value: false})};
        break;
      case "code":
        this.handleServiceSelect(value);
        break;
      case "name":
      case "lob":
        this.handleStorage(value);
        break;
      case "pa-diagnosis":
          value.name = "diagnosis";
          this.handleInputs(value);
          break;
      case "pa-provider":
        value.name = "provider";
        this.handleInputs(value);
        break;
      case "serviceType":
        const drugReview = value.value === "drug" ? true : false;
        this.setState({drugReview,})
    }
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
    const { classes } = this.props;
    const claimTypeOptions = this.state.values.lob === "GP" ? ["platinum blue", "med supp", "MAPD"] : ["local", "home"];
    const claimSystemOptions = this.state.values.special === "host" ? ["live", "adjustment"] : ["OCWA", "INSINQ"];
    const pendOptions = this.state.values.lob === "FEP" ? [...fepPends, ...pends] : pends;
    return (
      <div>
        <TextInput id="name" placeholder="" label="Clinician:" onBlur={this.handleInputs} values={this.state.values} />
        <RadioInput id="lob" options={["commercial", "FEP", "GP"]} label="LOB" updateValue={this.handleInputs} values={this.state.values} />      
        { this.state.values.lob !== "FEP" 
          ? <div>
                <RadioInput id="claimType" options={claimTypeOptions} label="Claim Type" updateValue={this.handleInputs} values={this.state.values} />
                {this.state.values.claimType === "home" ? <TextInput id="sccf" placeholder="" label="SCCF:" onBlur={this.handleInputs} values={this.state.values} />
                : null}
          </div>
          : null}
        { this.state.values.lob === "commercial"
          ? <ReactSelectSingle id="special" suggestions={suggestions(["N/A", "employee", "foreign", "hormel", "host", ])} label="Specialty claim" updateValue={this.handleInputs} values={this.state.values} />             
          : null}                         
        <RadioInput id="claimSystem" options={claimSystemOptions} label="Claim System" updateValue={this.handleInputs} values={this.state.values} />             
        <ReactSelect id="pend" suggestions={suggestions(pendOptions)} label="Suspension" updateValue={this.handlePendInput} values={this.state.values} value={this.state.values.pend} />             
        <TextInput id="req" placeholder="Enter number" label="REQ-" onBlur={this.handleInputs} values={this.state.values} />
        <TextInput id="dos" placeholder="" label="Date of service" onBlur={this.handleInputs} values={this.state.values} />              
        <TextInput id="code" placeholder="" label="Suspended Codes" onBlur={this.handleInputs} values={this.state.values} />         
        <PolicyInput handleInputs={this.handleInputs} values={this.state.values} />        
        <TextInput id="info" multiline={true} rows="5" label="Info to Request" values={this.state.values} onBlur={this.handleInputs} shrink={true} />
        <TextInput id="related" placeholder="Separate multiple numbers with commas" label="Related REQ #s" onBlur={this.handleInputs} values={this.state.values} />
      <Divider variant="fullWidth" />
      <div className={classes.notes}>
        <InfoRequestNotes values={this.state.values}  />
      </div>
      </div>
    );
  }
}

export default withStyles(styles)(InfoRequest)