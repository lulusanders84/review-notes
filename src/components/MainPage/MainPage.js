

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import PoliciesIcon from '@material-ui/icons/LibraryBooks';
import { Container, Typography, Grid } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '../Tabs';
import General from './General';
import Misroute from './Misroute';
import BackFromPeer from './BackFromPeer';
import InfoRequest from './InfoRequest';


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
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  formPaper: {
    maxWidth: "460px",
    marginTop: theme.spacing(4),
  },
  tabs: {
    marginTop: "-15px"
  },
  form: {
    padding: "10px",
    width: '100%', // Fix IE 11 issue.
    maxWidth: "460px",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  notes: {
    marginTop: theme.spacing(2)
  }
});

function MainPage(props) {
  const [value, setValue] = React.useState(0);
  const setIndex = (i) => {
    setValue(i);
  }

  const { classes } = props;
  const noteType = () => {
    switch(value) {
      case 1:
        return <InfoRequest />;
      case 2:
        return <BackFromPeer />;
      case 3:
        return <Misroute />;
      default:
        return <General />;
    } 
  }
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PoliciesIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Review Notes
        </Typography>
        <Tabs value={value} setIndex={setIndex} />
        <form className={classes.form} noValidate>
          <Grid container>
            {noteType()}
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withStyles(styles)(MainPage)