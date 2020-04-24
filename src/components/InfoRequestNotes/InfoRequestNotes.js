import React from 'react';
import {ClaimNote} from '../Notes';
import Routing from '../Notes/Routing';
import InfoRequest from './InfoRequest';
import LetterNote from './LetterNote';
import { handleInputs } from '../../redux/actions';
import { connect } from 'react-redux';

export const InfoRequestNotes = (props) => {
  const { dispatch } = props;
  React.useEffect(() => {
    dispatch(handleInputs({name: "deter", value: "deny"}))
    dispatch(handleInputs({name: "rationale", value: "Information Request"}))
    dispatch(handleInputs({name: "denialType", value: "entire claim"}))
  }, [dispatch])
  
  return (
    <div>
      <InfoRequest /> 
      <ClaimNote info={true} faxAndDate={true} />
      <LetterNote />
      <Routing /> 
    </div>  
  )  
}
const mapStateToProps = (state) => ({
  values: state.values,
});
export default connect(mapStateToProps)(InfoRequestNotes)
