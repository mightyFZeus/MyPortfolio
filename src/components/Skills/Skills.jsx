import React from 'react'
import useStyles from './Styles'
import './styles.css'
import {Grid, Card,  Typography} from '@material-ui/core'
import css from '../../assets/images/css-3.png'
import js from '../../assets/images/javascript-2.svg'
import react from '../../assets/images/react.png'
import bootstrap from '../../assets/images/bootstrap.png'
import mui from '../../assets/images/material.png'
import html from '../../assets/images/html5-2.svg'
import uuid from 'react-uuid'

const skills = [
  {
    id: uuid(),
    title: "SEO(Search Engine Optimization)",
    description: " I employ best SEO practices like ''Semantic HTMl'' and more on websites and projects I work  on to improve the site visibility and rankings on Google.",
    
  },
  {
    id: uuid(),
    title: "Responsive Design",
    description:'I am passionate about responsiveness and making the websites I build look good on different devices, browsers and cross platforms using both "mobile first" approach and desktop "media queries"'
    
  },
  {
    id: uuid(),
    title: "Reusable & Minimal code",
    description: " I try my best to write as minimal code as possible by using tools like CSS Variables and writing custom utility classes.",
    
  },
  {
    id: uuid(),
    title: "Great UI/UX & Accessibility",
    description: "Making the web accessible to all users, by following the UI/UX design principles, which I picked up from solving various frontendmentor challenges.",
    
  },
]

const Skills =() =>{
  const classes = useStyles()
  return(
    <>
      <div className={classes.toolbar}></div>
      <div className={classes.toolbar}></div>
      
      <div id='skills'>
        
        <Grid container justify="center" md={12} lg={6} spacing={2}>
          <Grid item xs={12}  md={6} >
              <p>BENEFITS,</p> <span>why you should hire me</span> 
              <span>
              When buidling  projects,
               I strongly adhere to these principles
                which make my websites both unique and scaleable.
              </span>
              
              
          </Grid>
          <Grid item lg={6} md={6}>
            <Grid container  justify="space-evenly" md={12} spacing={1}>
              {skills.map((skill)=>(
                <Grid key={skill.id} 
                 className={classes.card} 
                  component={Card} item
                   xs={12} lg={6}   md={5}
                   style={{paddingRight:'10px'}}
                   style={{paddingLeft:'10px'}}  
                   style={{paddingTop:'10px'}} 
                   style={{paddingBottom:'10px'}} 
                   >
                <p className='skill-heading'>{skill.title}</p>
                {skill.description}
                </Grid>
              ))}
              
            </Grid>

          </Grid>
          <Grid>
                  <div className='skills-logo'>
                    <img className='logo' src={html}></img>
                    <img className='logo' src={css}></img>
                    <img className='logo' src={js}></img>
                    <img className='logo' src={react}></img>
                    <img className='logo' src={mui}></img>
                    <img className='logo' src={bootstrap}></img>
                  </div>
          </Grid>
          

        </Grid>
      </div>
    </>
  )
}


export default Skills