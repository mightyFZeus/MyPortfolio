import React, {useState, useEffect} from 'react'
import './Styles.css'

import {Link} from 'react-scroll'
import {AppBar, List, ListItem, Drawer, Toolbar, Grid, IconButton, } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from '@material-ui/icons/Mail';
import profile from '../../assets/images/profile (1).png'
import useStyles from './Styles'
import logo from '../../assets/images/bold.png'
import demo from '../../assets/images/demo.svg'

const Header =() =>{
  const classes = useStyles()
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => setDrawer(open);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return(
    <>
        <div>{isDesktop ? <div>
          <AppBar className={classes.appbar} position="fixed">
            <Toolbar>
              <div className='header-logo'>
              <img src={logo}></img>
              </div>
              <ul >
                <li>
                  <Link smooth={true} duration={1000} to='projects'>Projects</Link>
                </li>
                <li>
                  <Link smooth={true} duration={1000} to='skills'>Skills</Link>
                </li>
                <li>
                  <Link smooth={true} duration={1000} to='about' >About</Link>
                </li>
                <li>
                  <Link smooth={true} duration={1000} to='contact'>Contact</Link>
                </li>
                
                <li>
               
                </li>
              </ul>
                  
            </Toolbar>
          </AppBar>

        </div> : 
         <AppBar className={classes.appbar} >
         <Toolbar>
         <img src={logo}></img>
          <div className={classes.menu}>
          <IconButton  onClick={toggleDrawer(true)}>
             <MenuIcon />
           </IconButton>
         <Drawer
             
             anchor={"right"}
             open={drawer}
             onClose={toggleDrawer(false)}
           >
               
             <List   >
             <Link smooth={true} duration={1000} to='projects'>
               <ListItem className={classes.list}>
                 PROJECTS
               </ListItem>
             </Link>
               <hr />
               <Link smooth={true} duration={1000} to='skills'>
               <ListItem className={classes.list}>
                 SKILLS
               </ListItem>
             </Link>
              <hr/>
              <Link smooth={true} duration={1000} to='about'>
               <ListItem className={classes.list}>
                 ABOUT
               </ListItem>
             </Link>
              <hr/>
              <Link smooth={true} duration={1000} to='contact'>
               <ListItem className={classes.list}>
                 CONTACT
               </ListItem>
             </Link>
             </List>
           </Drawer>
          </div>
         </Toolbar>
         
       </AppBar>
          }
        </div>
        <div className={classes.toolbar}></div>
        <div className='header-div'>
          <Grid container  spacing={3} className='headerGrid'>
         
            <Grid item  xs={12} md={8}>
                <h1 className='header-name' >Bolarin Olabisi</h1>
                <h2 className='header-desc' >Junior FrontEnd Web Developer.</h2>
                <h2 className='header-desc2'>Software Developer</h2>
                
                <a href='mailto:bolarinolabisi36@gmail.com'>
                <button className='contact-button'>
                 <span>CONTACT ME <MailIcon /></span> 
                </button>
                </a>
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
