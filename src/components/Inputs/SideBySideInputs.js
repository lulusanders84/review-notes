import React from 'react';
import { Grid } from '@material-ui/core';
import InputsContainer from '../InputsContainer';

export const SideBySideInputs = ({components, gridSizes, styles}) => {
  console.log(components, [components[0]])
  return (
    <Grid container row style={{marginTop: "10px"}}>
      <Grid item xs={gridSizes[0]} style={styles[0]}>
        <InputsContainer template={[components[0]]} />
      </Grid>
      <Grid item xs={gridSizes[1]} style={{paddingLeft: "5px", ...styles[1]}}>
      <InputsContainer template={[components[1]]} />
      </Grid>
    </Grid>  
  )
}

export default SideBySideInputs