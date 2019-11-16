import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Montserrat"'
    ],
    h2: {
      fontSize: 48
    }
  }
})

export const useStyles = makeStyles({
  button: {
    display: "flex",
    flexDirection: "column",
  },
  count: {
    position: "relative",
    // right: 27,
    // top: 15
  },
  goal: {
    position: "relative",

  }
})