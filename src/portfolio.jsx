import React, {useEffect} from "react";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";
import Footer from "./components/footer";
import TA from "./documents/Target Audience Research.pdf";
import DT from "./documents/Design Trends Research.pdf";
import AF from "./documents/Animations and frameworks.pdf";

function Portfolio() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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
                    <a href={TA}>
                        <input type="button" value="Research Document" class="viewBtn"/>
                    </a>
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
                    <a href={DT}>
                    <input type="button" value="Research Document" class="viewBtn"/>
                    </a>
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
                    <a href={AF}>
                    <input type="button" value="Research Document" class="viewBtn"/>
                    </a>
                    <h2 class="researchSubtitle">Conclusion</h2>
                    <em class="researchQuestion">How do I design and realize a professional personal showcase portfolio that shows that I am a professional media designer?</em>
                    <p class="researchText">My main question can be answered by looking at all the conclusions from my sub questions. By looking into different portfolios 
                    and grabbing inspiration from these portfolios, you can start to design a layout. Then you test this layout with both the target audience 
                    (experts) and peers. Improve until you are satisfied and then fill in the content, colors and maybe even images. Test this again with the same 
                    groups. Preferably, you want to use a popular framework when starting development and lastly deploy your portfolio on a trustworthy hosting 
                    service.</p>
                    <h1 class="researchTitle">Design</h1>
                    <h2 class="researchSubtitle">Inspiration</h2>
                    <p class="researchText">As mentioned in my research, I have looked at multiple different portfolios to make a design worthy of 
                    a media designer. I took this inspiration mostly via Behance or via sites with a couple of examples. I took all kinds of elements and 
                    colors I liked from all kinds of different portfolios and gave my own twist to it. With all these things I started to make a design. 
                    The inspiration shown in the picture is from <Link to="https://www.cult.nl">Cult.nl</Link>, a media company in Horst, who were in the same building as me during my internship.</p>
                    <div class="researchImg inspiration"></div>
                    <h2 class="researchSubtitle">Design</h2>
                    <p class="researchText">For my design I used <Link to="https://www.uizard.io">Uizard</Link>. This tool helped me create a design 
                    by using AI to give ideas and to tranform sketches and images into full-fledged wireframes. This spared me a great deal of time by instantly 
                    turning my main inspiration into a wireframe. The only lack that this program has, is that it lacks in feature, if you do not buy the full version. Also, you cannot write bold 
                    text in a text element that has regular text. You have to make two elements for that. But other than that, I would use this program 
                    again. Because of the aforementioned reasons, I like this program more than Adobe XD for example.</p>
                    <div class="researchImg design"></div>
                    <h2 class="researchSubtitle">Testing</h2>
                    <p class="researchText">I did not do a lot of testing, so this is something I should definitely look out for in the future, 
                    but the testing I did was very positive. With multiple peer reviews and expert reviews, with for example Paul Reekers and 
                    John van Helden, I recieved very positive feedback. With a couple of small changes, in both design and UX, I have improved upon 
                    my original design. These small changes include the deletion of some obsolete pictures and the addition of my research questions and methods in 
                    this documentation.</p>
                    <h1 class="researchTitle">Programming</h1>
                    <h2 class="researchSubtitle">Programming with React and Tabnine</h2>
                    <p class="researchText">Programming is always the part I like the most. Hence why I want to become a frontend developer 
                    specifically. And using React and Tabnine, it only made the process both easier and more fun. I have used React multiple times 
                    before, but Tabnine was my first time. And I was really happy with Tabnine. The way it auto-fills some programming lines correctly 
                    makes your experience with programming nicer. I would use Tabnine again in future projects and I am even deliberating with myself if 
                    I should buy the premium version of Tabnine.</p>
                    <h2 class="researchSubtitle">Hosting</h2>
                    <p class="researchText">This was my first time hosting on something else than Hera. So I asked around and someone refered me to 
                    Netlify. Before I got a chance to use it, someone else refered me to Vercel. So I had to make a choice which one to use. However, this 
                    choice was easy for me. I heard that Vercel has a built-in CI/CD pipeline, which automatically deploys your site whenever you do a git 
                    push. So basically, I just had to set it up, which only took about 5 minutes by accepting Vercel as a 3rd party in Github and that was 
                    the deployment done. Even the name of the domain was changable. However, I would still like to try Netlify in the future, to see how that 
                    works, compared to Vercel. But for now, I am really happy with Vercel.</p>
                </div>
                <Footer />
                </div>
        </React.StrictMode>
    )
}

export default Portfolio;