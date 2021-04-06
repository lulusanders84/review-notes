import React from 'react';
import TextInput from './TextInput';
import { Grid } from '@material-ui/core';
import ReactSelectSingle from './ReactSelectSingle';
import { withConditionTest, setComposed } from '../../HOCs';
import { createSelectValue, saveToStorage, getStorage } from '../../utils';

export const Dose = (props) => {
  const storedOptions = getStorage("doseUnit");
  if(storedOptions === null) {
    saveToStorage("doseUnit", [createSelectValue("mg", "lower")])
  }

  return (
    <Grid container row style={{marginTop: "10px"}}>
      <Grid item xs={6}>
        <TextInput id="dose" placeholder="" label="Dose:" />
      </Grid>
      <Grid item xs={6} style={{paddingLeft: "5px"}}>
        <ReactSelectSingle 
          id="doseUnit" 
          placeholder="" 
          label="Unit:" 
          keepFormat
          suggestions={getStorage("doseUnit", [])} />
      </Grid>
    </Grid>  
  )
}
const mapStateToProps = (state) => ({
  id: "doseInput",
  values: state.values,
});

export default setComposed(mapStateToProps, withConditionTest, Dose)