import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/noteStyles';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => (styles));

export const FaxTransmission = (props) => {
    const classes = useStyles();
    console.log(props);
    return (
        <Card>
        <CardContent className={{root: classes.root}}>
            <Typography component="h3" variant="h6">Fax Transmission</Typography>
            <div contentEditable className={classes.notes}>
                REQ-{props.values.req}: Fax not required for claim denials. Letter generated.
            </div> 
        </CardContent>
        </Card>
      )
}

const mapStateToProps = (state) => ({
    values: state.values,
  });
  
export default connect(mapStateToProps)(FaxTransmission)
