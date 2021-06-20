import React from 'react';

// ICONS
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {
  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", margin: "60px"}}>
      <p>
        HI! Good to see you here. <br></br>
        If you wanna get in touch, you´ll find me on one of these methods :) <br></br>
        P.S. I dont answer hidden numbers, so you better not have one hehe
      </p>
      <div style={{marginLeft: "auto", marginRight: "auto"}}>
        <div style={{marginTop: "80px", display: "flex", flexDirection: "row",}}>
          <PhoneAndroidIcon fontSize="large" />
          <p style={{marginLeft: "30px"}}>+46 730724585</p>
        </div>
        <div style={{marginTop: "80px", display: "flex", flexDirection: "row",}}>
          <MailIcon fontSize="large" />
          <p style={{marginLeft: "30px"}}>Claesphiliplofgren@hotmail.com</p>
        </div>
        <div style={{marginTop: "80px", display: "flex", flexDirection: "row", }}>
          <LinkedInIcon fontSize="large" />
          <a href="https://www.linkedin.com/in/philip-l%C3%B6fgren-4b61aa1a7/" target="_blank" rel="noreferrer" noopener style={{marginLeft: "30px", color: "black"}}><p>LinkedIn: Philip Löfgren</p></a>
        </div>
        <div style={{marginTop: "80px", display: "flex", flexDirection: "row",}}>
          <GitHubIcon fontSize="large" />
          <a href="https://github.com/ClaesPhilip" target="_blank" rel="noreferrer" noopener style={{marginLeft: "30px", color: "black"}}><p>Github: Philip Löfgren</p></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
