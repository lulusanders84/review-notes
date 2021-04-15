import React from 'react';
import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { getStorage } from '../utils';
import { styles } from '../styles/versionStyles'
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => styles)

function Sources() {
  const classes = useStyles()
  const { version } = useSelector(state => state.reducer)
    return (
      <div style={{marginTop: "24px", marginBottom: "24px"}}>
        <Typography variant="overline" >
          Sources
        </Typography>
        <Typography variant="body2" align="left">
          Commercial Policy & Coding Management Tool ({getStorage("commercialPolicyVersion", "")})
        </Typography> 
        <Typography variant="body2" align="left">
          {getStorage("fepPolicyVersion", "")} FEP Medical Coding Resource Tool
        </Typography>    
        <Typography component="i" variant="overline" align="right" classes={{root: classes.version}}>
          version: {version}
        </Typography>                
      </div>
    );
  }

export default Sources