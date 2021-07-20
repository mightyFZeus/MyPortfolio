import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  card:{
    backgroundColor:'#f2f2f2',
    
    padding: '.5rem',
    "&:hover":{
      backgroundColor:'#ffffff',
      border: '1px solid #000'
    }
  },
  title:{
    fontWeight:'bold',
    fontSize:'20px',
    marginTop:'0'
  },
  stack:{
    color:"#6c63fe"
  }
}));