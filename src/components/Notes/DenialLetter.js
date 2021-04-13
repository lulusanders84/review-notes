import { Divider } from '@material-ui/core';
import React from 'react';
import { setComposed, withVisibility } from '../../HOCs';

export function DenialLetter(props) {
  return (
    <div>
      <br />
      <Divider />
      <br />
      What is Not Covered or General Exclusions
    </div>
  )
}
const mapStateToProps = (state) => ({
    values: state.values,
    id: "denialLetter"
  });
  
  export default setComposed(mapStateToProps, withVisibility, DenialLetter)