
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '../Tabs';
import General from './NoteTemplates/General';
import Misroute from './NoteTemplates/Misroute';
import BackFromPeer from './NoteTemplates/BackFromPeer';
import InfoRequest from './NoteTemplates/InfoRequest';
import ScrollUpButton from 'react-scroll-up-button';
import Title from '../Title/Title';
import * as utils from '../../utils/ReviewNotes';
import { pends, fepPends } from '../../data/pends';
import { suggestions } from '../../utils/AutoComplete';
import { savePoliciesToStorage } from '../../data/medPolicies';
import { fepPolicies } from '../../data/fepPolicies';
import { medPolicies } from '../../data/medPolicies';
import * as savingPendsUtils from '../../utils/ReviewNotes/savingPends'

const savePends = savingPendsUtils.savePends;
const setPendOrder = savingPendsUtils.setPendOrder;

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
  root: {
    marginLeft: 10,
    padding: 0
  },
  paper: {
    width: "425px",
    marginTop: theme.spacing(4),
    justifyContent: "flex-start",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

class ReviewNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      policyNames: [],
      values: utils.initialValues,
      drugReview: true,
      disableAllMet: false,
      linked: false
    }
  }
  handleReviewed = (event) => {
    const reviewed = event.target.value === "yes" ? true : false
    this.setState({reviewed,});
    if(!reviewed) {
      const affectedValues = [
        {name: "pa-req", value: ""},
        {name: "pa-dos", value: ""},
        {name: "pa-diagnosis", value: ""},
        {name: "pa-provider", value: ""},
        {name: "pa-match", value: "no"},
      ]
      if(this.state.values.serviceType === "drug") {
        affectedValues.push({name: "drugReview", value: true})
      }
      affectedValues.forEach(value => {
        this.handleInputs(value);
      })
    } else {
      this.handleInputs({name: "drugReview", value: false})
    }
  }
  handlePendInput = (value) => {
    const newValues = this.state.values;
    newValues.pend = value;
    this.setState({values: newValues});
    if(value) {value.forEach(value => {savePends(value, this.state.values.lob)})}
  }
  handleInfo = (policies) => {
      const info = policies.length !== 0 ? this.getInfo(policies) : ""
      this.handleInputs({name: "info", value: info});
  }
  getInfo = (policies) => {
    return policies.reduce((acc, policy) => {
      if(policy.info !== "") {
        acc.push(policy.info);
      }
      return acc;
      },[]).join("\n\n"); 
  }
  handleInputs = (value) => {
    const newValues = this.state.values;
    newValues[value.name] = value.value;
    this.setState({newValues,});
    const returnObj = utils.handleInputsSwitch(
      this.handleInputs, 
      this.handleServiceSelect, 
      this.handleStorage, 
      this.handleInfo,
      value, 
      this.state.values);
    const changedValues = Object.keys(returnObj).map(key => {
      return {name: key, value: returnObj[key], mark: "handle"}
    });
    changedValues.forEach(value => {
      this.handleInputs(value);
    })
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

  setIndex = (i) => {
    this.setState({value: i});
  }
  handleLinkClick = () => {
    this.setState({linked: !this.state.linked,})
  }
  handleServiceDisabled = (disabled) => {
    this.setState({serviceDisabled: disabled});
  }
  componentDidMount() {
    savePoliciesToStorage("bcbsmnPolicies", medPolicies);
    savePoliciesToStorage("fepPolicies", fepPolicies);
  }
  render() {
    const { classes } = this.props;
    const options = {};
    options.claimTypeOptions = this.state.values.lob === "GP" ? ["platinum blue", "med supp", "MAPD"] : ["local", "home"];
    options.claimSystemOptions = this.state.values.special === "host" ? ["live", "adjustment"] : ["OCWA", "INSINQ"];
    const pendOptions = this.state.values.lob === "FEP" ? [...fepPends, ...pends] : pends;
    const pendSuggestions = suggestions(setPendOrder(pendOptions, this.state.values.lob));
    const reviewProps = {
      values: this.state.values, 
      reviewed: this.state.reviewed,
      handleInputs: this.handleInputs, 
      handlePendInput: this.handlePendInput,
      handleReviewed: this.handleReviewed,
      handleServiceDisabled: this.handleServiceDisabled,
      onLinkClick: this.handleLinkClick,
      linked: this.state.linked,
      serviceDisabled: this.state.serviceDisabled,
      pendSuggestions,
      classes,
      options,
    }
    const noteType = () => {
      switch(this.state.value) {
        case 1:
          return <InfoRequest 
            {...reviewProps}
          />;
        case 2:
          return <BackFromPeer 
            {...reviewProps}
          />;
        case 3:
          return <Misroute 
            {...reviewProps}/>;
        default:
          return <General 
            {...reviewProps}
          />;
      } 
    }
    return (
      <Container component="main" maxWidth="md" className={classes.root}>
        <CssBaseline />
        <ScrollUpButton />        
        <div className={classes.paper}>
          <Title />         
          <Tabs value={this.state.value} setIndex={this.setIndex} />
          <form className={classes.form} noValidate>
            <Grid container>
              {noteType()}
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(ReviewNotes)