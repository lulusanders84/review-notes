import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  notes: {
    padding: 0,
  },
}));

export const ClinicalRationale = (props) => {
    const classes = useStyles();
    return (
        <Card>
        <CardContent className={{root: classes.notes}}>
            <Typography component="h3" variant="h6">Clinical Rationale</Typography>
            <div contentEditable className={classes.notes}>
                {props.values["clinical-rationale"]}
            </div> 
        </CardContent>
        </Card>
      )
}