import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Typography } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { version } from '../../version';

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
    marginTop: theme.spacing(3),
    justifyContent: "flex-start",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  page: {
    width: "425px",
    paddingLeft: 10,
    marginLeft: 30
  },
  title: {
    marginBottom: theme.spacing(3)
  }

})

function MainPageContainer(props) {
  const { classes } = props;
    return (
      <Container id="main container" component="main" classes={{root: classes.page}}>
        <CssBaseline />     
        {React.cloneElement(props.component, classes)}
        <Typography component="i" variant="overline" style={{paddingBottom: "15px"}}>
          version: {version}
        </Typography>           
      </Container>
    );
  }

export default withStyles(styles)(MainPageContainer)