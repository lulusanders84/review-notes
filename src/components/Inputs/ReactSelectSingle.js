import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import EditSelectOption from './EditSelectOption';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { createSelectValue, saveToStorage } from '../../utils';
import { formatSuggestions } from '../../utils/AutoComplete';
import { handleInputs } from '../../redux/actions';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
  },
  valueContainer: {
    maxWidth: 460,
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

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

NoOptionsMessage.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * Props to be passed on to the wrapper.
   */
  innerProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired,
};

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]),
};

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps },
  } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  );
}

Control.propTypes = {
  /**
   * Children to render.
   */
  children: PropTypes.node,
  /**
   * The mouse down event and the innerRef to pass down to the controller element.
   */
  innerProps: PropTypes.shape({
    onMouseDown: PropTypes.func.isRequired,
  }).isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]).isRequired,
  selectProps: PropTypes.object.isRequired,
};

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

Option.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired,
    onMouseOver: PropTypes.func.isRequired,
    tabIndex: PropTypes.number.isRequired,
  }).isRequired,
  /**
   * Inner ref to DOM Node
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]).isRequired,
  /**
   * Whether the option is focused.
   */
  isFocused: PropTypes.bool.isRequired,
  /**
   * Whether the option is selected.
   */
  isSelected: PropTypes.bool.isRequired,
};

function Placeholder(props) {
  const { selectProps, innerProps = {}, children } = props;
  return (
    <Typography color="textSecondary" className={selectProps.classes.placeholder} {...innerProps}>
      {children}
    </Typography>
  );
}

Placeholder.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

SingleValue.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * Props passed to the wrapping element for the group.
   */
  selectProps: PropTypes.object.isRequired,
};

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

ValueContainer.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
};

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

Menu.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.element.isRequired,
  /**
   * Props to be passed to the menu wrapper.
   */
  innerProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired,
};

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

function IntegrationReactSelect({dispatch, keepFormat, id, label, notClearable, placeholder, sentence, suggestions, values}) {

  const name = values[id];
  const initialValue = {value: name, label: name}
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = React.useState(initialValue);
  const [options, setOptions] = React.useState(formatSuggestions(suggestions, sentence, keepFormat));
  const [edit, setEdit] = React.useState(false);
  const [isClearable, setIsClearable] = React.useState(true);
  
  useEffect(() => {
    setSingle({value: name, label: name})
  }, [name])
  
  useEffect(() => {
    const value = notClearable 
      ? false
      : true;
      setIsClearable(value);
  }, [notClearable])

  function handleEditClick() {
    setEdit(true);
  }
  
  function handleChangeSingle(value) {
    if(value) {
      if(value.__isNew__) {
        const formattedName = formatSuggestions(value.value, sentence, keepFormat)
        console.log(formattedName)
        const newOption = createSelectValue(formattedName, keepFormat)
        console.log(newOption)
        const newOptions = options ? [newOption, ...options] : [newOption];
        setOptions(newOptions)
        saveToStorage(id, newOptions);
      }   
    }
    const newValue = value ? value.value : null;
    dispatch(handleInputs({name: id, value: newValue}))
    setSingle(value);   
  }

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
    <Grid item xs={12}>
      {edit 
        ? <EditSelectOption 
            id={id} 
            values={values} 
            label={label} 
            setEdit={setEdit}
            options={options}
            labelFormat={keepFormat}
            setNewValue={setSingle} />
        : <Grid container justify="space-between" alignItems="flex-end"> 
            <Grid item xs={notClearable ? 12 : 10}>
              <CreatableSelect
                isClearable={isClearable}
                classes={classes}
                styles={selectStyles}
                inputId={`react-select-single-${id}`}
                TextFieldProps={{
                  label: label,
                  InputLabelProps: {
                    htmlFor: 'react-select-single',
                    shrink: true,
                  },
                }}
                placeholder={placeholder}
                options={options}
                components={components}
                value={single}
                onChange={handleChangeSingle}
              />
            </Grid>
            {notClearable
            ? null
            : <Grid item>
              <Button onClick={handleEditClick}>Edit</Button>
            </Grid>}
          </Grid>
      }     
    </Grid>
  );
}

IntegrationReactSelect.propTypes = {
  dispatch: PropTypes.func.isRequired, 
  keepFormat: PropTypes.bool, 
  id: PropTypes.string.isRequired, 
  label: PropTypes.string.isRequired, 
  notClearable: PropTypes.bool, 
  placeholder: PropTypes.string, 
  sentence: PropTypes.bool,
  suggestions: PropTypes.array.isRequired, 
  values: PropTypes.object.isRequired};

IntegrationReactSelect.defaultProps = {
  keepFormat: false,
  notClearable: false,
  placeholder: "",
  sentence: false
};
const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(IntegrationReactSelect)
