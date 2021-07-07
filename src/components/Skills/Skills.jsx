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
    title: "SEO(Search Engine Optimization)",
    description: " I employ best SEO practices like ''Semantic HTMl'' and more on websites and projects I work  on to improve the site visibility and rankings on Google.",
    
  },
  {
    id: uuid(),
    title: "SEO(Search Engine Optimization)",
    description: " I employ best SEO practices like ''Semantic HTMl'' and more on websites and projects I work  on to improve the site visibility and rankings on Google.",
    
  },
  {
    id: uuid(),
    title: "SEO(Search Engine Optimization)",
    description: " I employ best SEO practices like ''Semantic HTMl'' and more on websites and projects I work  on to improve the site visibility and rankings on Google.",
    
  },
]

const Skills =() =>{
  const classes = useStyles()
  return(
    <>
      <div id='skills'>
        <h1 className='heading'>WHY YOU SHOULD HIRE ME</h1>
        <Grid container justify="center" md={12} spacing={2}>
          <Grid item xs={12}  md={6} >
              <Typography>BENEFITS, why you should hire me</Typography>
          </Grid>
          <Grid md={6}>
            <Grid container  justify="space-evenly" md={12} spacing={1}>
              {skills.map((skill)=>(
                <Grid key={skill.id}  className={classes.card}  component={Card} item xs={12} lg={2}   md={5} >
                {skill.title}
                {skill.description}
                </Grid>
              ))}
              
            </Grid>

          </Grid>
          <Grid>
                  <table>
                    <tr>
                    <td>
                        <img className='logo' src={html}></img>
                      </td>
                      <td>
                        <img className='logo' src={css}></img>
                      </td>
                      <td>
                        <img className='logo' src={js}></img>
                      </td>
                      <td>
                        <img className='logo' src={react}></img>
                      </td>
                      <td>
                        <img className='logo' src={bootstrap}></img>
                      </td>
                      <td>
                        <img className='logo' src={mui}></img>
                      </td>
                    </tr>
                  </table>
          </Grid>
          

        </Grid>
      </div>
    </>
  )
}


export default Skills