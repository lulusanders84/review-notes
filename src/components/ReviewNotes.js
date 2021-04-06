
import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core/';
import { Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Tabs from './Tabs';
import GeneralNotes from './GeneralNotes/GeneralNotes';
import ScrollUpButton from 'react-scroll-up-button';
import { connect } from 'react-redux';
import { styles } from '../styles/reviewNotesStyles';
import InputsContainer from './InputsContainer';
import InfoRequestNotes from './InfoRequestNotes/InfoRequestNotes';
import DecisionNotes from './BackFromPeerNotes';
import MisrouteNotes from './MisrouteNotes/MisrouteNotes';
import { decision, general, infoRequest, misroute } from '../templates/noteTemplates';

function ReviewNotes(props) {

  const [noteTypeValue, setNoteTypeValue] = useState(0);

  const { classes } = props;

  const noteTypeSwitch = {
    0: {
        inputs: <InputsContainer template={general} />,
        notes: <GeneralNotes /> 
      },
    1: {
        inputs: <InputsContainer template={infoRequest} />,
        notes: <InfoRequestNotes />
      },
    2: {
      inputs: <InputsContainer template={decision} />,
        notes: <DecisionNotes />
      },
    3: {
        inputs: <InputsContainer template={misroute} />,
        notes: <MisrouteNotes />
      }
    } 
  
  return (
    <div>
      <CssBaseline />
      <ScrollUpButton />        
      <div className={classes.paper}>       
        <Tabs value={noteTypeValue} setIndex={setNoteTypeValue} />
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