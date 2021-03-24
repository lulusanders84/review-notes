import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Typography } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { version } from '../../version';
import { getStorage } from '../../utils';

const styles = theme => ({
  '@global': {
    body: {
      height: "100%",
      backgroundColor: theme.palette.common.white,
    },
    html: { 
      height: "100%", 
      overflow: "auto" 
    }
  },
  leftFrame: {
    paddingLeft: 10,
  },
  paper: {
    marginTop: theme.spacing(0),
    justifyContent: "flex-start",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "425px"
  },
  page: {
    width: "425px",
    paddingLeft: 10,
    marginLeft: 30
  },
  title: {
    marginBottom: theme.spacing(3)
  },
  version: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "24px", 
    paddingBottom: "15px",

  }


})

function MainPageContainer(props) {
  const { classes } = props;
    return (
      <Container id="main container" component="main" classes={{root: classes.page}}>
        <CssBaseline />     
        {React.cloneElement(props.component, classes)}
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
      </Container>
    );
  }

export default withStyles(styles)(MainPageContainer)