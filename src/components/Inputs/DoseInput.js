import React from 'react';
import TextInput from './TextInput';
import { Grid } from '@material-ui/core';
import ReactSelectSingle from './ReactSelectSingle';
import { connect } from 'react-redux';
import { createSelectValue, saveToStorage } from '../../utils';

export const DoseInput = (props) => {
  const storedOptions = JSON.parse(window.localStorage.getItem("doseUnit"))
  if(storedOptions === null) {
    saveToStorage("doseUnit", [createSelectValue("mg", "lower")])
  }
  return (
    <Grid container row style={{marginTop: "10px"}}>
      <Grid item xs={6}>
        <TextInput id="dose" placeholder="" label="Dose:" updateValue={props.handleInputs} />
      </Grid>
      <Grid item xs={6} style={{paddingLeft: "5px"}}>
        <ReactSelectSingle 
          id="doseUnit" 
          placeholder="" 
          label="Unit:" 
          labelFormat="lower"
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