import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Info from '../Notes/Info';
import { setInfoRequestData } from '../../actions/notes';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: 75,
  },
  dense: {
    marginTop: 14,
  },
  menu: {
    width: 200,
  },
  notes: {
    padding: 0,
  }
}));
export function InfoRequest(props) {
  const {values,  dispatch, notes} = props;
  const { policyString, code, pend, route, related, } = notes;
  const classes = useStyles();
  React.useEffect(() => {
    dispatch(setInfoRequestData(values))
  }, [dispatch, values])
  return (
    <Card>
    <CardContent>
      <Typography component="h3" variant="h6">Info Request Note</Typography>
      <div contentEditable className={classes.notes}>
        REQ-{values.req}: Additional Info Requested
        <br />Suspended codes: {code}
        <br />Suspension: {pend}
        <br />Medical Policy/Criteria: {policyString}
        <br />PA research: No PA found, no history of info requests in UM
        <br />Related UM requests: {related}
        <br />Route: {route}
        <Info tag="tag" />
      </div>
    </CardContent>
    </Card>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes
});

export default connect(mapStateToProps)(InfoRequest)