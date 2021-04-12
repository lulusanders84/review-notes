import React from 'react';
import { Grid } from '@material-ui/core';
import InputsContainer from '../InputsContainer';

export const SideBySideInputs = ({components, gridSizes, styles}) => {
  return (
    <Grid container row style={{marginTop: "10px", justifyContent: "space-between"}}>
      {components.map((component, i) => (
        <Grid 
          item 
          xs={gridSizes[i]} 
          style={styles[i]}
        >
          <InputsContainer template={[component]} />
        </Grid>
      ))}
    </Grid>  
  )
}

export default SideBySideInputs