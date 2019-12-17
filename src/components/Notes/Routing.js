import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/noteStyles';
import { setQueueAction } from '../../actions/notes';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => (styles));

export function Routing(props) {
  const { values, queue, dispatch } = props;
  const classes = useStyles();
  React.useEffect(() => {
    dispatch(setQueueAction(values));
  }, [dispatch, values])
  return (
    <Card>
    <CardContent classes={{root: classes.root}}>
      <Typography component="h3" variant="h6">Routing</Typography>
      <div contentEditable className={classes.notes}>
        Routing to queue {queue}
        <br />{values.lob === "FEP" ? "Routing to examiner": ""}
      </div>
    </CardContent>
    </Card>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
  queue: state.notes.queue
});

export default connect(mapStateToProps)(Routing)