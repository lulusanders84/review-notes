
import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '../Tabs';
import General from './NoteTemplates/General';
import Misroute from './NoteTemplates/Misroute';
import BackFromPeer from './NoteTemplates/BackFromPeer';
import InfoRequest from './NoteTemplates/InfoRequest';
import ScrollUpButton from 'react-scroll-up-button';
import { connect } from 'react-redux';
import { handleInputs as handleInputsAction } from '../../redux/actions';
import { styles } from '../../styles/reviewNotesStyles';

function ReviewNotes(props) {

  const [noteTypeValue, setNoteTypeValue] = useState(0);

  const handleInputs = (value) => {
    props.dispatch(handleInputsAction(value))
  }
  const { classes, values } = props;
  const reviewProps = {
    values,
    handleInputs, 
    classes,
  }
  const noteTypeSwitch = {
    0: <General {...reviewProps} />,
    1: <InfoRequest {...reviewProps} />,
    2: <BackFromPeer {...reviewProps} />,
    3: <Misroute {...reviewProps} />
    } 
  
  return (
    <div>
      <CssBaseline />
      <ScrollUpButton />        
      <div className={classes.paper}>       
        <Tabs value={noteTypeValue} setIndex={setNoteTypeValue} handleInputs={handleInputs} />
        <form className={classes.form} noValidate>
          <Grid container alignContent="center" justify="center">
            {noteTypeSwitch[noteTypeValue]}
          </Grid>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  values: state.values,
  options: state.suggestions.options
});

export default connect(mapStateToProps)(withStyles(styles)(ReviewNotes))