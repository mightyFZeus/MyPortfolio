import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card:{
    backgroundColor:'#f2f2f2',
    "&:hover":{
      backgroundColor:'#ffffff',
      border: '1px solid #000'
    }
  }
}));