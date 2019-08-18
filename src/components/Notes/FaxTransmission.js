import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  notes: {
    padding: 0,
  },
}));

export const FaxTransmission = (props) => {
    const classes = useStyles();
    return (
        <Card>
        <CardContent className={{root: classes.notes}}>
            <Typography component="h3" variant="h6">Fax Transmission</Typography>
            <div contentEditable className={classes.notes}>
                REQ-{props.values.req}: Fax not required for claim denials. Letter generated.
            </div> 
        </CardContent>
        </Card>
      )
}