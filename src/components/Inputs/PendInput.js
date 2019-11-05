import React from 'react';
import ReactSelect from './ReactSelect';
import { connect } from 'react-redux';
import { setNewOptions } from '../../actions';

const PendInput = (props) => {
  const { lob } = props.values;
  const { dispatch } = props;
  React.useEffect(() => {
    dispatch(setNewOptions(lob))
  }, [dispatch, lob])
  
  return (
    <ReactSelect id="pend" suggestions={props.options} label="Suspension" updateValue={props.updateValue} />
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
  options: state.suggestions.options
});

export default connect(mapStateToProps)(PendInput)
