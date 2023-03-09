import React from "react";
import { Link, Router } from "react-router-dom";
import github2 from "../photos/github-10-256 (1).png";
import linkedIn2 from "../photos/linkedin-3-256 (1).png";
import mail from "../photos/mail-2-256.png";
import phone from "../photos/phone-128.png";

function Footer() {
    return(
        <div class="contact">
                <Link to="mailto:vissersniels@hotmail.nl"><img src={mail} alt="" class="contactIcon" style={{marginTop: "20px"}}/></Link>
                    <p class="contactText">Send me a mail via <Link to="mailto:vissersniels@hotmail.nl" class="white">vissersniels@hotmail.nl</Link></p> 
                    <br />
                    <img src={phone} alt="" class="contactIcon"/>
                    <p class="contactText">Or just call me via (+31) 6 42 97 19 57</p> 
                    <br />
                    <Link to="https://github.com/Luuntus"><img src={github2} alt="" class="contactIcon"/></Link>
                    <p class="contactText">Also check out my Github...</p> 
                    <br />
                    <Link to="https://www.linkedin.com/in/nielsvissers/"><img src={linkedIn2} alt="" class="contactIcon" /></Link>
                    <p class="contactText" style={{marginBottom: "30px"}}>...and while you're at it, my LinkedIn as well :)</p>        
                </div>
    )
}

export default Footer;