import React from 'react';
import TextInput from './TextInput';
import Grid from '@material-ui/core/Grid';

export default function (props) {
  return props.visible
    ? <Grid container>
        <Grid item xs={1} />
        <Grid item xs={11}>
          <TextInput id="iqYear" placeholder="" label="Year:" /> 
          <TextInput id="iqLoc" placeholder="" label="LOC:" />
          <TextInput id="iqSubset" placeholder="" label="Subset:" />            
        </Grid>
      </Grid>
    : null;
        

}
