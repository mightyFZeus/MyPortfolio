import React from 'react'
import {Grid, Card, Typography} from '@material-ui/core'
import useStyles from './Styles'
function About() {
    const classes =useStyles()
    return (
        <>
            <div >
            <Grid container className={classes.about} justify="center" md={12} spacing={2}>
                <Grid item xs={12}  md={6} >
                    <Typography>1+ years of experience</Typography>
                 </Grid>
                <Grid md={6}>
                    <Grid container  justify="space-evenly" md={12} spacing={1}>
             
                        <Grid   item xs={12} lg={2}   md={12} >
                        I'm a Junior frontend web developer living in Ibadan,
                         Nigeria who specializes in web development and open source.
                          I am proficient in HTML and CSS and JavaScript including one of it's framework,REACT, 
                         and have built mutilpe  simple projects with with these tools.
                           Currently serving my country. In my spare time, I love contributing to Open Source Projects
                           ,bulding projects, watching movies and football and I support MANCHESTER UNITED, GGMU!!!
                        </Grid> 
                    </Grid>
            </Grid>
          </Grid>
            </div>
        </>
    )
}

export default About
