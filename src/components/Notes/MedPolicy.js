import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/noteStyles';
import { fullNamesAction } from '../../actions/notes';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => (styles));

export function MedPolicy(props) {
  const { fullnames, dispatch, values } = props;
  const classes = useStyles();
  React.useEffect(() => {
    dispatch(fullNamesAction(values))
  }, [dispatch, values] )
  return (
    <Card>
    <CardContent classes={{root: classes.root}}>
      <Typography component="h3" variant="h6">Medical Policy</Typography>
      <ul contentEditable className={classes.list}>
        {fullnames}
      </ul>
    </CardContent>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
  fullnames: state.notes.fullnames,
});

export default connect(mapStateToProps)(MedPolicy)