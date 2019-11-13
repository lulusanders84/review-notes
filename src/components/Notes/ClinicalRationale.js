import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/noteStyles';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => (styles));

export const ClinicalRationale = (props) => {
    const classes = useStyles();
    return (
        <Card>
        <CardContent className={{root: classes.root}}>
            <Typography component="h3" variant="h6">Clinical Rationale</Typography>
            <div contentEditable className={classes.notes}>
                {props.values["clinical-rationale"]}
            </div> 
        </CardContent>
        </Card>
      )
}

const mapStateToProps = (state) => ({
    values: state.values,
  });
  
  export default connect(mapStateToProps)(ClinicalRationale)