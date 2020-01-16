import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextInput from './TextInput';
import ReactSelectSingle from './ReactSelectSingle';
import { referReasons } from '../../data/referReasons'; 
import { connect } from 'react-redux';
import { suggestions } from '../../utils/AutoComplete';
import { Editor } from '@tinymce/tinymce-react';

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
  }
}));
export function CriteriaInputs(props) {
  const classes = useStyles();
  const handleEditorChange = (e) => {
    props.handleInputs({name: "criteriaMet", value: e})
  }
  return (
    <div className={classes.card}>
        <Editor id="criteriaMet" init={{height: 200, menubar: false, toolbar: ""}} placeholder="" label="Criteria Met" onEditorChange={handleEditorChange}  />
        <TextInput id="criteriaNotMet" multiline={true} rows="5" placeholder="" label="Criteria Not Met" onBlur={props.handleInputs}  />
        <ReactSelectSingle id="referReason" suggestions={suggestions(referReasons)} label="Reason for Referral" updateValue={props.handleInputs}  /> 
    </div>
  )
}

const mapStateToProps = (state) => ({
  options: state.suggestions.options,
  values: state.values
});

export default connect(mapStateToProps)(CriteriaInputs)