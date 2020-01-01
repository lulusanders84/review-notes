import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/noteStyles';


const useStyles = makeStyles(() => (styles));

export function NoteContainer(props) {
  const classes = useStyles();
  return (
    <Card>
    <CardContent classes={{root: classes.root}}>
      <Typography component="h3" variant="h6">{props.title}</Typography>
      <div ref={function(e){if(e != null) e.contentEditable=true;}} className={classes.notes}>
        {props.children}
      </div>
    </CardContent>
    </Card>
  )
}
export default NoteContainer;