import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  
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
      color: "6c63fe"
    },
    "& label": {
      color: "black"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#6c63fe"
      },
      "&:hover fieldset": {
        borderColor: "#6c63fe"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6c63fe"
      }
    }
  },

  button: {
    backgroundColor: "#6c63fe",
    textTransform: "none",
    color: "black",
    width: "100%"
  }
}));