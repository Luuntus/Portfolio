import React from "react";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";
import Footer from "./components/footer";
import AOS from 'aos';
import { HashLink } from "react-router-hash-link";

import 'aos/dist/aos.css'; 

function ReadingGuidePersonalProject() {

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
        <div class="coverImage personalProject noTranslate" id="projects">
                    <div class="project">
                        <div class="projectTitleDesc">
                            <h1 class="white">I've made a portfolio to show myself and my skills to small IT-Companies for the position of frontend developer.</h1>
                        </div>
                        <div class="projectDesc">
                            <h2 class="projectTitle">Personal Portfolio</h2>
                            <em class="subtitle">Personal Project</em>
                            <br />
                            <div class="tag leftTag">Research</div>
                            <div class="tag">Design</div>
                            <div class="tag">Programming</div>
                            <br />
                            <Link to="/portfolio#top">
                            <input type="button" value="Personal Project Documentation" class="viewBtn" style={{display: "inline-block"}}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="explanation">
                <div data-aos="fade-up">
                    <h1 class="researchTitle">Reading Guide</h1>
                    <h2 className="researchSubtitle" style={{cursor:"auto"}}><em style={{color:"black"}}>Personal Project - Personal Portfolio</em></h2>
                    <br /><br />
                    <h2 className="researchSubtitle" style={{cursor:"auto"}}>Contents</h2>
                    <p className="researchText">
                    <ul>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-personal-project#assignment">
                            <li>The assignment</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-personal-project#description">
                            <li>Description of process and results</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-personal-project#projectPlan">
                            <li>Project Plan vs. Reality</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-personal-project#explanation">
                            <li>Explanation of Results</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-personal-project#reflection">
                            <li>Reflection of the Assignment</li>
                        </HashLink>
                        <HashLink scroll={el => scrollWithOffset(el)} to="/reading-guide-personal-project#proof">
                            <li>Proof of learning outcomes</li>
                        </HashLink>
                    </ul>

                    <br /><br />

                    <h2 className="researchSubtitle" style={{cursor:"auto"}} id="assignment">The assignment</h2>

                    <br /><br />

                    Every media designer needs a portfolio to show their work and get attention from possible customers or companies. The problem however is, that a lot of aspects come looking when you have to make a portfolio. Therefore, this project gives the opportunity to make a portfolio under the guidance of experts.
                    So for this personal project, I have to make a portfolio. But not just any portfolio; it has to be a portfolio of a professional media designer. So there are some demands that instantly come to mind.
                    <ul>
                        <li>The portfolio has to be aestetically pleasing, so you show that you have professional design skills, which is key for being a media designer.</li>
                        <li>Good UX, to make the user journey pleasant for visitors of your site.</li>
                        <li>A well developed portfolio in code.</li>
                    </ul>
                    However, the demands are a bit different for this project. The portfolio does not have to be fully developed, but instead of this, research plays a main part in this assignment. I must research the target audience and the design trends to begin with. I need to know for who I am making this portfolio, because if I want to impress specific companies to get work, I must know what impresses these companies. <br /><br />
                    Also, I should not make a design that is outdated in any sort of form. That’s why it is important to make a portfolio based on the current design trends. This comes back to the demand of making your portfolio aestetically pleasing, but this also has to do with UX. A bad or outdated design could confuse your visitors, which is the oppisite of good media design. <br /><br />
                    Lastly, I have to verify my design by testing it. These tests can be done with peers or with experts. These tests should be done to check if my design is good enough and not confusing or completely ugly for someone else. Of course, there will always be a bit of a subjective view in this, so I should be critical of the tests for this assignment. 
                    In short, the goals are as follows:
                    <ul>
                        <li>Research into your target audience and the current design trends.</li>
                        <li>Make your design according the results of the research.</li>
                        <li>Show this research in your portfolio, but keep the design clean.</li>
                        <li>Succesfully test your portfolio (design), so you verify if UX and aestetic is good.</li>
                        <li>Host your portfolio on something else than Fontys their Hera environment.</li>
                    </ul>

                    <br /><br />

                    <h2 className="researchSubtitle" style={{cursor:"auto"}} id="description">Description of process and results</h2>

                    <br /><br />

                    <h2 className="researchSubtitle2" style={{cursor:"auto"}} id="projectPlan">Project Plan vs. Reality</h2>

                    <br /><br />

                    My initial scope was to to quite a lot more than I have actually done, and this isn’t because I was slacking, because some days I worked until 22:00 to be satisfied with the results. I thought this project was going to be more easy than it actually was. When researching, I found out that I spent way more time on it than intially planned. This made sure that I only had two more weeks to design, test and realize my portfolio. At least I am very happy with my research. It went well and the results were sometimes very interesting, for example when I found out that personality and skills are almost of equal worth to my target audience. <br /><br />
                    Also I wrote in my project plan that I would make a fully responsive website portfolio. Unfortuntely, I couldn’t make everything responsive before the deadline. This is also due to me focussing a bit too much on the research part, forgetting what I have to do in the future. The confusion about the project at the beginning of the assignment didn’t help as well. <br /><br />
                    The same is the case with animations and refering to the right piece of research when clicking on a link, however this is something I will definitely add in the near future, because these elements really give the portfolio a more professional and aestetically pleasing look and are incredibly important for a better user experience. You will notice that the links in this reading guide do not yet go to the right research. <br /><br />
                    At first I thought that I needed to make a showcase portfolio, not knowing that my research needed to be on the website. I thought my research was going in the reading guide or somewhere else, so this meant that I had to shift my focus from a show, don’t tell style to a different style. <br /><br />
                    My risk analysis however went great. One day, Paul wasn’t available anymore, so I refered to Rose, since she is my second assessor. This was one of the risks which I pointed out in my project plan. So this was something where my project plan helped me forward, by explicitally telling me how to act when Paul was unavailable. <br /><br />
                    And something else that went according to my project plan is the fact that I still had my carnival break. I planned this, because during my internship I did not have any breaks (yes, also no Christmas break), and I really needed one. This break did wonders for my productivity in the last two weeks, because it got a massive boost. <br /><br />
                    All-in-all, the deliverables and sprint planning I had planned in my project plan didn’t really come true, because I didn’t realize how much research I needed to do. This held me back, so for the future I’m going to start designing and maybe even test and produce a bit of code during my research. This way I will keep myself on track and alter my designs according to results I get from my research over time. Luckily, my risk analysis and some planning went right, so I should keep that as it is.

                    <br /><br />

                    <h2 className="researchSubtitle2" style={{cursor:"auto"}} id="explanation">Explanation of Results</h2>

                    <br /><br />

                    The result became a pretty much static portfolio website. I am very happy with how the design and the realisation eventually came out, even though I wanted to do a bit more initially. I have also produced three research documents and of course this reading guide. <br /><br />
                    The portfolio website will be of great importance for my target audience; the small IT-companies that are looking for frontend developers. These are probably the most important stakeholders for the future, because they can offer you work and ultimately get you a job. They don’t really care for the extensive research part, but the design and the coding is very important to them. Especially since I used a framework like React that is really popular and in high demand for a lot of companies.<br /><br />
                    The reading guide and the research are way more important for the teachers. They are also stakeholders in this project and they want to see how I went through the process of making this portfolio and what I want to improve on for the future. It is also important to them that they can see how I researched and where I got my information from, because research is a key element for almost all projects and the teachers, of course, have to grade me on research as well. <br /><br />
                    I myself am also a stakeholder in this project. For me, the value of my results is the same as for the IT-Companies. This is because my ultimate goal is to impress these companies. I want to work at one of them, so for me it is really important that I stick to what they want. As I said before: they are the ones that give you work or maybe even a job.

                    <br /><br />

                    <h2 className="researchSubtitle2" style={{cursor:"auto"}} id="reflection">Reflection of the Assignment</h2>

                    <br /><br />

                    At first I would say that I would have wanted to do more in this project. I wanted to make my portfolio responsive and I wanted to add a lot of animations as well. Unfortunately, I didn’t have the time to do so. However, I am still very happy with the final result, especially because I have learned a lot and since I didn’t expect that the project would be so large in scale compared to what I thought. <br /><br />
                    I especially learned a lot on the research and design fronts. The thing I am most proud about, is the fact that I finally did the design process in the right order. This might seem as a small thing, but I always liked to start building a website without a plan or design of some sorts. Because of this, most of my projects had a lack in design. I started with a project plan and research and then I finally took the time to be critical about my design and let fellow students, teachers and even some people in the working field check it out. And after all of that, I started building my portfolio, so the design was actually professional. This is really important for learning outcomes 1, 2 and 4. <br /><br />
                    However, something I should improve for the future is the fact that I need to document and do more tests. This was still a bit lacking for this assignment. I want to make an actual testing report for future tests and also experiment with different methods of testing within the CMD-Methods Pack. This because I want to get more comfortable with research and be able to validate concepts and designs better. This mainly applies to learning outcomes 1 and 2. <br /><br />
                    The answers to my sub-questions are also something I am decently proud of. As I mentioned before, I often liked to start programming immediately, but for me to take the time and do research is something I am very happy with. Even though I wanted to look into some of the sub-questions a bit more, I am still satisfied with the answers I was able to give. Lastly, the APA-style references went really well, despite a couple of small mistakes. This is really important for learning outcome 5. <br /><br />
                    And as last I wanted to mention this entire reflection I just wrote. This applies to learning outcome 6 and I must say that some of these points wouldn’t have occurred to me, if I didn’t put effort into this reflection. There are still many things to improve and learn, but all-in-all, I am happy with where I currently am as a professional. I know my professional identity as a frontend developer at a small company and I know what development I can go trough to improve as a professional. 

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
                            My <HashLink to="/portfolio#TAR" scroll={el => scrollWithOffset2(el)}>target audience research</HashLink> and my <HashLink to="/portfolio#DT" scroll={el => scrollWithOffset2(el)}>design trends research</HashLink> are the best proof of this learning outcome. They show that I researched my end users and the current state of design. This show that I went through a suitable design process. <br /><br />

                            The use of <HashLink to="/portfolio#design" scroll={el => scrollWithOffset2(el)}>Uizard</HashLink> showed that I used a state of the art interactive technology to show that I am a professional media designer. Also React is something that comes to mind when using these technologies, something I also used.

                            </td>
                        </tr>

                        <tr>
                            <td>
                            User Interaction (execution and validation) 
                            </td>
                            <td>
                            The execution speaks for itself, as I’ve designed a <Link to="/">high-fidelity prototype</Link> and wrote it in code with react. <br /><br />

                            I have evaluated my UX by <HashLink to="/portfolio#design" scroll={el => scrollWithOffset2(el)}>peer reviews, expert interviews and benchmark creation.</HashLink> The only documentation I have of that is show in the same place. As I have said before, the documentation and testing is something I want to focus more on in the future. Unfortunately, because of the short scale of this project I wasn’t able to validate my design as often as I wanted. 
                            </td>
                        </tr>

                        <tr>
                            <td>
                            Software Design
                            </td>
                            <td>
                            I have not made a chart for this portfolio and this website is also not done for evaluation, because it lacks in some feature that will be added in the future. <br /><br />

                            As for predetermined criteria and components/libraries, I have <HashLink to="/portfolio#AR" scroll={el => scrollWithOffset2(el)}>researched that a framework</HashLink> was basically a requirement from my stakeholders (end users) and <HashLink to="/portfolio#programming" scroll={el => scrollWithOffset2(el)}>I used react with components.</HashLink>


                            </td>
                        </tr>

                        <tr>
                            <td>
                            Future-oriented organisation 
                            </td>
                            <td>
                            I wrote a <HashLink to="https://developmentbyniels.vercel.app/static/media/Project%20plan%20S6%20Niels%20Vissers%20V2.c3b1ea953fa2f7d33208.pdf" scroll={el => scrollWithOffset2(el)}>full-fledged project plan</HashLink> to make sure I know what I had to do and when to do it. The problem analysis and the definitive problem are clarified in this document under stakeholders and research questions respectively.
                            </td>
                        </tr>

                        <tr>
                            <td>
                            Investigative problem solving  
                            </td>
                            <td>
                            My subquestions are formulated in <HashLink to="https://developmentbyniels.vercel.app/static/media/Project%20plan%20S6%20Niels%20Vissers%20V2.c3b1ea953fa2f7d33208.pdf" scroll={el => scrollWithOffset2(el)}>my project plan.</HashLink> These questions are answered according to the CMD-Methods I used in the part where <HashLink to="/portfolio#research" scroll={el => scrollWithOffset2(el)}>I talk about my research.</HashLink> Here you can also find a fully written out docuementation of my research and how I applied the CMD-Methods that I chose to use.
                            </td>
                        </tr>

                        <tr>
                            <td>
                            Personal leadership  
                            </td>
                            <td>
                            My extensive reflection is <HashLink to="/reading-guide-personal-project#reflection" scroll={el => scrollWithOffset(el)}>right here in this very document.</HashLink> I however did not use a special method. Maybe I did without knowing, but I always reflect in my own way, and it has always brought me great insights.

                            As for my professional identity, that is explained in the <HashLink to="/portfolio#TAR" scroll={el => scrollWithOffset2(el)}>target audience research.</HashLink> I want to become a frontend developer in a small company or a small team. And I still want to develop in research and animations as said in my reflection and <HashLink to="https://developmentbyniels.vercel.app/static/media/Project%20plan%20S6%20Niels%20Vissers%20V2.c3b1ea953fa2f7d33208.pdf" scroll={el => scrollWithOffset2(el)}>my project plan</HashLink> respectively.

                            </td>
                        </tr>

                        <tr>
                            <td>
                            Goal-oriented interaction 
                            </td>
                            <td>
                            I have communicated multiple times with my stakeholders, both in teachers and experts. As for example shown in my <HashLink to="/portfolio#TAR" scroll={el => scrollWithOffset2(el)}>target audience research</HashLink> it shows that I have spoken to the owner of an IT-company. The feedback from my teachers is clearly shown in <Link to="https://fhict.instructure.com/courses/12865/external_tools/1067">Feedpulse.</Link> Unfortunately, for an international aspect, I only have my peer reviews with classmates of different nationalities. However, these is no concrete proof of this.
                            </td>
                        </tr>
                    </table>

                    </p>
                </div>
                </div>
                </div>
                <Footer />
        </React.StrictMode>
    )
}

export default ReadingGuidePersonalProject;