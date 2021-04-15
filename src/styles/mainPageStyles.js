export const styles = theme => ({
  '@global': {
    body: {
      height: "100%",
      backgroundColor: theme.palette.common.white,
    },
    html: { 
      height: "100%", 
      overflow: "auto" 
    }
  },
  leftFrame: {
    paddingLeft: 10,
  },
  paper: {
    marginTop: theme.spacing(0),
    justifyContent: "flex-start",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "425px"
  },
  page: {
    width: "425px",
    paddingLeft: 10,
    marginLeft: 30
  },
  title: {
    marginBottom: theme.spacing(3)
  },

})