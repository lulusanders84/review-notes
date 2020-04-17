
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '../Tabs';
import General from './NoteTemplates/General';
import Misroute from './NoteTemplates/Misroute';
import BackFromPeer from './NoteTemplates/BackFromPeer';
import InfoRequest from './NoteTemplates/InfoRequest';
import ScrollUpButton from 'react-scroll-up-button';
import { connect } from 'react-redux';
import { handleInputs } from '../../actions';
import { savePoliciesToStorage } from '../../data/medPolicies';
import { fepPolicies } from '../../data/fepPolicies';
import { medPolicies } from '../../data/medPolicies';
import { formatPolicy } from '../../data/scrapePolicies';

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
    width: "425px",
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
      drugReview: true,
      disableAllMet: false,
      linked: false,
      typeValue: {name: "Injectable Drug", label: "Injectable Drug"}
    }
  }
  handleInputs = (value) => {
    this.props.dispatch(handleInputs(value))
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
      if(this.props.values.serviceType === "drug") {
        affectedValues.push({name: "drugReview", value: true})
      }
      affectedValues.forEach(value => {
        this.handleInputs(value);
      })
    } else {
      this.handleInputs({name: "drugReview", value: false})
    }
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
    // savePoliciesToStorage("fepPolicies", fepPolicies.map(policy => { return formatPolicy(policy)}));
  }
  render() {
    const { classes } = this.props;
    const options = {};
    options.claimTypeOptions = ["local", "home"];
    options.planOptions = ["platinum blue", "med supp", "MAPD"];
    options.claimSystemOptions = this.props.values.special === "host" ? ["live", "adjustment"] : ["OCWA", "INSINQ"];
    const reviewProps = {
      showType: this.props.showType,
      values: this.props.values,
      reviewed: this.state.reviewed,
      handleInputs: this.handleInputs, 
      handleReviewed: this.handleReviewed,
      handleServiceDisabled: this.handleServiceDisabled,
      onLinkClick: this.handleLinkClick,
      linked: this.state.linked,
      serviceDisabled: this.state.serviceDisabled,
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
      <div>
        <CssBaseline />
        <ScrollUpButton />        
        <div className={classes.paper}>       
          <Tabs value={this.state.value} setIndex={this.setIndex} handleInputs={this.handleInputs} />
          <form className={classes.form} noValidate>
            <Grid container alignContent="center" justify="center">
              {noteType()}
            </Grid>
            
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  values: state.values,
  options: state.suggestions.options
});

export default connect(mapStateToProps)(withStyles(styles)(ReviewNotes))