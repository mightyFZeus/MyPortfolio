import React from 'react'
import './Styles.css'
import {Link} from 'react-scroll'
import {AppBar, Toolbar, Grid,   } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';
import profile from './profile (1).png'

const Header =() =>{
  return(
    <>
        <div>
          <AppBar className='appbar' position="static">
            <Toolbar>
              <ul >
                <li>
                  <Link smooth={true} duration={1000} to='projects'>Projects</Link>
                </li>
                <li>
                  <Link smooth={true} duration={1000} to='skills'>Skills</Link>
                </li>
                <li>
                  <Link smooth={true} duration={1000} to='about'>About</Link>
                </li>
                <li>
                  <Link smooth={true} duration={1000} to='contact'>Contact</Link>
                </li>
                
                <button>switch</button>
              </ul>
                  
            </Toolbar>
          </AppBar>

        </div>
        <div className='header-div'>
          <Grid container  spacing={3} className='headerGrid'>
            <Grid item  xs={12} md={8}>
                <h1 >Bolarin olabisi,</h1>
                <h1 className='description'>
                  Junior FrontEnd Web Developer, <br /> Software Developer
                </h1>
                
                <button className='contact-button'>
                  CONTACT ME <MailIcon />
                </button>
            </Grid>
            <Grid item  xs={12} md={4}>
                <div className='profile'>
                  <img  src={profile}></img>
                </div>
            </Grid>
          </Grid>
        

        </div>
    </>
  )
}

export default Header