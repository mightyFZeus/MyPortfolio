import React from 'react'
import useStyles from './Styles'
import './styles.css'
import {Grid, Card,  Typography} from '@material-ui/core'
import css from '../../assets/images/css-3.png'
import js from '../../assets/images/javascript-2.svg'
import reactimg from '../../assets/images/reactimg.png'
import bootstrap from '../../assets/images/bootstrap.png'
import mui from '../../assets/images/material.png'
import html from '../../assets/images/html5-2.svg'
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/Dashboard';
import uuid from 'react-uuid'

const skills = [
  {
    id: uuid(),
    title: "Search Engine Optimization",
    description: " I employ best SEO practices like ''Semantic HTMl'' and more on websites and projects I work  on to improve the site visibility and rankings on Google.",
    image: <SearchIcon />
  },
  {
    id: uuid(),
    title: "Responsive Design",
    description:'I am passionate about responsiveness and making the websites I build look good on different devices, browsers and cross platforms using both "mobile first" approach and desktop "media queries"',
    image: <PhoneIphoneIcon />
  },
  {
    id: uuid(),
    title: "Reusable & Minimal code",
    description: " I try my best to write as minimal code as possible by using tools like CSS Variables and writing custom utility classes.",
    image: <CodeIcon /> 
  },
  {
    id: uuid(),
    title: "Great UI/UX & Accessibility",
    description: "Making the web accessible to all users, by following the UI/UX design principles, which I picked up from solving various frontendmentor challenges.",
    image: <DashboardIcon  />
  },
]

const Skills =() =>{
  const classes = useStyles()
  return(
    <>
    <CssBaseline />
      <div className={classes.toolbar}></div>
      <div className={classes.toolbar}></div>
      
      <div id='skills'>
        
        <Grid container justify="center" md={12} lg={6} spacing={2}>
          <Grid item xs={12}  className={classes.benefitsGrid}  md={6} >
              <div className='test'>
                <p className='benefits'>BENEFITS</p>
              <p className='hire'>Why should you hire me?</p> 
              <span className='hire-desc'>
               When buidling  projects,
               I strongly adhere to these principles
               which make my websites both unique and scaleable.
              </span>
              </div>
              
              
          </Grid>
          <Grid item lg={6} md={6}>
            <Grid container  justify="space-evenly" md={12} spacing={1}>
              {skills.map((skill)=>(
                <Grid key={skill.id} 
                 className={classes.card} 
                  component={Card} item
                   xs={12} lg={6}   md={5}
                  //  style={{paddingRight:'10px'}}
                  //  style={{paddingLeft:'10px'}}  
                  //  style={{paddingTop:'10px'}} 
                  //  style={{paddingBottom:'10px'}} 
                   >
                     <p className="logo-skill">{skill.image}</p>
                <p className='skill-heading'>{skill.title}</p>
                <p className="skill-desc">{skill.description}</p>
                </Grid>
              ))}
              
            </Grid>

          </Grid>
          <Grid>
                  <div className='skills-logo'>
                    <img className='logo' alt='html' src={html}></img>
                    <img className='logo' alt='css' src={css}></img>
                    <img className='logo' alt='javascript' src={js}></img>
                    <img className='logo' alt='html' src={reactimg}></img>
                    <img className='logo'  alt='Material-UI'src={mui}></img>
                    <img className='logo' alt='bootstrap' src={bootstrap}></img>
                  </div>
          </Grid>
          

        </Grid>
      </div>
    </>
  )
}


export default Skills
