import React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/noteStyles';
import CapWordButtons from '../CapWordButtons';

const useStyles = makeStyles(() => (styles));

export default function Note(props) {
  const classes = useStyles();
  const {capWordButtons, title, children} = props; 
  return (
    <Card>
      <CardHeader 
        action={<CapWordButtons values={{show: capWordButtons}} />}
        title={title} 
        titleTypographyProps={{component: "h3", variant: "h6"}}
        />
      <CardContent classes={{root: classes.root}}>
          <div ref={function(e){if(e != null) e.contentEditable=true;}} className={classes.notes}>
          {children}
          </div>
      </CardContent>
    </Card>
  );
}
