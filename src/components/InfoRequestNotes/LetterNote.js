import React from 'react';
import Info from '../Notes/Info';
import FaxAndDate from '../Notes/FaxAndDate';
import Note from '../Notes/Note';
import { setComposed, withVisibility } from '../../HOCs';

export function LetterNote(props) {
  const {...values} = props.values;
  return (
      <Note title="Note for Letter">
        REQ-{values.req}: Additional Info Requested
        <Info visible />
        <FaxAndDate visible />
      </Note>      
  )
}
const mapStateToProps = (state) => ({
  id: "letterNote",
  values: state.values,
});

export default setComposed(mapStateToProps, withVisibility, LetterNote)