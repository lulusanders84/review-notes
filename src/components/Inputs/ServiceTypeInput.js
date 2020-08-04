import React from 'react';
import ReactSelectSingle from './ReactSelectSingle';
import { serviceTypes } from '../../data/serviceTypes';
import { connect } from 'react-redux';
import { createSelectValue } from '../../utils';

const ServiceTypeInput = (props) => {
  let suggestions = serviceTypes.map(type => {
    return createSelectValue(type["Service Type"]);
  })
  suggestions = suggestions.sort((a, b) => {
    if (a.label < b.label) {
      return -1;
    }
    if (a.label > b.label) {
      return 1;
    }
    return 0;
  })
  return (
    <ReactSelectSingle notClearable id="serviceType" placeholder="" label="Service Type"  suggestions={suggestions} value={{value:props.values.type, label: props.values.type}} />
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(ServiceTypeInput)