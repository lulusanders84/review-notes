import React from 'react';
import TextInput from './TextInput';
import Grid from '@material-ui/core/Grid';

export default function (props) {
  return props.visible
    ? <Grid container>
        <Grid item xs="1" />
        <Grid item xs="11">
          <TextInput id="iqYear" placeholder="" label="Year:" updateValue={props.handleInputs} /> 
          <TextInput id="iqLoc" placeholder="" label="LOC:" updateValue={props.handleInputs} />
          <TextInput id="iqSubset" placeholder="" label="Subset:" updateValue={props.handleInputs} />            
        </Grid>
      </Grid>
    : null;
        

}
