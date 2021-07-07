import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  box: {
    backgroundColor: "##101016",
    height: "100vh"
  },
  formDiv: {
     position: "relative",
     left: "20%",
    // top: "50%",
     //transform: "translate(-50%, -50%)",

    padding: "0px",
    width: "70%",
    height: "50%"
  },
  fieldText: {
    width: "100%",
    marginBottom: "2rem",
    backgroundColor: "#ffffff",
    "& label.Mui-focused": {
      color: "#0e68f0"
    },
    "& label": {
      color: "black"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "0e68f0"
      },
      "&:hover fieldset": {
        borderColor: "0e68f0"
      },
      "&.Mui-focused fieldset": {
        borderColor: "0e68f0"
      }
    }
  },

  button: {
    backgroundColor: "#0e68f0",
    textTransform: "none",
    color: "black",
    width: "100%"
  }
}));