import React from 'react';
import TextInput from './TextInput';
import Grid from '@material-ui/core/Grid';

export default function (props) {
  return props.visible
    ? <Grid container>
        <Grid item xs="1" />
        <Grid item xs="11">
          <TextInput id="iqYear" placeholder="" label="Year:" onBlur={props.handleInputs} /> 
          <TextInput id="iqLoc" placeholder="" label="LOC:" onBlur={props.handleInputs} />
          <TextInput id="iqSubset" placeholder="" label="Subset:" onBlur={props.handleInputs} />            
        </Grid>
      </Grid>
    : null;
        

}
