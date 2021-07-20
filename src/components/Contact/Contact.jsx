import React from "react";
import emailjs from "emailjs-com";
import { Box, TextField, Grid, Button, Typography } from "@material-ui/core";
import useStyles from "./Styles";
import './styles.css'
import contact from '../../assets/images/contact.svg'
const Contact = () => {
  const classes = useStyles();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i2z4avg",
        "template_4w3e5at",
        e.target,

        "user_nhjK17UH5oB3QFMRU2saR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
        <div className={classes.toolbar}></div>
        <div className='contact'>
          <p className='heading'>CONTACT</p>
          <p className='get'>
              Get in Touch
          </p>
          <div className='subtitle-div'>
            <p className='subtitle'>
            Want to connect with me or collaborate on projects together,
            You can send me a message and I'll reply as soon as I can.. Thank You.
            
            </p>
            
          </div>
        
        </div>
        <Grid container className={classes.about} justify="center" md={12} spacing={2}>
                <Grid item xs={12}  md={6} >
                   <img className='contact-img'  src={contact}></img>
                 </Grid>
                <Grid md={6}>
                    <Grid container  justify="space-evenly" md={12} spacing={1}>
             
                        <Grid   item xs={12} lg={2}   md={12} >
                            <Box className={classes.box}>
                                <div className={classes.toolbar} />

                                <div className={classes.formDiv}>
                                <form className="contact-form" onSubmit={sendEmail}>
                                    <TextField
                                    className={classes.fieldText}
                                    label="Your Name"
                                    variant="outlined"
                                    name="name"
                                    />
                                    <br />
                                    <TextField
                                    className={classes.fieldText}
                                    label="Your Email"
                                    type="email"
                                    variant="outlined"
                                    name="email"
                                    />
                                    <br />
                                    <TextField
                                    className={classes.fieldText}
                                    label="Your Message"
                                    variant="outlined"
                                    multiline
                                    rowsMax={4}
                                    name="message"
                                    />
                                    <Button type="submit" className={classes.button}>
                                    Send
                                    </Button>
                                </form>
                                </div>
                            </Box>
                        </Grid> 
                    </Grid>
            </Grid>
          </Grid>
      
    </>
  );
};

export default Contact