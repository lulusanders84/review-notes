import React from 'react';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { Grid, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  checkButton: {
    color: "#4caf50"
  },
  divider: {
    height: theme.spacing(2),
  }
}))
function EditSelectOption(props) {
  const classes = useStyles();
  const [saved, setSaved] = React.useState(false);
  const [value] = React.useState(props.values[props.id])
  const checkClass = saved ? classes.checkButton : null;
  const checkColor = saved ? "primary" : "default";
  const handleSave = () => {
    setSaved(true);
    props.setEdit(false);
    const options = props.options;
    const optionIndex = options.findIndex(option => {
      return option.value === value;
    })
    const newValue = props.values[props.id];
    options[optionIndex] = {value: newValue, label: newValue};
    window.localStorage.setItem(props.id, JSON.stringify(options));
    props.setNewValue(options[optionIndex])
  }
  const handleChange = (event) => {
    event.persist();
    const value = {name: props.id, value: event.target.value};
    props.updateValue(value);
    setSaved(false);
  }
    return (
      <Grid container row xs={12} alignItems="flex-end">
        <Grid item xs={9}>
          <TextField
            multiline={props.multiline}
            rows={props.rows}
            type={props.type}
            id={props.id}
            label={props.label}
            placeholder={props.placeholder}
            fullWidth={true}
            margin="dense"
            value={props.values[props.id]}
            InputLabelProps={{shrink: props.shrink}}
            onChange={handleChange}
        />
        </Grid>
        <Grid container xs={3} justify="flex-end">
          <IconButton color={checkColor} classes={{colorPrimary: checkClass}} onClick={handleSave}>
            <CheckIcon />
          </IconButton>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Grid>    
      </Grid>
    )
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(EditSelectOption)