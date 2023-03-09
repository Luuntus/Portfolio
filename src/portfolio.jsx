import React from "react";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";

function Portfolio() {
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
                            <input type="button" value="Reading Guide" class="viewBtn" />
                        </div>
                    </div>
                </div>
                <div class="explanation">
                    <h1 class="researchTitle">Research</h1>
                    <h2 class="researchSubtitle">User Research</h2>
                    <em class="researchQuestion">How can I use my portfolio to impress small companies for the function of frontend developer?</em>
                    <br />
                    <div class="tag researchTag leftTag">Literature Study</div>
                    <div class="tag researchTag">Expert Interview</div>
                    <p class="researchText">I have always wanted to work for smaller companies in a small team. This is the place I feel most 
                    comfortable and happy in. From my research it has showed that smaller companies value your personal traits and fitting in the 
                    team the same as your skills, maybe even more. To be able to show this in a portfolio, I need to show a piece of myself. 
                    I needed to write in the way I would talk when I'm excited, according to John van Helden. This way, I can convey my enthousiasm in a pleasant way.
                    Also, I would show my skills. Of course, my work will speak for itself, but to touch on it in the 'about me' is something found out 
                    that companies also like. This is because they have a concrete list of what your skills are and they can see what your expertises are 
                    in mere seconds. Lastly, using frameworks shows that you have knowledge of how frameworks work. This is something that is always a plus if you want 
                    to be a good frontend developer.</p>
                    <p class="researchText">View the whole research document with the button below.</p>
                    <input type="button" value="Research Document" class="viewBtn"/>
                    <h2 class="researchSubtitle">Design Trends Research</h2>
                    <em class="researchQuestion">What are the current design trends?/How do I apply these trends to my portfolio?</em>
                    <br />
                    <div class="tag researchTag leftTag">Benchmark Creation</div>
                    <div class="tag researchTag">Literature Study</div>
                    <div class="tag researchTag">Peer Review</div>
                    <p class="researchText">To make an aestetically pleasing portfolio, I needed to know what the current design trends are. By using 
                    benchmark creation and literature study, I took inspiration from existing portfolios and I read into what the current big things in 
                    design are respectively. I also checked out other portfolio-like sites that I knew, to find out how I was going to structure my portfolio. 
                    Then I also used AI's like Tabnine and Uizard to make the process of both coding and designing easier. I would definitely opt to use 
                    these AI's again. I have also used the knowledge and vision of my peers to check if I applied these trends correctly. By doing this, 
                    I could verify my design and make sure that my portfolio is actually a good media product.</p>
                    <div class="researchImg uizard"></div>
                    <p class="researchText">View the whole research document with the button below.</p>
                    <input type="button" value="Research Document" class="viewBtn"/>
                    <h2 class="researchSubtitle">Animations and Frameworks</h2>
                    <em class="researchQuestion">How do I use animations in CSS/JavaScript?/What frameworks will help me with animations and responsiveness?</em>
                    <br />
                    <div class="tag researchTag leftTag">Competitive Analysis</div>
                    <div class="tag researchTag">Literature Study</div>
                    <p class="researchText">Animations make your site more aestetically pleasing if you use them correctly. I also wanted to get better 
                    at animations and I wanted to use them in my portfolio. With competitive analysis, I found out what the pros and cons of the frameworks 
                    were and I chose the one that fits best and I am the most comfortable with; React. With literature study I found out that there are a lot 
                    of good libraries for easy animations in CSS and JavaScript. These are sometimes even easier to use than the animation libraries from frameworks. 
                    Even though JavaScript libraries make making animations very easy, frameworks make animations easier where there is not yet a library available. 
                    </p>
                    <p class="researchText">View the whole research document with the button below.</p>
                    <input type="button" value="Research Document" class="viewBtn"/>
                    <h2 class="researchSubtitle">Conclusion</h2>
                    <em class="researchQuestion">How do I design and realize a professional personal showcase portfolio that shows that I am a professional media designer?</em>
                    <p class="researchText">My main question can be answered by looking at all the conclusions from my sub questions. By looking into different portfolios</p>
                </div>
                </div>
        </React.StrictMode>
    )
}

export default Portfolio;