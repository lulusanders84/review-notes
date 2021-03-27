import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';


import { AddClaim } from '../classes'

const useStyles = makeStyles({
  button: {
    alignSelf: "center"
  }
})
function AddClaimButton(props) {
  const {values, dispatch} = props;
  const {handleClick, disabled} = new AddClaim(values);
  const classes = useStyles();
  const [label, setLabel] = React.useState("Add Claim to Log");
  
  
  return (
    <Button 
      className = {classes.button}
      onClick={e => {handleClick(e, dispatch, setLabel)}}
      disabled={disabled}
    >
      {label}
    </Button>
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
});
export default connect(mapStateToProps)(AddClaimButton)