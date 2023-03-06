import React from "react";
import Navbar from "./components/navbar.jsx";
import github from "./photos/github-10-256.png";
import linkedIn from "./photos/linkedin-3-256.png";
import {Link} from "react-router-dom";
import me from "./photos/Niels portret.jpg";

function Home() {
    return (
        <>
            <Navbar />
            <div class="bodyContent">
                <div class="socials">
                    <Link to="https://github.com/Luuntus">
                    <img src={github} alt="" class="socialIcon"/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/nielsvissers/">
                    <img src={linkedIn} alt="" class="socialIcon topMarginSocialIcon"/>
                    </Link>
                </div>
                <div class="leftCenterText">
                    <h1 class="title noBottomMargin">Hey, I'm Niels</h1>
                    <h1 class="blue title noTopMargin noBottomMargin">Frontend Developer</h1>
                    <p class="bigParagraph">I have been into frontend developing since 2019 and been improving ever since! Currently making the life of horticulturists easier at Yookr B.V. </p>
                    <input type="button" value="Look at my work!" action="#projects"/>
                </div>
                <div class="underIntro">
                    <hr class="leftLine"/> <h2 class="or">OR</h2> <hr class="rightLine"/>
                </div>
                <div class="scrollPrompt">
                    <div class="vertLine"></div>
                    <p class="scroll">Scroll...</p>
                </div>
                <div class="rightPhoto">
                    <img src={me} alt="" class="me"/>
                </div>
                <div class="scrollPrompt2">
                    <div class="vertLine"></div>
                    <p class="scroll">...and see the magic</p>
                </div>
                <div class="coverImage personalProject">
                    <div class="project">
                        <div class="projectDesc">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;