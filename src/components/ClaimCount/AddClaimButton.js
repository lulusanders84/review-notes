import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as claimCountutils from '../../utils/ClaimCount';
import { updateClaimLog } from '../../actions';
import { connect } from 'react-redux';

const { formatClaim } = claimCountutils;
const useStyles = makeStyles({
  button: {
    alignSelf: "center"
  }
})
function AddClaimButton(props) {
  const classes = useStyles();
  const {values} = props;
  const handleClick = () => {
    const newClaim = formatClaim(values);
    props.dispatch(updateClaimLog(newClaim));
  }
  const disabled = props.values.req === "" ? true : false;
  return (
    <Button 
      className = {classes.button}
      onClick={e => {handleClick()}}
      disabled={disabled}
    >
      Add Claim to Log
    </Button>
  )
}

export default connect()(AddClaimButton)