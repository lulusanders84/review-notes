import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/noteStyles';
import { fullNamesAction } from '../../actions/notes';
import { connect } from 'react-redux';
import NoteContainer from './NoteContainer';

const useStyles = makeStyles(() => (styles));

export function MedPolicy(props) {
  const { fullnames, dispatch, values } = props;
  const classes = useStyles();
  React.useEffect(() => {
    dispatch(fullNamesAction(values))
  }, [dispatch, values] )
  if(values.policy.length !== 0) {
    return (
      <NoteContainer title="Medical Policy">
        <ul className={classes.list}>
          {fullnames}
        </ul>
      </NoteContainer>
    )    
  } else return null;
}

const mapStateToProps = (state) => ({
  values: state.values,
  fullnames: state.notes.fullnames,
});

export default connect(mapStateToProps)(MedPolicy)