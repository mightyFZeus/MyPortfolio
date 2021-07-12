import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
    card:{
        backgroundColor:'#f2f2f2',
        marginBottom:'1em',
        paddingRight:' 10px',
        paddingleft:' 10px',
        "&:hover":{
          backgroundColor:'#ffffff',
          border: '1px solid #000',
         
          
        }
      },
      benefitsGrid:{
        alignSelf:'center',
        
      
      }
}));