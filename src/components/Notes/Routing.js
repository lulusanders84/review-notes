import React, {useEffect} from 'react';
import { setQueueAction } from '../../actions/notes';
import { connect } from 'react-redux';
import NoteContainer from './NoteContainer';

export function Routing(props) {
  const { values, queue, dispatch } = props;
  useEffect(() => {
    dispatch(setQueueAction(values));
  }, [dispatch, values])
  return (
    <NoteContainer title="Routing">
      Routing to queue {queue}
      <br />{values.lob === "FEP" ? "Routing to examiner": ""}
    </NoteContainer>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
  queue: state.notes.queue
});

export default connect(mapStateToProps)(Routing)