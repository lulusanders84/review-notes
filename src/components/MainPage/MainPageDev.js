import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import Title from '../Title/Title';
import ReviewNotes from '../ReviewNotes/ReviewNotes';
import ClaimLog from '../ClaimLog/ClaimLog';
import AddClaimButton from '../ClaimCount/AddClaimButton';


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
  const [tabValue, setTabValue] = React.useState(0);
    return (
      <Container component="main">
        <CssBaseline />     
        <div className={classes.leftFrame}>
          <Title setTabValue={setTabValue} tabValue={tabValue} />
          <div className={classes.paper && classes.page}>
            {tabValue === 0
            ? <ReviewNotes />
            : tabValue === 1
              ? <ClaimLog />
              : null
            }
          </div>
          <AddClaimButton />
           
        </div>
      </Container>
    );
  }

export default withStyles(styles)(MainPage)