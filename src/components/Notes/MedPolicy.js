import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/noteStyles';
import { withVisibility, setComposed } from '../../HOCs';
import NoteContainer from './NoteContainer';
import Note from './Note';
import withNoteDataDispatch from '../../HOCs/withNoteDataDispatch/withNoteDataDispatch';

const useStyles = makeStyles(() => (styles));

export function MedPolicy(props) {
  const { fullnames } = props;
  const classes = useStyles();
  return (
    <NoteContainer visible={props.visible}>
      <Note title="Medical Policy">
        <ul className={classes.list}>
          {fullnames}
        </ul>
      </Note>        
    </NoteContainer>
  )    
}

const mapStateToProps = (state) => ({
  values: state.values,
  fullnames: state.notes.fullnames,
  id: "medPol"
});

const composed = setComposed(mapStateToProps, [withVisibility, withNoteDataDispatch], MedPolicy);
export default composed;