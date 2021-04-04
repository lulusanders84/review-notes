
import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core/';
import { Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '../Tabs';
import GeneralNotes from '../GeneralNotes/GeneralNotes';
import Misroute from './NoteTemplates/Misroute';
import ScrollUpButton from 'react-scroll-up-button';
import { connect } from 'react-redux';
import { handleInputs as handleInputsAction } from '../../redux/actions';
import { styles } from '../../styles/reviewNotesStyles';
import InputsContainer from '../InputsContainer';
import general from '../../noteTemplates/general';
import InfoRequestNotes from '../InfoRequestNotes/InfoRequestNotes';
import DecisionNotes from '../BackFromPeerNotes';
import MisrouteNotes from '../MisrouteNotes/MisrouteNotes';
import infoRequest from '../../noteTemplates/infoRequest';
import { decision } from '../../noteTemplates/decision';

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
    0: {
        inputs: <InputsContainer noteTemplate={general} />,
        notes: <GeneralNotes /> 
      },
    1: {
        inputs: <InputsContainer noteTemplate={infoRequest} />,
        notes: <InfoRequestNotes />
      },
    2: {
      inputs: <InputsContainer noteTemplate={decision} />,
        notes: <DecisionNotes />
      },
    3: {
        inputs: <Misroute {...reviewProps} />,
        notes: <MisrouteNotes />
      }
    } 
  
  return (
    <div>
      <CssBaseline />
      <ScrollUpButton />        
      <div className={classes.paper}>       
        <Tabs value={noteTypeValue} setIndex={setNoteTypeValue} handleInputs={handleInputs} />
        <form className={classes.form} noValidate>
          <Grid container alignContent="center" justify="center">
            {noteTypeSwitch[noteTypeValue].inputs}
            <Divider variant="fullWidth" />
            <div className={classes.notes}>
              {noteTypeSwitch[noteTypeValue].notes}
            </div>
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