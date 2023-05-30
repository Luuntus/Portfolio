import React, {useEffect} from "react";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";
import Footer from "./components/footer";
import TA from "./documents/Target Audience Research.pdf";
import DT from "./documents/Design Trends Research.pdf";
import AF from "./documents/Animations and frameworks.pdf";
import PP from "./documents/Project plan S6 Niels Vissers V2.pdf";
import RG from "./documents/Reading Guide Personal Project.pdf";
import AOS from 'aos';
import { HashLink } from "react-router-hash-link";

import 'aos/dist/aos.css'; 

function Portfolio() {

    AOS.init();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
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
                    <h2 class="researchSubtitle" id="TAR">User Research</h2>
                    <em class="researchQuestion">How can I use my portfolio to impress small companies for the function of frontend developer?</em>
                    <br />
                    <HashLink to="/portfolio/#userLitStudy" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Literature Study</div></HashLink>
                    <HashLink to="/portfolio/#userExpInterview" scroll={el => scrollWithOffset(el)}><div class="tag researchTag">Expert Interview</div></HashLink>
                    <p class="researchText"><b id="userLitStudy">Literature Study</b>
                    <br /><br />For my literature study, I focussed on search terms like <em class="researchQuestion">frontend developer 
                    portfolios</em> and <em class="researchQuestion">how to make a portfolio for a frontend developer</em>. The most important sites that I found were the 
                    following: 
                    <ul>
                        <li><Link to="https://www.codecademy.com/resources/blog/how-to-make-your-front-end-developer-portfolio-stand-out/">Codecademy - How to Make Your Front-End Developer Portfolio Stand Out</Link></li>
                        <li><Link to="https://skillcrush.com/blog/front-end-developer-portfolio/">Skillcrush - How to Approach Your Front End Developer Portfolio (And Why It’s So Important)</Link></li>
                    </ul>
                    With these sources, I found out that a frontend developer's portfolio needs to look good, be programmed well, without weird bugs and that 
                    it should preferably have a framework, to show that you, as a programmer, are flexible with frameworks, like React, 
                    Vue, Angular or Svelte.
                    <br /><br /><b id="userExpInterview">Expert Interview</b>
                    <br /><br />I had an expert interview with my boss and the director of Yookr, John van Helden. The interview was prepared with 
                    questions like "What do you seek in a frontend developer?", "What are the most important factors to add someone to the Yookr team?", 
                    "What do you want to see when a potential colleague is on a job interview?" and "How could I apply this to an online portfolio?". These questions gave me insight into what skills you must have and 
                    what you have to show to become a frontend developer in a relative small team. I got answers that you should fit in the team, and that you don't 
                    have to be incredibly good at programming (of course you have to be somewhat competent), but you should be able to have the learning capacity and the will to 
                    grow. To show all of this in my portfolio, I had to make a good personalized About Me section. Reflections were also very important, to 
                    show your growing capacity and to show that you are not just doing the same thing over and over again, while it can be optimized. Things like this 
                    were very important to put in my portfolio.
                    <br /><br /><b>Conclusion</b>
                    <br /><br />I have always wanted to work for smaller companies in a small team. This is the place I feel most 
                    comfortable and happy in. From my expert interviews and literture study it has showed that smaller companies value your personal traits and fitting in the 
                    team the same as your skills, maybe even more. To be able to show this in a portfolio, I need to show a piece of myself. 
                    I needed to write in the way I would talk when I'm excited, according to John van Helden. This way, I can convey my enthousiasm in a pleasant way.
                    Also, I should show my skills. Of course, my work will speak for itself, but to touch on it in the 'about me' is something found out 
                    that companies also like. This is because they have a concrete list of what your skills are and they can see what your expertises are 
                    in mere seconds. Lastly, using frameworks shows that you have knowledge of how frameworks work. This is something that is always a plus if you want 
                    to be a good frontend developer.</p>
                    <p class="researchText">View the whole research document with the button below.</p>
                    <a href={TA}>
                        <input type="button" value="Research Document" class="viewBtn"/>
                    </a>
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle" id="DT">Design Trends Research</h2>
                    <em class="researchQuestion">What are the current design trends?/How do I apply these trends to my portfolio?</em>
                    <br />
                    <div class="tag researchTag leftTag">Benchmark Creation</div>
                    <div class="tag researchTag">Literature Study</div>
                    <div class="tag researchTag">Peer Review</div>
                    <p class="researchText">Currently, there are a lot of design trends, with one of the most important being Artificial Intelligence. 
                    Designs can be made or perfected with online AI-tools, as found by my literature research. I tried out two of these tools: Visily and Uizard. I found that AI can indeed make the 
                    process of design way easier than making everything from scratch. And from peer reviews and benchmark creation I got a lot of inspiration and ideas of 
                    how to make a good design. With the benchmark creation, I created the main style for my portfolio and with peer reviews, I fixed a lot of small 
                    details, like improving the about me with some interesting typography, instead of keeping the entire paragraphs in the some font weight and size and 
                    changing some images to prevent both copyright issues and to prevent text not showing well over the background image. </p>
                    </div>
                    <div data-aos="fade-up">
                    <div class="researchImg uizard"></div>
                    <p class="researchText">View the whole research document with the button below.</p>
                    <a href={DT}>
                    <input type="button" value="Research Document" class="viewBtn"/>
                    </a>
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle">Animations and Frameworks</h2>
                    <em class="researchQuestion">How do I use animations in CSS/JavaScript?/What frameworks will help me with animations and responsiveness?</em>
                    <br />
                    <div class="tag researchTag leftTag">Competitive Analysis</div>
                    <div class="tag researchTag">Literature Study</div>
                    <p class="researchText">By utilizing competitive analysis, the most efficient approach for the programming was found. I found that React was the way 
                    to go, because React has great support from, for example, Meta, Netflix and PayPal. I also already had some experience with React, which helped me with 
                    the time restraints. But what made React so important, was that React boosts Search Engine Optimalisation (SEO) greatly, and for my portfolio to eventually 
                    be seen by more people, this is an absolute must. Using a framework also shows that I can be flexible with coding and I am not forced to only use normal 
                    JavaScript, which is something that frontend companies will appreciate. 
                    </p>
                    </div>
                    <div data-aos="fade-up">
                    <p class="researchText">View the whole research document with the button below.</p>
                    <a href={AF}>
                    <input type="button" value="Research Document" class="viewBtn"/>
                    </a>
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle">Conclusion</h2>
                    <em class="researchQuestion">How do I design and realize a professional personal showcase portfolio that shows that I am a professional media designer?</em>
                    <p class="researchText">My main question can be answered by looking at all the conclusions from my sub questions. By looking into different portfolios 
                    and grabbing inspiration from these portfolios, you can start to design a layout. Then you test this layout with both the target audience 
                    (experts) and peers. Improve until you and, more imporantly, the stakeholders are satisfied and then fill in the content, colors and even images. Test this again with the same 
                    groups. Of course, not everyone can find your design perfect, so eventually you should draw a line and continue to the next step, the programming. 
                    Preferably, you want to use a popular framework when starting development and lastly deploy your portfolio on a trustworthy hosting service.</p>
                    </div>
                    <div data-aos="fade-up">
                    <h1 class="researchTitle">Design</h1>
                    <h2 class="researchSubtitle">Inspiration</h2>
                    <p class="researchText">After the research, I had a couple of design trends and example sites as inspiration. By using tools like 
                    Behance and other sites that I knew and by using the results from my research, about what has to be in the portfolio, 
                    I was able to find out in what direction I wanted to go in: A minimalistic frontend developers portfolio, that shows my skills as a designer and as a programmer. 
                    In the picture below, you can see that I took inspiration from this site to make the 'information cards' about the projects.
                    The inspiration shown in the picture is from <Link to="https://www.cult.nl">Cult.nl</Link>, a media company in Horst, who were in the same building as me during my internship.</p>
                    </div>
                    <div data-aos="fade-up">
                    <div class="researchImg inspiration"></div>
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle">Design</h2>
                    <p class="researchText">The AI tool I started using, which I found during the research phase, is <Link to="https://www.uizard.io">Uizard</Link>. This tool helped me create a design 
                    by using AI to give ideas and to tranform sketches and images into full-fledged wireframes. This spared me a great deal of time by instantly 
                    turning my main inspiration into a wireframe. The only lack that this program has, is that it lacks in feature, if you do not buy the full version. Also, you cannot write bold 
                    text in a text element that has regular text. You have to make two elements for that. But even with those lack in functions, a design could be made almost the same 
                    as with Adobe XD. Compared to Adobe XD, which has no AI assistance of sketches to life, a lot of time was saved during 
                    the design process.</p>
                    </div>
                    <div data-aos="fade-up">
                    <div class="researchImg design"></div>
                    </div>
                    <br /><br />
                    <h2 class="researchSubtitle">Testing</h2>
                    <p class="researchText">Not a lot of testing was done during the personal project, since time restraints were a big problem. 
                    By still doing a couple of peer reviews and expert reviews, some place for improvement were found. The most important of which 
                    are that I need to show my skills in the about me section a bit more clearly and aestetically pleasing, and that I need 
                    to write more in a conclusive way instead of a reflective way. Most other feedback point were smaller things, like images making 
                    the text overlay unreadable and a couple of elements being off-center. Eventually, I did test it some more after these changes and the 
                    result was very positive. Unfortunately, because of the aforementioned time restraints, a test report couldn't be written.</p>
                    <br /><br />
                    <h1 class="researchTitle">Programming</h1>
                    <h2 class="researchSubtitle">Programming with React and Tabnine</h2>
                    <p class="researchText">AI tools and frameworks were also used for programming. The AI tool Tabnine see what you are 
                    typing as code and tries to finish the line of code. This works very nice, since this AI tool often writes the right code and 
                    it shows you what it wants to fill in, so you can judge if you want Tabnine to fill in the code or not. The React framework, as 
                    mentioned in the research is already a good tool to show off my flexible coding skills, but it also made the programming process way 
                    easier with components and the structure of React. It still does have a couple of limitations, like the smooth scrolling to an element, 
                    when you click on a link from an external source. However, this can be solved with extra libraries and some extra time.</p>
                    <br /><br />
                    <h2 class="researchSubtitle">Hosting</h2>
                    <p class="researchText">For hosting my website, I used a tool called Vercel. This is a tool that is free for hosting, 
                    but it does give you a watermark in your URL. The main reason why this tool was used, is that it has a built-in CI/CD pipeline, 
                    which allows Vercel to automatically deploy your website to your domain, when you push the code to a Github repository. Because of this 
                    pipeline, of lot of time was saved on figuring out how to deploy a site and how to get all the settings correctly. Vercel also had a very 
                    clean user experience, which allowed me to deploy this portfolio without many problems or help.</p>
                </div>
                <Footer />
                </div>
        </React.StrictMode>
    )
}

export default Portfolio;