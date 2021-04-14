import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/noteStyles';
import { referReasonsAction } from '../../redux/actions/notes';
import { withVisibility } from '../../HOCs';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(() => (styles));

const MedDirectorNote = () => {
  const values = useSelector(state => state.values);
  const notes = useSelector(state => state.notes);
  const { referReasons } = notes;
  const dispatch = useDispatch();
  const classes = useStyles();

  React.useEffect(() => {
    dispatch(referReasonsAction(values))
  }, [dispatch, values]);
  
  return (
    <div>
      <br />
      <br />Primary Reason for Referral: (place X before the appropriate reason)
      <ul className={classes.list}>
        {referReasons}
      </ul>       
      From date: {values.dos} To date: {values.dos}
      <br />NOTE: Medical Director Only: Please refer to the following section of plan document: What Is Not Covered or General Exclusions. 
    </div>
   )
}

export default withVisibility(MedDirectorNote);
