import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { referReasons } from '../../data/referReasons';

const styles = {
  list: {
    listStyle: "none"
  }
}

const MedDirectorNote = (props) => {
  const { classes } = props;
  const reasons = referReasons.map((option, index) => {
    const selected = props.selected === option ? "X" : "";
    return <li key={index}> {selected} {option} </li>
  })
   return (
    <div>
        <br />Primary Reason for Referral: (place X before the appropriate reason)
        <ul className={classes.list}>
          {reasons}
        </ul>       
        From date: {props.values.dos} To date: {props.values.dos}
        <br />NOTE: Medical Director Only: Please refer to the following section of plan document: What Is Not Covered or General Exclusions. 
    </div>
   )
}

export default withStyles(styles)(MedDirectorNote);
