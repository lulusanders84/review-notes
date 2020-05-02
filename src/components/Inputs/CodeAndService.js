import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextInput from './BaseInputs/TextInput';
import LinkButton from './BaseInputs/LinkButton';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

const height = 60;
const width = 440;
const linkWidth = 60;
const linkLineWidth = (100 - ((linkWidth / 2) / width * 100));
const radius = "15px";
const useStyles = makeStyles(() => ({
  card: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  inputs: {flex: 1},
  linkLine: {
    border: "2px solid",
    width: linkLineWidth.toString() + "%",
    height: height.toString() + "px",
    position: "relative",
    bottom: (height + height/2 + 5).toString() + "px",
    zIndex: -20,
  },
  linkLineCover: {
    backgroundColor: "white",
    borderColor: "red",
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
    height: (height).toString() + "px",
    position: "relative",
    bottom: (height*2 + height/2 + 5).toString() + "px",
    zIndex: -10,
  },
  container: {
    height: "129.6px"
  }
}));
function CodeAndService(props) {
  const { linked, serviceDisabled } = props.values;
  const classes = useStyles();
  const linkColor = linked ? "primary" : "default";
  const linkLineColor = linked ? "#2196F3" : "#757575"
  const linkLineCoverWidth = linked ? (linkLineWidth - 1).toString() + "%" : linkLineWidth.toString() + "%";
  const tooltipTitle = linked ? "Linked: Click to unlink code and service" : "Unlinked: Click to link service to code";
  const helperText = linked ? "Unlink to edit service" : " ";
  const linkDisabled = props.values.code === null || props.values.code === "" ? true : false;

  return (
    <div className={classes.container}>
      <Grid container row="true" className={classes.card}>       
          <div className={classes.inputs}>
            <TextInput id="code" placeholder="" label="Suspended Codes" />
            <TextInput 
              id="service" 
              placeholder="" 
              label="Service" 
              disabled={serviceDisabled} 
              helperText={helperText} />            
          </div>
          <LinkButton 
            tooltipTitle={tooltipTitle} 
            linkColor={linkColor} 
            linkDisabled={linkDisabled} 
            id="linked"
          />       
      </Grid>
      <div className={classes.linkLine} style={{borderColor: linkLineColor}} />
      <div className={classes.linkLineCover} style={{width: linkLineCoverWidth}} />
    </div>
    
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(CodeAndService)