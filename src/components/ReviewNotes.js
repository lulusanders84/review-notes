
import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core/';
import { Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Tabs from './Tabs';
import NoteFrame from './Notes/NoteFrame';
import ScrollUpButton from 'react-scroll-up-button';
import { styles } from '../styles/reviewNotesStyles';
import InputsContainer from './InputsContainer';
import { decision, general, infoRequest, misroute } from '../templates/formTemplates';

function ReviewNotes(props) {

  const [noteTypeValue, setNoteTypeValue] = useState(0);

  const { classes } = props;

  const noteTypeSwitch = {
    0: {
        inputs: <InputsContainer template={general} />,
        notes: <NoteFrame id="general" /> 
      },
    1: {
        inputs: <InputsContainer template={infoRequest} />,
        notes: <NoteFrame id="infoRequest" />
      },
    2: {
      inputs: <InputsContainer template={decision} />,
        notes: <NoteFrame id="decision" />
      },
    3: {
        inputs: <InputsContainer template={misroute} />,
        notes: <NoteFrame id="misroute" />
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

export default withStyles(styles)(ReviewNotes)