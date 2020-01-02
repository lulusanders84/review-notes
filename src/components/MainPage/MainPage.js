import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import ReviewNotes from '../ReviewNotes/ReviewNotes';
import ReviewNotesTitle from '../Title/ReviewNotesTitle';
import References from '../References/References';


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
  },
  title: {
    marginBottom: theme.spacing(3)
  }

})

function MainPage(props) {
  const { classes } = props;
    return (
      <Container component="main">
        <CssBaseline />     
        <div className={classes.leftFrame}>
          <References />
          <ReviewNotesTitle />
            <ReviewNotes />    
        </div>
      </Container>
    );
  }

export default withStyles(styles)(MainPage)