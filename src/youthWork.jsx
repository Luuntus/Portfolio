import React, {useEffect} from "react";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";
import Footer from "./components/footer";
import RG from "./documents/Reading Guide Group Project.pdf";
import PP from "./documents/Project Plan - Group Project.pdf";
import AOS from 'aos';
import IR from './documents/Youth Work in Germany.pdf';
import ER from './documents/Education of social workers.pdf';
import NR from './documents/What are the most used social platforms for youth internationally and in the Netherlands_.pdf';

import 'aos/dist/aos.css'; 

function YouthWork() {

    AOS.init();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <React.StrictMode>
        <Navbar />
        <div class="bodyContent">
        <div class="coverImage groupProject noTranslate" id="projects">
                    <div class="project">
                        <div class="projectTitleDesc">
                            <h1 class="white">In a group, I've researched and made a way for youth workers to get online and connect with youth.</h1>
                        </div>
                        <div class="projectDesc">
                            <h2 class="projectTitle">Online Youth Work</h2>
                            <em class="subtitle">Group Project</em>
                            <br />
                            <div class="tag leftTag">Research</div>
                            <div class="tag">Design</div>
                            <div class="tag">Programming</div>
                            <br />
                            <a href={RG}>
                            <input type="button" value="Reading Guide" class="viewBtn" style={{display: "inline-block"}}/>
                            </a>
                            <a href={PP} style={{display: "inline-block", marginLeft: "20px"}}>
                            <input type="button" value="Project Plan" class="viewBtn" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="explanation">
                <div data-aos="fade-up">
                <h1 class="researchTitle">Research</h1>
                    <h2 class="researchSubtitle" id="IR">International Research</h2>
                    <em class="researchQuestion">What does other international youth work currently do to reach out to the youth?</em>
                    <br />
                    <div class="tag researchTag leftTag">Literature Study</div>
                    <p class="researchText">For my first research for this project, I researched into youth work in Germany. I struggled quite a bit with 
                    this, because a lot of German sites are very cluttered with information and have a distracting layout. In the end, I asked my project group 
                    what they had done and I referred to their documents. I leaned more towards the German legislation and how German youth work is structured. 
                    This eventually made the document a bit better. I did however find a Discord server for people in Bielefeld, which showed that Germany was 
                    already using some advanced strategies. I also found out that the German Institute for Media Pedagogy is working on a larger project for online 
                    youth work.</p>
                    <p class="researchText">View the whole research document with the button below.</p>
                    <a href={IR}>
                        <input type="button" value="Research Document" class="viewBtn"/>
                    </a>
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle" id="ER">Education of social media</h2>
                    <em class="researchQuestion">How can we educate social workers on the use of online media?</em>
                    <br />
                    <div class="tag researchTag leftTag">Literature Study</div>
                    <div class="tag researchTag">Co-Creation</div>
                    <div class="tag researchTag">Co-Reflection</div>
                    <p class="researchText">This research went way better than the previous one. Since I studied ICT & Education in Semester 4, I 
                    already knew a couple of theories that could be used for educating youth workers on social media. I picked out the most effective 
                    theories and looked at how I could apply these to an eventual product. I also asked, during both the interview at Dynamo with Dirk-Jan and 
                    the one at Pitstop with Matheus, what the problems were with teaching social media. Dirk-Jan said that they made a physical manual, that 
                    wasn't effective and Matheus said he had trouble explaining everything he did online and all the risks he took online to get in touch with 
                    (troubled) youth. <br /> <br />
                    I also asked both of them if they had a vision for the final product. Dirk-Jan wanted something digital and Matheus wanted something fun and 
                    engaging, so that motivation wouldn't be a problem. This is where co-creation became a part of the research. And since we already had a very rough 
                    idea of a possible product, I also asked both of them what they thought of our rough idea. The idea was some educational platform/website, that has 
                    DuoLingo as main inspiration. Both Dirk-Jan and Matheus were excited about this and Matheus even called it perfect. Due to this co-reflection, I 
                    knew that education-wise, this idea was perfect.</p>
                    <p class="researchText">View the whole research document with the button below.</p>
                    <a href={ER}>
                        <input type="button" value="Research Document" class="viewBtn"/>
                    </a>
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle" id="NR">Social media in the Netherlands</h2>
                    <em class="researchQuestion">What are the most used social platforms for youth internationally and in the Netherlands?</em>
                    <br />
                    <div class="tag researchTag leftTag">Literature Study</div>
                    <div class="tag researchTag">Online Analytics</div>
                    <div class="tag researchTag">Trend Analysis</div>
                    <p class="researchText">Due to a groupmate not doing the work assigned to them, I had to in promptu take some work over. Time restraints 
                    were pushing, but this was very important research. I looked into a couple of research reports about what social media networks are mostly used 
                    in the Netherlands. Unfortunately, I could not find the hard numbers that were needed to get a good conclusion from this research. But in the 
                    interviews and during a meeting with Fenna Dam, stakeholder of the project, it was said that the most important platforms are TikTok, Instagram and 
                    Snapchat. Discord also brought a big opportunity for building an online community. From this information I could confidentely say that these 
                    aforementioned platforms were the right ones to focus on.</p>
                    <p class="researchText">View the whole research document with the button below.</p>
                    <a href={NR}>
                        <input type="button" value="Research Document" class="viewBtn"/>
                    </a>
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle" id="Interviews">Interviews and Meetings</h2>
                    <em class="researchQuestion">Who are the social workers and what are their main tasks in their job?/How can we educate social workers on the use of online media?</em>
                    <br />
                    <div class="tag researchTag leftTag">Expert Interview</div>
                    <div class="tag researchTag">Co-Creation</div>
                    <div class="tag researchTag">Co-Reflection</div>
                    <p class="researchText">During the research phase, I conducted two interviews together with my project group. One with Dirk-Jan van Soelen (innovations manager) at 
                    Dynamo and one with Matheus Sales de Moura (Team leader) at Pitstop. For the interview at Pitstop, I contacted Matheus via a telephone call and eventually via WhatsApp, after we got his contact information from Fenna Dam (research at Garage2020 
                    and our product owner). We had prepared questions in advance as a group effort, but I 
                    still came up with a couple of questions during the interviews themselves. For example at Pitstop, I saw a big poster of the 'Touch of God' painting 
                    by Michaelangelo, so I asked how religion was handeled at Pitstop, which gave some more information about the working of Pitstop. These interviews really 
                    gave me an idea of the current state of youth work, but also what the future should look like, in the eyes of Dirk-Jan and Matheus.</p>
                    <p class="researchText">Once every two weeks we had a meeting with Fenna to discuss the progress of the project. After the first four weeks, which were planned out for research, 
                    I was one of the three people of our group to present the research to Fenna. It was important to me that Fenna, as product owner, was regularly informed about 
                    the project, to make sure that Fenna and us were on the same line. This made sure that no double work was done and that the direction the project was going in was regularly tested.</p>
                    
                    </div>
                    <br /><br />
                </div>
                </div>
                </React.StrictMode>
    )
}

export default YouthWork;