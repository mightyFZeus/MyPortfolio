import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {animateScroll as scroll} from 'react-scroll'
import TwitterIcon from '@material-ui/icons/Twitter';
 import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './style.css'
const moveUp =() =>{
    scroll.scrollToTop();
  }
  


function Footer() {
    
    
    return (
        <>
        <div>
            
            <ArrowUpwardIcon className='arrowUp' onClick={moveUp} />
            <div className='footer-logo'>
                <a target="_blank" href='https://www.twitter.com/mightyzeus9'>
                    <TwitterIcon className='footer-logo-color' />
                </a>
                <a  >
                   < TelegramIcon  className='footer-logo-color'/>
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/bolarin-olabisi-78011a167'>
                    <LinkedInIcon  className='footer-logo-color'/>
                </a>
                
            </div>
            <div className='copyright'>
            <p style={{fontWeight:'bold'}}>Copyright &copy; Bolarin olabisi 2021, All rights reserved</p>
            </div>
            
        </div>
        </>
    )
}

export default Footer
