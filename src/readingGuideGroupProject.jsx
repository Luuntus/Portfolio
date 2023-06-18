import React from "react";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";
import Footer from "./components/footer";
import AOS from 'aos';
import { HashLink } from "react-router-hash-link";

import 'aos/dist/aos.css'; 

function ReadingGuideGroupProject() {

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
                            <br />
                            <HashLink to="/youthWork#top">
                            <input type="button" value="Group Project Documentation" class="viewBtn" style={{display: "inline-block"}}/>
                            </HashLink>
                        </div>
                    </div>
                </div>
                <div class="explanation">
                <div data-aos="fade-up">
                    <h1 class="researchTitle">Reading Guide</h1>
                    <h2 className="researchSubtitle" style={{cursor:"auto"}}><em style={{color:"black"}}>Group Project - Online Youth Work</em></h2>
                    <br /><br />
                    <h2 className="researchSubtitle" style={{cursor:"auto"}}>Contents</h2>
                    <p className="researchText">
                    <ul>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-group-project#assignment">
                            <li>The assignment</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-group-project#description">
                            <li>Description of process and results</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-group-project#projectPlan">
                            <li>Comparison of project plan and reality</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-group-project#explanation">
                            <li>Explanation of Results</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-group-project#reflection">
                            <li>Reflection of the Assignment</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-group-project#proof">
                            <li>Proof of learning outcomes</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-group-project#references">
                            <li>References</li>
                        </HashLink>
                    </ul>

                    <br /><br />

                    <h2 className="researchSubtitle" style={{cursor:"auto"}} id="assignment">The assignment</h2>

                    <br /><br />

                    The municipality of Eindhoven is spending money and time to improve youth work in the region of Eindhoven. They recently started a new project with the company Garage2020 to improve online youth work. This means building up an online community where the youth feels safe and at home, with supervision from responsible adults. This is a big opportunity to reach more youth that does go out very often or go to other youth centers. Another opportunity is to educate and warn the youth about things that can happen online, to give the youth a safer feeling in the online world. However, online youth work is easier said than done. <br /><br />
                    The main problem is the knowledge of the youth workers about the use of social media and how to reach the youth with this. A couple of youth workers do have the knowledge, but they had problems with transfering this knowledge to their colleagues. All the different apps, methods how to use these apps and safety issues also play a very big role in why online youth work has not been attained yet.<br /><br />
                    The assignment in short was to research youth work both in general and online. From the findings of that research, the task was to design a way to get more youth workers online, to make them connect with the youth via online means and to get them aware of the dangers of social media and how to counter these. <br /><br />
                    The hard part of the assignment was that the stakeholder (Fenna Dam, Garage2020) was only working on this project for two hours a week. This meant that the project started from scratch and that there was no final vision about the product. This left a lot of opportunies open to design the product, however it also left my project group and me with no guidelines to follow. In short, the only demands were that good research was done and that a product was designed to help social workers to get online.<br /><br />
                    Of course, the demands of the target audience (youth workers in the region of Eindhoven) also played a big role in this project. The target audience wanted a digital solution, as they had already made a physical manual to teach social media to the youth workers, which did not work. The target audience also wanted the most popular social media networks among the youth to be taught to the social workers, because teaching something outdated would not have any effect in this fast-changing social media climate. Furthermore, the way of teaching the social media had to be fun and engaging, while still being effective. This way the youth workers stay motivated to learn. <br /><br />
                    Lastly, there were also some demands from Fontys. Fontys demands a programmed prototype, which meant that programming should also be done during the project. This wasn’t a demand from either Fenna or our target audience, but it was still important to the project.<br /><br />
                    In short, the following demands were made for the project:
                    <ul>
                        <li>Research the best way to get youth workers online.</li>
                        <li>Research what platforms the youth uses mostly, so that youth workers learn the most effective platforms.</li>
                        <li>Design a way to get youth workers online and make connections with the youth, according to the results from the research.</li>
                        <li>Test the aforementioned design on both UX and aestetic.</li>
                        <li>Develop a prototype of the product in code.</li>
                    </ul>

                    <br /><br />

                    <h2 className="researchSubtitle" style={{cursor:"auto"}} id="description">Description of process and results</h2>

                    <br /><br />

                    <h2 className="researchSubtitle2" style={{cursor:"auto"}} id="projectPlan">Comparison project plan and reality</h2>

                    <br /><br />

                    When the assigment was clear, the first thing we did as a project group, was to make a project plan. I was responsible for the writing of the assignment and as a group effort (everyone had input in this) the research questions, research methods and the time plan were made. The project plan was made with much care, to make sure that everyone knew what the project was about and how we were going to do the project. We used all the research methods we had planned out, but unfortunately, we had to scrap the programming phase due to time restraints, because we needed to do more research than expected. <br /><br />
                    The project plan indicated that we had four weeks per phase and we had three phases (Research, Design and Programming). As stated before, the programming phase was scrapped due to time restraints, because we had to do more research than originally expected. However, we did get testing done in every phase. In the research phase, we tested our research regularly with Paul, Rose and Fenna and in the design phase, we did usability tests and thinking aloud tests. Testing was planned out in the project plan for every phase.<br /><br />
                    The research and design phase, when stretched out with more time, actually went according to plan quite well. With the extension of these phases, we could focus more on getting good research done and iterate upon the design. As planned, we started with sketches, moved over to wireframes and eventually started making a prototype. We also tested the prototype with the youth workers, as planned at the start of this project.<br /><br />
                    We also used and made all of the stepping stones listed in the project plan. I contributed on a few of them, but not all. Unfortunately, we couldn’t get the MoSCoW method done, since we didn’t start the programming phase, so we had to leave that out.<br /><br />
                    In short, we have followed the project plan very well, even though we had to scrap the programming phase. With the exclusion of one group mate in the project because of illness and personal situations, we had a bit of a chaotic start with the project, but with the project plan, we managed to distribute the work over the five remaining people and finish the project by scrapping some things.  

                    <br /><br />

                    <h2 className="researchSubtitle2" style={{cursor:"auto"}} id="explanation">Explanation of Results</h2>

                    <br /><br />

                    The results consist of four parts: the extensive research, the design/prototype, the testing report and the advice report. All of these are extremely important to the stakeholder, because these four parts show what we have done, how we have done it, what the results are and what the future of the project should look like. <br /><br />
                    <b>Research</b><br /><br />
                    For the research, the deliverable is a research document that links to all the individual research documents. All sources are written in APA, so if the stakeholders want to check where we got all of our information from and if it is trustworthy, they can refer to the references section in the documents. With this research, the stakeholders will be able to see where we based our prototype on and why we structured it like we did. It also shows the interviews with Dynamo and Pitstop and what their vision was for the final product. <br /><br />
                    <b>Design/Prototype</b> <br /><br />
                    The design and the prototype is the most tangible deliverable for the stakeholders. With this prototype, they know what the final product should look like and how it works in terms of navigation. This is also the prototype they can use to iterate on and eventually program the full application from.<br /><br />
                    <b>Test report</b><br /><br />
                    In the test report, the stakeholders (especially Fenna) can see what the improvement points of the prototype are and what the good things of the prototype are. This testing report shows the direct desires from the youth workers and the advice from experts. This can be used to iterate to a great final product.<br /><br />
                    <b>Advice report</b><br /><br />
                    With the advice report, the stakeholders have all the tips and feedback for future development of the prototype. This is extremely valuable, because this consists of the feedback of the youth workers, the experts, Fenna and ourselves and this will for sure improve the final product.     


                    <br /><br />

                    <h2 className="researchSubtitle2" style={{cursor:"auto"}} id="reflection">Reflection of the Assignment</h2>
                    <em className="researchQuestion">For the reflection I use the DIEP-Method (Describe, Interpret, Evaluate, Plan) (Bond, 2023).</em>

                    <br /><br />

                    <b>Describe (What happened? What did you learn?)</b><br /><br />
                    I worked on a group project for twelve weeks. I learned a lot about communication with group mates, usability, research and testing. The project group was very close and I dare say I can even call them friends. We also had a final feedback session at the end and most of the feedback was positive, with my big improvement point that I have to talk less and try to listen more. <br /><br />
                    <b>Interpret (What does the experience mean? Why?)</b><br /><br />
                    This learing experience meant a lot to me. Things came to light that I did not know I still needed to learn or even did wrong. For example, during the research phase, I struggled a lot at the start. I asked for feedback regularly on the documentation and eventually I got it down and I was even referred to as an example. That is what I strive for; learning to do things I previously couldn’t or didn’t do right. The same counts for the communcation. I have to try to talk less and listen more, because from the feedback, I saw that some group mates get ‘intimidated’ by me talking a lot and sometimes even talking over them. For me this is really important to know, because I can grow on this and learn from this.<br /><br />
                    <b>Evaluate (How valuable was the learning experience?)</b><br /><br />
                    This project was very valuable as a learning experience. This is because there was plenty room for mistakes in these weeks and, of course, I made plenty as well. These mistakes can all be learned from. Also, since a project like this is of a longer scale, I could see how group mates react to me as a group mate. This is very valuable, because feedback like this is not something you get in an individual project or a short project.<br /><br />
                    <b>Plan (How will you apply your learing?)</b><br /><br />
                    For the communication, I will ask people to tell me if I talk too much, so I know when I have to keep quite. I will also pay attention to it by myself and observe how other do this. For the documentation on CMD-methods, I will now always use the ‘WHY? - HOW? - Results’ way of documentation. This makes sure that if I read the documentation again, I exactly know what I did, why I did it and what the results were.

                    <br /><br />

                    <h2 className="researchSubtitle" style={{cursor:"auto"}} id="proof">Proof of learning outcomes</h2>
                    
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
                            <HashLink to="/youthWork#Interviews" scroll={el => scrollWithOffset2(el)}>The interviews</HashLink>, <HashLink to="/youthWork#germanResearch" scroll={el => scrollWithOffset2(el)}>the research about Germany</HashLink>, <HashLink to="/youthWork#socialMedia" scroll={el => scrollWithOffset2(el)}>the research about popular social media networks</HashLink> and <HashLink to="/youthWork#eduResearch" scroll={el => scrollWithOffset2(el)}>the research about the education methods</HashLink> show that I have in-depth researched my target audience. <br /><br />

                            The structure of Research – Design – Programming, while testing during every phase, is an innovative way of doing the Waterfall method, more in line with Media Design. <HashLink to="/youthWork#top">This is shown in the full project</HashLink> and in <HashLink to="https://developmentbyniels.vercel.app/static/media/Project%20Plan%20-%20Group%20Project.61667dde0c9425bd17ab.pdf">the project plan.</HashLink> This shows I have used a suitable design process. <br /><br />

                            During the project, <HashLink to="/youthWork#prototyping" scroll={el => scrollWithOffset2(el)}>I used Figma for prototyping.</HashLink> Figma is a very popular and good prototyping tool that it can be considered as state of the art. 

                            </td>
                        </tr>

                        <tr>
                            <td>
                            User Interaction (execution and validation) 
                            </td>
                            <td>
                            <HashLink to="/youthWork#sketching" scroll={el => scrollWithOffset2(el)}>Starting out with sketches and improving to low-fidelity wireframes</HashLink> made sure that I was first focussing on a good user experience. After that, <HashLink to="/youthWork#prototyping" scroll={el => scrollWithOffset2(el)}>I upgraded to a high-fidelity prototype.</HashLink> This shows that with an iterative process, I have executed a design. <br /><br />

                            The entire design process and the design choices are documented in the <Link to="https://developmentbyniels.vercel.app/static/media/Design%20Phase.f5193111864214132237.pdf">design document</Link> and in <HashLink to="/youthWork#top" scroll={el => scrollWithOffset2(el)}>my portfolio.</HashLink> They show that I have documented the decisions in the design of the project.

                            </td>
                        </tr>

                        <tr>
                            <td>
                            Software Design
                            </td>
                            <td>
                            I <HashLink to="/youthWork#c4" scroll={el => scrollWithOffset2(el)}>designed a C4-diagram</HashLink> for the group project myself, to see how I visualized the software design. <HashLink to="/youthWork#c4" scroll={el => scrollWithOffset2(el)}>I evaluated this C4-diagram</HashLink> myself by checking if it met all the quality criteria of a good C4-diagram via the C4-model site. <br /><br />

                            There were no predetermined quality criteria from the stakeholders, but in <Link to="https://developmentbyniels.vercel.app/static/media/Animations%20and%20frameworks.ad801c9cef5ebe11eccf.pdf">the research I did previously for my portfolio</Link>, I did find out that either react or Vue would be the best existing libraries/frameworks to use. So if we were to program, we would have used either one of these, since skill level were around the same in both programming languages.


                            </td>
                        </tr>

                        <tr>
                            <td>
                            Future-oriented organisation 
                            </td>
                            <td>
                            <HashLink to="https://developmentbyniels.vercel.app/static/media/Project%20plan%20S6%20Niels%20Vissers%20V2.c3b1ea953fa2f7d33208.pdf" scroll={el => scrollWithOffset2(el)}>The project plan</HashLink> is the proof for this. It shows exactly what the assignment is and who the stakeholders are. It also shows the main research question and a fully planned out schedule, scope and even a risk analysis. I have written the assignment and the research questions, research methods and the schedule were a group effort.
                            </td>
                        </tr>

                        <tr>
                            <td>
                            Investigative problem solving  
                            </td>
                            <td>
                            The subquestions are formulated in <HashLink to="https://developmentbyniels.vercel.app/static/media/Project%20plan%20S6%20Niels%20Vissers%20V2.c3b1ea953fa2f7d33208.pdf" scroll={el => scrollWithOffset2(el)}>the project plan.</HashLink> These questions are answered according to the CMD-Methods, which are stated in the project plan as well. These methods are coupled to the research questions and <HashLink to="/youthWork#sketching" scroll={el => scrollWithOffset2(el)}>I also used stepping stones for the design phase.</HashLink>
                            </td>
                        </tr>

                        <tr>
                            <td>
                            Personal leadership  
                            </td>
                            <td>
                            During this project I managed to get an intership for semester 7 ICT & Education at ROC ter Aa, because I want to learn more about education and I consider to become a teacher. So I consciously know my professional identity and started to develop in this by getting that internship. <br /><br />

                            This also shows in the fact that I specifically chose <HashLink to="/youthWork#eduResearch" scroll={el => scrollWithOffset2(el)}>the educational research during the research phase.</HashLink> <br /><br />

                            The reflection was methodically done with the DIEP-Method that I also used in the reading guide for international week. <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-group-project#reflection">This reflection is here in this document.</HashLink>

                            </td>
                        </tr>

                        <tr>
                            <td>
                            Goal-oriented interaction 
                            </td>
                            <td>
                            Communication with stakeholders was done regularly. For example, I spoke to Fenna every two weeks. I was also the one to make the appointment at Pitstop by calling Matheus and eventually WhatsApping him, after he asked that I would send him a message. <HashLink to="/youthWork#Interviews" scroll={el => scrollWithOffset2(el)}>This can be found in the interviews and meetings section of my portofolio.</HashLink> I was also the one to <HashLink to="/youthWork#testing" scroll={el => scrollWithOffset2(el)}>arrange the test at Pitstop with the youth workers.</HashLink> <br /><br />

                            During this project, I worked in an international group and we had very effective communication. We got eveything done right and we informed our stakeholders about the group mate that had to let go of the project, because of medical reasons. Of course, <HashLink to="/youthWork#reflection" scroll={el => scrollWithOffset2(el)}>we also did the reflection</HashLink>, which is proof that, despite the improvement points, I communicated effectively with my international group.

                            </td>
                        </tr>
                    </table>

                    <br /><br />

                    <h2 className="researchSubtitle" style={{cursor:"auto"}} id="references">References</h2>

                    <br /><br />

                    <ul>
                        <li>Bond, L. (2023, May 15). Writing an academic reflection. Learning Lab. Retrieved June 15, 2023, from <Link to="https://emedia.rmit.edu.au/learninglab/content/writing-academic-reflection">https://emedia.rmit.edu.au/learninglab/content/writing-academic-reflection</Link> </li>
                    </ul>

                    </p>
                </div>
                </div>
                </div>
                <Footer />
        </React.StrictMode>
    )
}

export default ReadingGuideGroupProject;