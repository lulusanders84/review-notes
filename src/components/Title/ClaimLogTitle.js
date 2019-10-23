import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ClaimsIcon from '@material-ui/icons/List';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}))
export default function ClaimLogTitle() {
  const classes = useStyles();
  return (
    <div
      className={classes.title}
    >
      <Avatar className={classes.avatar}>
        <ClaimsIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Claims Log
      </Typography>
    </div>
  )
}