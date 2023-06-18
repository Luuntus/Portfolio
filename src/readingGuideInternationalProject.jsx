import React from "react";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";
import Footer from "./components/footer";
import AOS from 'aos';
import { HashLink } from "react-router-hash-link";

import 'aos/dist/aos.css'; 

function ReadingGuideInternationalProject() {

    AOS.init();

      const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const scrollWithOffset2 = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -160; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const scrollWithOffsetPrepWeek = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -260; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <React.StrictMode>
        <Navbar />
        <div class="bodyContent">
        <div class="coverImage internationalProject noTranslate" id="projects">
                    <div class="project">
                        <div class="projectTitleDesc">
                            <h1 class="white">With students from around Europe, I did an interdiciplinary project to innovate Schoolplein14 by the Cruyff Foundation.</h1>
                        </div>
                        <div class="projectDesc">
                            <h2 class="projectTitle">Cruyff Foundation</h2>
                            <em class="subtitle">International Week</em>
                            <br />
                            <div class="tag leftTag">Research</div>
                            <div class="tag">Design</div>
                            <br />
                            <HashLink to="/internationalWeek#top">
                            <input type="button" value="Group Project Documentation" class="viewBtn" style={{display: "inline-block"}}/>
                            </HashLink>
                        </div>
                    </div>
                </div>
                <div class="explanation">
                <div data-aos="fade-up">
                    <h1 class="researchTitle">Reading Guide</h1>
                    <h2 className="researchSubtitle" style={{cursor:"auto"}}><em style={{color:"black"}}>International Week - Cruyff Foundation</em></h2>
                    <br /><br />
                    <h2 className="researchSubtitle" style={{cursor:"auto"}}>Contents</h2>
                    <p className="researchText">
                    <ul>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-international-project#assignment">
                            <li>The assignment</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-international-project#description">
                            <li>The process and results</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-international-project#projectPlan">
                            <li>Project Plan and reality</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-international-project#explanation">
                            <li>Explanation of Results</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-international-project#reflection">
                            <li>Reflection of the International Week (DIEP-Method (Bond, 2023))</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-international-project#proof">
                            <li>Learning Outcomes</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-international-project#references">
                            <li>References</li>
                        </HashLink>
                    </ul>

                    <br /><br />

                    <h2 className="researchSubtitle" style={{cursor:"auto"}} id="assignment">The assignment</h2>

                    <br /><br />

                    The Johan Curyff Foundation give us an opportunity to improve upon the existing concept of Schoolplein14. There actually was nothing wrong with the current concept, since it has proven itself to be very effective to get children to play outside during and after school time, but there was an opportunity to mix something more technical with sports. <br /><br />
                    Schoolplein14 is based upon 14 coatings. These coating are painted lines on the ground or on a wall, which result in a multifunctional sporting field. Games can be made up by the children themselves, or they use the Schoolplein14 game box, which explain what kind of games/sports you can play with the coatings. Schoolplein14 is already used internationally in for example the UK and Spain. They are often very low cost, since the only things needed are the coating itself and a ball and some goals.<br /><br />
                    Next to this Schoolplein14 initiative, the Cruyff Foundation also makes sporting fields that are open 24/7 for everyone to play in. These are called the Cruyff Courts. There are also Special Cruyff Courts, which are made acessible to people with disabilities, like people who are wheelchairbound. The main goal of the Curyff Foundation is to give everyone a way to do sports and connect with others via these sports.<br /><br />
                    <em class="aboutMeQuote smaller">“Playing outside should be a school subject”</em> <br /><br />
                    This quote from Johan Cruyff (Dutch spelling Johan Cruijff) is the true vision of this foundation. Everyone should be able to play outside and connect with people.<br /><br />
                    This brings us to the opportunity to expand upon the Schoolplein14 coatings. The Cruyff Foundation wants to get more technical with this concept and they asked us, as a group, to make a 15th coating with a technical innovation, to get more with the times and to get even more children to play outside and enjoy connecting to others.<br /><br />
                    The demands were the following:
                    <ul>
                        <li>Design the concept for a 15th Schoolplein14 coating.</li>
                        <li>Use recent technical innovations.</li>
                        <li>Don’t keep to any budget, use your full imagination.</li>
                        <li>Stay true to the values and the mission of the Cruyff Foundation.</li>
                        <li>Make sure the coating itself is still painted lines on the ground, the game can be more technical.</li>
                        <li>The coating has to be multifunctional.</li>
                    </ul>
                  
                    <b>It was up us to research what the children want as a coating, to make a concept for the 15th coating and design this coating.</b>


                    <br /><br />

                    <h2 className="researchSubtitle" style={{cursor:"auto"}} id="description">The process and results</h2>

                    <br /><br />

                    <h2 className="researchSubtitle2" style={{cursor:"auto"}} id="projectPlan">Project Plan and reality</h2>

                    <br /><br />

                    Because the international week stated off quite choatically, we initially didn’t make a project plan and we just started working. We noticied the chaos and we didn’t really had a concrete plan of what we were going to do. We also had no research questions at this time. So, because of all this, we decided to make a project plan on the second day and everything became quite clear when the plan was finished. <br /><br />
                    But before this plan was finished, we did a little brainstorming with post-its, to get some ideas flowing and with these post-its, we did a card sorting. We looked which cards belong to each other and found out that everyone wanted to do something with music. This became our initial goal, to improve a coating with music. <br /><br />
                    Almost everything that we wanted to do, according to the project plan, was actually done. With this plan, we could make a plan for each day of the week and finish what we needed to finish for that day. This way we kept on track with all of our progress.<br /><br />
                    The project plan also specifically said that we should keep true to the demands of the Cruyff Foundation and that we should not limit ourselves in any way, like feasibility or budget. And so we did. We didn’t hold back during the entire process with ideas and we even got to interview some kids and their parents, to see what the kids really wanted. This was also planned within the project plan.<br /><br />
                    The only thing we were not able to finish, but what we did plan to do, was to make a voice-over over our video. Instead, because we had some technical issues (Headphones not working for feedback) in the soundlab and eventually had problems with time restraints, we decided to delve deep into the AI voices and selected the best ones we could find.<br /><br />
                    In general, we kept true to our project plan and did almost everything we wanted to do in our plan. We achieved our (and Cruyff Foundations) initial goals and we didn’t let ourselves get limited by budget or feasibility. We also found out how it is like working without a project plan, which thought me a big lesson.

                    <br /><br />

                    <h2 className="researchSubtitle2" style={{cursor:"auto"}} id="explanation">Explanation of Results</h2>

                    <br /><br />

                    In the end, a video was made of about 5 minutes, explaining the concept and allowing the stakeholders to understand and visualize what we made. Furthermore, we also have done research into what the kids want, in terms of sports and activities to do on a Schoolplein14. We also did other research into the pro’s and cons of all of our ideas, the technologies that could be used in outdoor activities and some deeper research into the wants and needs of the Cruyff Foundation. All of these research documents are valuable to the Cruyff Foundation, because they show what their target audience wants, how feasible some general ideas are and what technologies they can use, if they want to innovate. <br /><br />
                    
                    Next to this, we made an animated video of about 10 seconds that shows what our concept should look like. This make sure that the idea is visualized and that no miscommunication can be had about what the concept will look like. In terms of visualization, we also made some wireframes of some screens the players go through when playing our game. This also gives an impression of how the game should be played. And we made our wearable for our concept visual, so that the Cruyff Foundation also has an idea how the bracelet works.<br /><br />

                    Lastly, be definitely not as least, we delivered our concept document. In this document all the important information about our concept is writting down. How it should look like, what the rules are, how we envision people playing it, etc. This is probably the most important document, since it shows the Cruyff Foundation in what direction they could be going, in the future. This document is a great building block for their future of innovation.


                    <br /><br />

                    <h2 className="researchSubtitle2" style={{cursor:"auto"}} id="reflection">Reflection of the International Week (DIEP-Method (Bond, 2023))</h2>

                    <br /><br />

                    <b>Describe</b><br /><br />
                    During the international week, I had a great time. I worked on a group project with seven other people, from who four people are not from Fontys. It was a really fun experience getting to know new people and getting to see how people from other disciplines see and tackle opportunities and problems. The week was very draining though, because of all the long days and it was a pressure cooker. I did learn a lot during this week, like the importance of a project plan and I learned a whole lot more about field research, the day we went to the Cruyff Court. I saw how a teacher just started a conversation with our direct target audience, out of nowhere. And he got a lot of good insights from this conversation, which he eventually also shared with me and the rest of the group. I really learned a lot from this. <br /><br />
                    <b>Interpret</b><br /><br />
                    The whole International Week was an important experience for me. I found out a lot about workmethods and cultures in other countries and I befriended a lot of people, also people outside my project group. It required me to get out of my comfort zone and not only focus on media design, but also the other disciplines. Next to this, the experience of the teacher just starting a conversation with the youth at the Cruyff Court also inspired me to try the same in the future. It made me feel way more confident that you can just start a conversation out of nowhere and subtly ask the questions you want answers on. I always thought that I needed to completely plan out an ‘interview’ of some sorts, but you can just try to start asking questions. A very new and interesting insight to me.<br /><br />
                    <b>Evaluate</b><br /><br />
                    This learning experience was very valuable to me and my professional development. Seeing how international students tackle certain problems gave me some interesting insights, the most valuable being that the international students never called any idea bad. With the technical knowledge that I have from the ICT-study, I often call off ideas, because I know they will be too hard to fully develop within the time restraints. This is something that the international students do not do, which was an amazing wake-up call to me. And again, it was invaluable to see how an inpromptu interview works. In the future, as a media designer, I will be having interviews and field research much more often, so to see it in practise by an expert was very important to my professional development.<br /><br />
                    <b>Plan</b><br /><br />
                    I will be getting myself out of my comfort zone more often, by trying to do field research without fully planning everything out and inviting people. I’m planning to first do this with experts, like colleagues or extremely extroverted people, and slowly but surely work to gain more confidence in these inpromptu interviews. I will also work on not shooting down ideas immediately, by documenting old ideas and when I notice that I am repressing or countering ideas, remember not to do this. Maybe even explicitly say to myself that I should not respress certain ideas.

                    <br /><br />

                    <h2 className="researchSubtitle" style={{cursor:"auto"}} id="proof">Learning Outcomes</h2>
                    
                    <br /><br />

                    <table>
                        <tr>
                            <th>Learning Outcome</th>
                            <th>Proof</th>
                        </tr>

                        <tr>
                            <td>
                            User interaction (analysis and advice)  
                            </td>
                            <td>
                            By <HashLink to="/internationalWeek#interviews" scroll={el => scrollWithOffset2(el)}>interviewing the youth and the kids on the Cruyff Court and the Schoolplein14</HashLink> respectively and by doing some desk research about <HashLink to="/internationalWeek#interviews" scroll={el => scrollWithOffset2(el)}>the Cruyff Foundation</HashLink> and <HashLink to="/internationalWeek#feasibility" scroll={el => scrollWithOffset2(el)}>the feasibility of our ideas</HashLink>, I did a thorough analysis. <br /><br />

                            Also, in the preperation week, I did <HashLink to="/internationalWeek#prepWeek" scroll={el => scrollWithOffsetPrepWeek(el)}>research into AI and Avatars.</HashLink> When the project was clear, I looked into where we could use these state of the art interactive technologies. <br /><br />

                            As design process, we (as a group) went with the Design Thinking method. This is fully described in the documentation, with the phases. <HashLink to="/internationalWeek#ideation" scroll={el => scrollWithOffset2(el)}>The testing was done during the process as well.</HashLink>

                            </td>
                        </tr>

                        <tr>
                            <td>
                            User Interaction (execution and validation) 
                            </td>
                            <td>
                            As a group, <HashLink to="/internationalWeek#video" scroll={el => scrollWithOffset2(el)}>we made a video in which we describe our concept</HashLink>, also with wireframes, <HashLink to="/internationalWeek#sketching" scroll={el => scrollWithOffset2(el)}>we made sketches</HashLink> and <HashLink to="/internationalWeek#video" scroll={el => scrollWithOffset2(el)}>I made a pitch.</HashLink> So, I executed a design. <br /><br />

                            The concept was made to be used by kids and with teachers starting and stopping the game, and with that focus, we created something easily used by children (shown in the wireframes in the video). <HashLink to="/internationalWeek#ideation" scroll={el => scrollWithOffset2(el)}>This was checked multiple times by teachers and advisors.</HashLink><br /><br />

                            Of course, almost everything was documented and handed over to the stakeholders, as seen in the added documents in the portfolio.  

                            </td>
                        </tr>

                        <tr>
                            <td>
                            Software Design
                            </td>
                            <td>
                            For this learning outcome this project was too short. This week was focussed on a good concept and no developement. So nothing to show for this outcome.

                            </td>
                        </tr>

                        <tr>
                            <td>
                            Future-oriented organisation 
                            </td>
                            <td>
                            By eventually making a <Link to="https://developmentbyniels.vercel.app/static/media/Project%20Plan%20International%20Project.9093d23c9b03e550865f.pdf">project plan</Link> and by finding out what the Cruyff Foundation wanted to improve upon, a problem (oppotunity) analysis was formed (this is also in the project plan). <br /><br />

                            From this whole analysis, the main research question was determined. All of this can be read in the project plan. 

                            </td>
                        </tr>

                        <tr>
                            <td>
                            Investigative problem solving  
                            </td>
                            <td>
                            When the main research question was determined, <Link to="https://developmentbyniels.vercel.app/static/media/Project%20Plan%20International%20Project.9093d23c9b03e550865f.pdf">sub-questions were formulated according to the main question.</Link> Specific research methods were not pre-defined, but for the largest part of the project, interviews and literature research were used. <HashLink to="/internationalWeek#top">These research methods can all be found in the tags before the documentation per chapter.</HashLink>
                            </td>
                        </tr>

                        <tr>
                            <td>
                            Personal leadership  
                            </td>
                            <td>
                            <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-international-project#reflection">I reflected on this project by using the DIEP-method in this document.</HashLink> In this reflection, you can read that I want to develop myself more on research and comfortability to start interviews out of nowhere. This is also very much applicable for my professional identity. Even though I am a front-end developer, research is still important. 
                            </td>
                        </tr>

                        <tr>
                            <td>
                            Goal-oriented interaction 
                            </td>
                            <td>
                            During the international week I talked a lot to the international students. Both work talk and just getting to know each other. <br /><br />

                            I also spoke to some teachers and advisors and the coordinator, to make sure that all stakeholders were constantly updated about the process. <HashLink to="/internationalWeek#communication" scroll={el => scrollWithOffset2(el)}>Everything about goal oriented interaction can be read in the communication section in my portfolio.</HashLink>

                            </td>
                        </tr>
                    </table>

                    <br /><br />

                    <h2 className="researchSubtitle" style={{cursor:"auto"}} id="references">References</h2>

                    <br /><br />

                    <ul>
                        <li>Bond, L. (2023, May 15). Writing an academic reflection. Learning Lab. Retrieved May 23, 2023, from <Link to="https://emedia.rmit.edu.au/learninglab/content/writing-academic-reflection">https://emedia.rmit.edu.au/learninglab/content/writing-academic-reflection</Link>  </li>
                    </ul>

                    </p>
                </div>
                </div>
                </div>
                <Footer />
        </React.StrictMode>
    )
}

export default ReadingGuideInternationalProject;