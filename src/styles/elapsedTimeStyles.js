export const styles = {
  root: {
    justifyContent: "center",
    width: "100px",
    height: "auto",
    paddingTop: "8px",
    paddingBottom: "8px"

  },
  content: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: '0',
    padding: "0px",
    "&:last-child": {
      paddingBottom: "0px"
    }
  },
  min: {
    minWidth: "25px"
  },
  sec: {
    minWidth: "40px"
  }
}