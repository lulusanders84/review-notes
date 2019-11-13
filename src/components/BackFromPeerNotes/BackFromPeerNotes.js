import React from 'react';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import styles from '../../styles/noteStyles';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => (styles));

export const Notes = (props) => {
  const classes = useStyles();
  return (
    <div>
      <ClaimNote />    
      {props.values.deter === "deny" 
      ? <Card>
          <CardContent className={{root: classes.root}}>
            <Typography component="h3" variant="h6">Fax Transmission</Typography>
            <div contentEditable className={classes.notes}>
                REQ-{props.values.req}: Fax not required for claim denials. Letter generated.
            </div> 
          </CardContent>
        </Card>
      : null }
      <Routing />        
    </div> 
  )  
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(Notes)
