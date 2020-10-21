import React from 'react';
import TextInput from './TextInput';
import SimpleSelect from './SimpleSelect';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    padding: theme.spacing(2),
  },
  code: {
    width: "90%"
  },
  mod: {
    width: "10%"
  }
}));
export default function (props) {
  const classes = useStyles();
  return (
    <Grid container alignItems="flex-end">
      <Grid item xs={9}>
        <TextInput id="code" label="Suspended Code:" index={props.index} />
      </Grid>
      <Grid item xs={3}>
        <SimpleSelect id="modifier" label="Modifier:" options={["00", "62", "22", "80"]} />
      </Grid>    
    </Grid>
  )
}