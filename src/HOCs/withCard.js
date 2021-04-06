import Card from '@material-ui/core/Card';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../styles/cardStyles'

const useStyles = makeStyles(theme => (styles(theme)));

export default function withCard(WrappedComponent, onCard) {
  function WithCard(props) {
    const classes = useStyles();
    return onCard 
      ? <Card className={classes.card}>
         <WrappedComponent {...props} />
      </Card>
      : <WrappedComponent {...props} />
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  WithCard.displayName = `withCard(${wrappedComponentName})`;
  
  return WithCard;
}