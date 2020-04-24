import React, {useEffect} from 'react';
import { setQueueAction } from '../../redux/actions/notes';
import { withVisibility, setComposed } from '../../HOCs';
import NoteContainer from './NoteContainer';
import Note from './Note'

export function Routing(props) {
  const { values, queue, dispatch, visible } = props;
  useEffect(() => {
    dispatch(setQueueAction(values));
  }, [dispatch, values]);

  return (
    <NoteContainer visible={visible}>
      <Note title="Routing">
        Routing to queue {queue}
        <br />{values.lob === "FEP" ? "Routing to examiner": ""}
      </Note>
    </NoteContainer>
    )  
}
const mapStateToProps = (state) => ({
  values: state.values,
  queue: state.notes.queue,
  id: "routing"
});

export default setComposed(mapStateToProps, withVisibility, Routing)