import React, {useEffect} from "react";
import Navbar from "./components/navbar.jsx";
import github from "./photos/github-10-256.png";
import linkedIn from "./photos/linkedin-3-256.png";
import {Link} from "react-router-dom";
import me from "./photos/Niels portret.jpg";
import me2 from "./photos/niels (2).jpg";
import Footer from "./components/footer.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Project from "./components/project.jsx";
import personalProject from "./photos/personalProject.png";
import groupProject from "./photos/dynamo.png";
import Resume from "./documents/CV Niels Vissers.pdf";

function Home() {

    AOS.init();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

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
                    <a href="#projects" class="anchor">
                        <input type="button" value="Look at my work!"/>
                    </a>
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
                <section id="projects">
                <Project image={personalProject} name="Personal Portfolio" project="Personal Project" research="Research" design="Design" programming="Programming" class="projectComp"/>
                <Project image={groupProject} name="Online Youth Work" project="Group Project" research="Research" design="Design" programming="Programming"/>
                <Project image={personalProject} name="International Week" project="International Project" research="Research" design="Design" programming="Programming"/>
                </section>
                <div data-aos="fade-up">
                <div class="aboutMe">
                    <h1 class="aboutMeTitle" id="aboutMe">About me</h1>
                    <div class="bigCard">
                    <div data-aos="fade-up">
                        <h2 class="compentences">Research - Design - Development - Teaching; The things that I do.</h2>
                        <p class="aboutMeText">I am <b>Niels Vissers.</b>As a <b>media designer</b>, I <b>imagine, design and create </b>what you as a customer want. I work best in <b>small teams </b>
                        and I have a drive to do my work right. My main skills include:</p>
                        <ul class="skills">
                            <li><b>Adobe XD</b></li>
                            <li><b>Concept Thinking</b></li>
                            <li><b>Communication</b></li>
                            <li><b>Design</b></li>
                            <li><b>Frontend Programming (HTML, CSS, JavaScript)</b></li>
                        </ul>
                        <p class="aboutMeText"><b>Enthousiasm</b> is what describes me best. I am <b>proud</b> of my work. Of <em class="emphasis">our</em> work. 
                        We will make great things, <b>together!</b> And this enthousiasm makes for a <b>pleasant working experience and a great final product.</b> 
                        I will <b>iterate and improve</b> to deliver you with a product <b>we can all be proud of.</b></p>
                        <em class="aboutMeQuote">"Trial and Error, until you succeed"</em>
                        <p class="aboutMeText"><b>But most importantly,</b> I am a <b>clear communicator.</b> I want to make sure that <b>each and every way of communication </b> 
                        gives <b>no miscommunication.</b> If you want to know more about me, you can refer to me <b>resume </b>below.</p>
                        <a href={Resume}>
                        <input type="button" value="Resume" class="viewBtn aboutMeBtn"/>
                        </a>
                    </div>
                    </div>
                    <div class="aboutMePicture">
                        <img src={me2} alt="me, again :)" class="me2"/>
                    </div>
                </div>
                </div>
                <div class="footer" id="contact">
                    <Footer />
                </div>
                
            </div>
        </>
    )
}

export default Home;