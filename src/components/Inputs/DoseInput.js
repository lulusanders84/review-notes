import React from 'react';
import TextInput from './TextInput';
import { Grid } from '@material-ui/core';
import ReactSelectSingle from './ReactSelectSingle';
import { connect } from 'react-redux';

export const DoseInput = (props) => {
  return (
    <Grid container row style={{marginTop: "10px"}}>
      <Grid item xs={8}>
        <TextInput id="dose" placeholder="" label="Dose:" onBlur={props.handleInputs} />
      </Grid>
      <Grid item xs={4} style={{paddingLeft: "5px"}}>
        <ReactSelectSingle 
          id="doseUnit" 
          placeholder="" 
          label="Unit:" 
          updateValue={props.handleInputs}
          suggestions={JSON.parse(window.localStorage.getItem("doseUnit"))} />
      </Grid>
    </Grid>  
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(DoseInput)