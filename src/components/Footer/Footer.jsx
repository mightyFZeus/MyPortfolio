import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {animateScroll as scroll} from 'react-scroll'
import './style.css'
const moveUp =() =>{
    scroll.scrollToTop();
  }
  


function Footer() {
    return (
        <>
        <div>
            
            <ArrowUpwardIcon className='arrowUp' onClick={moveUp} />
        </div>
        </>
    )
}

export default Footer
