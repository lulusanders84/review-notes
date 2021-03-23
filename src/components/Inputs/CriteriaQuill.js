import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { handleInputChange } from '../../utils/Inputs';

export function CriteriaQuill(props) {
  // const handleChange = (value) => {
  //   const newValue = { name: props.id, value, };
  //   props.dispatch(handleInputs(newValue));
  // }
  return (
    <div>
      <style dangerouslySetInnerHTML = {{__html: `
      .ql-editor { padding-left: 0; padding-right: 0; min-height: 175px }
    `}} />

      <Typography component="h5" variant="body1">
        {props.label}
      </Typography>
      <ReactQuill style={{borderBottom: "1px solid black"}} value={props.values[props.id] || ''} onChange={e => {handleInputChange(props, e)}} theme="bubble" />
    </div>
    
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(CriteriaQuill)