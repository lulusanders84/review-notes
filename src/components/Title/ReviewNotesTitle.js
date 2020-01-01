import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PoliciesIcon from '@material-ui/icons/LibraryBooks';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    margin: 15
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}))
export default function ReviewNotesTitle(props) {
  const classes = useStyles();
  return (
    <div
      className={classes.title}
    >
      <Avatar className={classes.avatar}>
        <PoliciesIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Review Notes
      </Typography>
    </div>
  )
}