import React from 'react'
import {Grid, Card, CardContent, Typography} from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useStyles from "./Styles";
import './styles.css'
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Lato',
      'sans-serif',
    ].join(','),
  },});


const Projects =({resume}) =>{
  const classes = useStyles()
  return(
    <>
    
    <div className={classes.toolbar}></div>
      <ThemeProvider theme={theme}>
      <div id='projects'>
        <Typography className='project-heading'>PROJECTS</Typography>
        <Grid container justify="center" spacing={2}>
            {resume.map((resume) => (
              <Grid  item key={resume.id} xs={12} sm={12} md={4} lg={4}>
                <Card className={classes.card} >
                  <CardContent key={resume.id}>
                    <Typography className={classes.title} v >
                      {resume.title}
                    </Typography>
                    
                    <Typography  >
                      {resume.description}
                    </Typography>
                    <Typography className={classes.stack}  >
                      {resume.stack}
                    </Typography>
                  
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
      </div>
        </ThemeProvider>
    </>
  )
}

export default Projects
