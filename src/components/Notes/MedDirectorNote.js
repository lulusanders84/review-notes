import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/noteStyles';
import { referReasonsAction } from '../../redux/actions/notes';
import { withVisibility, setComposed } from '../../HOCs';

const useStyles = makeStyles(() => (styles));

const MedDirectorNote = (props) => {
  const { dispatch, values } = props;
  const classes = useStyles();
  React.useEffect(() => {
    dispatch(referReasonsAction(values))
  }, [dispatch, values]);
  const { referReasons } = props.notes;
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

const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes,
  id: "medDir"
});

const composed = setComposed(mapStateToProps, withVisibility, MedDirectorNote);
export default composed;
