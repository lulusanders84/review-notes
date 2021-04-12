import React from 'react';
import MuiChip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize, makeStyles } from '@material-ui/core';
import { chipProps } from '../data/chipProps';
import withTooltip from '../HOCs/withTooltip';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  tooltip: {
    fontSize: "13px"
  }
}));

export default function BaseChip({data, onDelete, id}) {
  console.log(data)
  const {label, title, isTooltipped} = chipProps[id]
  const classes = useStyles();
  const Chip = withTooltip(MuiChip, title(data), classes.tooltip, isTooltipped)
  return (
    <Chip
      tabIndex={-1}
      label={label(data)}
      className={classes.chip}
      onDelete={onDelete}
      deleteIcon={<CancelIcon />}
    />
  );
}
