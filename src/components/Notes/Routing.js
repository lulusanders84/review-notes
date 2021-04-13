import React, {useEffect} from 'react';
import { setQueueAction } from '../../redux/actions/notes';
import { withVisibility, setComposed } from '../../HOCs';
import Note from './Note'

export function Routing(props) {
  const { values, queue, dispatch } = props;
  useEffect(() => {
    dispatch(setQueueAction(values));
  }, [dispatch, values]);

  return (
    <Note title="Routing">
      Routing to queue {queue}
      <br />{values.lob === "FEP" ? "Routing to examiner": ""}
    </Note>
    )  
}
const mapStateToProps = (state) => ({
  values: state.values,
  queue: state.notes.queue,
  id: "routing"
});

export default setComposed(mapStateToProps, withVisibility, Routing)