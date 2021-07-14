import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
   appbar:{
       backgroundColor:'#f2f2f2',
      
   },

   
   menu: {
    marginLeft: "auto",
    
  },
  list:{
    marginBottom:'1rem',
    marginLeft:'1rem'
  },
  
  divide:{
    color:'black'
  }
}));