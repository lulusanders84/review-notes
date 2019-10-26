import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as claimCountutils from '../../utils/ClaimCount';
import { updateClaimLog } from '../../actions';
import { connect } from 'react-redux';
import { handleInputs } from '../../actions';

const { formatClaim } = claimCountutils;
const useStyles = makeStyles({
  button: {
    alignSelf: "center"
  }
})
function AddClaimButton(props) {
  const classes = useStyles();
  const {values} = props;
  const [label, setLabel] = React.useState("Add Claim to Log");
  const handleClick = () => {
    const newClaim = formatClaim(values);
    props.dispatch(updateClaimLog(newClaim));
    setLabel("Added");
    props.dispatch(handleInputs({name: "req", value: ""}))
    setTimeout(function(){ setLabel("Add Claim to Log"); }, 2000)
  }
  const disabled = props.values.req === "" ? true : false;
  return (
    <Button 
      className = {classes.button}
      onClick={e => {handleClick()}}
      disabled={disabled}
    >
      {label}
    </Button>
  )
}


export default connect()(AddClaimButton)