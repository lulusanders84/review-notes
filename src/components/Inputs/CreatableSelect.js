import React, { Component } from 'react';
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import CreatableSelect from 'react-select/creatable';

const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      minWidth: 290,
    },
    dense: {
        marginTop: 14
    },
    input: {
      display: 'flex',
      padding: 0,
      height: 'auto',
    },
    valueContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden',
    },
    chip: {
      margin: theme.spacing(0.5, 0.25),
    },
    chipFocused: {
      backgroundColor: emphasize(
        theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
        0.08,
      ),
    },
    noOptionsMessage: {
      padding: theme.spacing(1, 2),
    },
    singleValue: {
      fontSize: 16,
    },
    placeholder: {
      position: 'absolute',
      left: 2,
      bottom: 6,
      fontSize: 16,
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0,
    },
    divider: {
      height: theme.spacing(2),
    },
  }));

export default function(props) {
  const handleChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    console.groupEnd();
  };
  const handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed');
    console.groupEnd();
  };
const classes = useStyles();
const theme = useTheme();
const selectStyles = {
    input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
        font: 'inherit',
        },
    }),
    };
return (
    <CreatableSelect
    classes={classes}
    styles={selectStyles}
    inputId="react-select-single"
    TextFieldProps={{
    label: props.label,
    InputLabelProps: {
        htmlFor: 'react-select-single',
        shrink: true,
    },
    margin: "dense"
    }}
    placeholder="Select..."
    isClearable
    onChange={handleChange}
    onInputChange={handleInputChange}
    options={colourOptions}
    />
);

}