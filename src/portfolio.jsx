import React, {useEffect} from "react";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";
import Footer from "./components/footer";
import TA from "./documents/Target Audience Research.pdf";
import DT from "./documents/Design Trends Research.pdf";
import AF from "./documents/Animations and frameworks.pdf";
import PP from "./documents/Project plan S6 Niels Vissers V2.pdf";
import RG from "./documents/Reading Guide Personal Project.pdf";
import CR from "./documents/formative assessment.pdf";
import AOS from 'aos';
import { HashLink } from "react-router-hash-link";
import userExpInterview from "./documents/Expert Interview John van Helden.pdf";
import benchCreation from "./documents/Benchmark Creation.pdf";

import 'aos/dist/aos.css'; 

function Portfolio() {

    AOS.init();

    /*useEffect(() => {
        window.scrollTo(0, 0)
      }, [])*/

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
                    <h1 class="researchTitle">Empathise & Define</h1>
                    <h2 class="researchSubtitle" id="TAR">User Research</h2>
                    <em class="researchQuestion">How can I use my portfolio to impress small companies for the function of frontend developer?</em>
                    <br />
                    <HashLink to="/portfolio/#userLitStudy" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Literature Study</div></HashLink>
                    <HashLink to="/portfolio/#userExpInterview" scroll={el => scrollWithOffset(el)}><div class="tag researchTag">Expert Interview</div></HashLink>
                    <p class="researchText"><b id="userLitStudy">Literature Study</b>
                    <br /><br /><b>WHY? -</b> To really understand how to make a frontend portfolio for small companies, I had to delve into a literature study. This 
                    literature study would give me the opportunity to find sources that show what elements are important for an aspiring frontend developer to put in their 
                    portfolio. Via literature study, I can easily find multiple sources about what is important for a frontend portfolio, so I do not get a biased view from 
                    only one source. Also, the fact that literature study is very accessible made me opt for this research method.
                    <br /><br /><b>HOW? -</b> For my literature study, I focussed on search terms like <em class="researchQuestion"><b>frontend developer 
                    portfolios</b></em> and <em class="researchQuestion"><b>how to make a portfolio for a frontend developer</b></em>. The most important sites that I found were the 
                    following: 
                    <ul>
                        <li><Link to="https://www.codecademy.com/resources/blog/how-to-make-your-front-end-developer-portfolio-stand-out/">Codecademy - How to Make Your Front-End Developer Portfolio Stand Out</Link></li>
                        <li><Link to="https://skillcrush.com/blog/front-end-developer-portfolio/">Skillcrush - How to Approach Your Front End Developer Portfolio (And Why It’s So Important)</Link></li>
                    </ul>
                    I judged both sources on writer, writing style, date of publication and where it was uploaded/published. I found out that my sources had no 
                    commercial goals and that the writers had a long time interest in the subject of writing. This is why I found the sources to be credible. 

                    With these sources, I found out that a frontend developer's portfolio needs to look good, be programmed well, without weird bugs and that 
                    it should preferably have a framework, to show that you, as a programmer, are flexible with frameworks, like React, 
                    Vue, Angular or Svelte.
                    <p class="researchText">View the whole research document with the button below.</p>
                    <a href={TA}>
                        <input type="button" value="Research Document" class="viewBtn"/>
                    </a>
                    <br /><br /><b id="userExpInterview">Expert Interview</b>
                    <br /><br /><b>WHY? -</b> I had access to an expert to do an expert interview with. By doing this, I could understand what the owner of a small 
                    ICT company wants from an aspiring frontend developer in their portfolio. This expert could give me advice on certain things to put in my portfolio and 
                    other pitfalls that I should avoid putting in the porfolio. 
                    <br /><br /><b>HOW? -</b> I had an expert interview with my boss and the director of Yookr, John van Helden. The interview was prepared with 
                    questions like 
                    <ul>
                        <li>What do you seek in a frontend developer?</li>
                        <li>What are the most important factors to add someone to the Yookr team?</li>
                        <li>What do you want to see when a potential colleague is on a job interview?</li>
                        <li>How could I apply this to an online portfolio?</li>
                    </ul> 
                    These questions gave me insight into what skills you must have and 
                    what you have to show to become a frontend developer in a relative small team. I got answers that you should fit in the team, and that you don't 
                    have to be incredibly good at programming (of course you have to be somewhat competent), but you should be able to have the learning capacity and the will to 
                    grow. To show all of this in my portfolio, I had to make a good personalized About Me section. Reflections were also very important, to 
                    show your growing capacity and to show that you are not just doing the same thing over and over again, while it can be optimized. Things like this 
                    were very important to put in my portfolio.
                    <p class="researchText">Here you can see the notes of my expert interview</p>
                    <a href={userExpInterview}>
                        <input type="button" value="Expert Interview" class="viewBtn"/>
                    </a>
                    <br /><br /><b>Conclusion</b>
                    <br /><br />I have always wanted to work for smaller companies in a small team. This is the place I feel most 
                    comfortable and happy in. From my expert interviews and literture study it has showed that smaller companies value your personal traits and fitting in the 
                    team the same as your skills, maybe even more. To be able to show this in a portfolio, I need to show a piece of myself. 
                    I needed to write in the way I would talk when I'm excited, according to John van Helden. This way, I can convey my enthousiasm in a pleasant way.
                    Also, I should show my skills. Of course, my work will speak for itself, but to touch on it in the 'about me' is something found out 
                    that companies also like. This is because they have a concrete list of what your skills are and they can see what your expertises are 
                    in mere seconds. Lastly, using frameworks shows that you have knowledge of how frameworks work. This is something that is always a plus if you want 
                    to be a good frontend developer.</p>
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle" id="DT">Design Trends Research</h2>
                    <em class="researchQuestion">What are the current design trends?/How do I apply these trends to my portfolio?</em>
                    <br />
                    <HashLink to="/portfolio/#benchmarkCreation" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Benchmark Creation</div></HashLink>
                    <HashLink to="/portfolio/#litResearchTrends" scroll={el => scrollWithOffset(el)}><div class="tag researchTag">Literature Study</div></HashLink>
                    <HashLink to="/portfolio/#peerRevTrends" scroll={el => scrollWithOffset(el)}><div class="tag researchTag">Peer Review</div></HashLink>
                    <p class="researchText"><b id="benchmarkCreation">Benchmark Creation</b>
                    <br /><br /><b>WHY? -</b> Portfolios for media designers, and especially frontend developers, are a niche. Creating something from scratch, 
                    without inspiration, is almost impossible. In this case, benchmark creation is perfect to use. By looking at existing products within my niche, 
                    I can get inspiration and get a feeling of what is good and what not. Professional portfolio sites will gives me both ideas for my own portfolio and 
                    and for good design practices. Also, in my opinion, a benchmark creation does not cost a lot of time and it is fairly easy to do, but it, however, is 
                    difficult to structure. But because of all the benefits, I opted for doing a benchmark creation.
                    <br /><br /><b>HOW? -</b> Search terms like <em class="researchQuestion"><b>frontend developer portfolios</b></em> and <em class="researchQuestion"><b>design trends frontend portfolio</b></em>
                    already brought me to the right path. Using Adobe Behance brought me to a couple of good benchmark, but using Google with the same search terms also gave me some nice 
                    examples of how to make a good frontend portfolio. Also getting inspiration from protfolio sites that I already knew, from succesfull companies in my neighborhood, brought 
                    me to some good examples.  
                    <p class="researchText">Here you can see the examples I have found during the benchmark creation.</p>
                    <a href={benchCreation}>
                        <input type="button" value="Benchmark Creation" class="viewBtn"/>
                    </a>
                    <br /><br /><b id="litResearchTrends">Literature Study</b>
                    <br /><br /><b>WHY? -</b> There are a lot of sources online that talk about the current design trends. By referring to these 
                    sources, I could get a view of what is important in the current design landscape and I could find out about things I would have 
                    never tried out myself. This literature study is more focussed on finding best pratices and guidance instread of actual contextual 
                    information.
                    <br /><br /><b>HOW? -</b> The search terms that I used to find my sources are the following: 
                    <ul>
                        <li>AI in (media) design</li>
                        <li>Frontend developer design trends</li>
                        <li>Media design trends 2023</li>
                        <li>Coding AIs</li>
                    </ul>
                    With these search terms, I came to the sources that you can find in the literature research document at the bottom of this 
                    paragraph. The results were quite interesting. I found that there are AIs that can turn wireframes or sketches into designs and that there are 
                    also some AIs that can turn an image into static code. Dark mode is very popular currently and that is for good reason. Not alone can you choose for 
                    a different style, but it also has benefits in specific circumstances, like dark mode in winter that makes sure that you do not get blinded by a 
                    bright white light. Animations and SPAs (Single Page Applications) are very popular as well. Animations can be personalized and they make a product 
                    more interactive. And by programming a SPA, the Search Engine Optimalization is great and if the site has already been loaded, since going to another 
                    component does not reload the page, you do not even need to have internet to visit all the elements on the site.
                    <br /><br /><a href={DT}>
                    <input type="button" value="Literature Study" class="viewBtn"/>
                    </a>
                    <br /><br /><b id="peerRevTrends">Peer Reviews</b>
                    <br /><br /><b>WHY? -</b> By using peer reviews, I could let a lot of media designers easily check if my findings of the benchmark research 
                    were any good. By making sure that I get good feedback from my peers, who have to make the same thing, I could easily trace some points of 
                    improvement or get validation if my findings are in the right direction.
                    <br /><br /><b>HOW? -</b> I did a very unformal way of a peer review. While at school, I was sitting at a table with five other students, the peers. I showed 
                    them what I had found during my benchmark creation and asked their opinion. I told what I was using as main inspiration and how I would apply other elements to 
                    my portfolio. And when my peers said that everything was good, I asked why something was good.
                    <br /><br />Because of this peer review, I got validation that I was thinking in the right direction. My peers told me that my vision and finding 
                    were quite good. They liked what colors I was going for, how I was going to structure the projects card and how I was going to make the navbar have the 
                    HTML tags. These ideas all came from the results of the benchmark creation. However, the points I could improve on were the structure of the benchmark creation document and 
                    that I should keep in mind to not just rely on inspiration from this benchmark creation, but to keep open to other ideas and remember to give it a 
                    personal touch. Unfortunately, I have not made a document out of this peer review, because it was very unformal and not really planned out very much. 
                    Next time I will keep in mind to document the peer review.
                    <br /><br /><b>Conclusion</b>
                    <br /><br />Currently, there are a lot of design trends, with one of the most important being Artificial Intelligence. 
                    Designs can be made or perfected with online AI-tools, as found by my literature research. I tried out two of these tools: Visily and Uizard. I found that AI can indeed make the 
                    process of design way easier than making everything from scratch. And from peer reviews and benchmark creation I got a lot of inspiration and ideas of 
                    how to make a good design and I got some validation and feedback about how I wanted to structure the design. With the benchmark creation, I created the 
                    main style for my portfolio and got inspiration for how I was going to make some elements.</p>
                    </div>
                    <div data-aos="fade-up">
                    <div class="researchImg uizard"></div>
                    <p class="researchText">View the whole research document with the button below.</p>
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle">Animations and Frameworks</h2>
                    <em class="researchQuestion">How do I use animations in CSS/JavaScript?/What frameworks will help me with animations and responsiveness?</em>
                    <br />
                    <HashLink to="/portfolio/#comp-study"><div class="tag researchTag leftTag">Competitive Analysis</div></HashLink>
                    <HashLink to="/portfolio/#comp-study"><div class="tag researchTag">Literature Study</div></HashLink>
                    <p class="researchText"><b id="comp-study">Competitive Analysis & Literature Study (combination)</b>
                    <br /><br /><b>WHY? -</b> By combining a competitive analysis and a literature study, I could find out what the best framework to use is 
                    for me. A competitive analysis gives me the opportunity to see what option (framework) is the best in a set of options and to use arguments based 
                    on findings from sources online, I could narrow down which framework was most effective and efficient for me to use or to learn. By using the literature 
                    study, I could also find out about some libraries for animations to eventually use in my portfolio.
                    <br /><br /><b>HOW? -</b> I already had quite some knowledge about frameworks like ReactJS and Vue, but by delving deep into these frameworks, I 
                    was able to find the differences in the more niche details. This way, I could let literature support my statements about why a certain 
                    framework is better to use than another for me. Search terms involved search terms like
                    <ul>
                        <li>Most used frontend frameworks</li>
                        <li>State of JS survey</li>
                        <li>Comparison of popular frontend frameworks</li>
                        <li>React vs. Vue</li>
                        <li>JavaScript vs. PHP</li>
                        <li>Vanilla JS vs. frameworks</li>
                        <li>Best animation libraries</li>
                        <li>CSS animations and JS animations</li>
                    </ul>
                    By using these search terms, I found out the using a framework is never as fast and smooth as Vanilla JavaScript, but they give your code 
                    structure and they introduce components and extra functions. Angular already quickly showed itself to be very difficult to learn, to use and it turned 
                    out to be very slow, compared to other frameworks. Svelte was an interesting framework, but since it was fairly new, there wasn't a big enough community 
                    for it yet, to make solving programming problems easier. It was, however, very well reviewed in State of JS, so it is an interesting prospect for the future, when 
                    the community is bigger. Eventually, React and Vue proved themselves to be fairly similar in functions, speed and structure. Since I had quite some experience with 
                    React already, I decided to go for React, to save some time and since it was so similar. For the animations, I found out about ScrollRevealJS, AnimeJS and 
                    GSAP, which are libraries with built in animations, that I could use for my portfolio.
                    <br /><br /> <a href={AF}>
                    <input type="button" value="Animations & Framework Research" class="viewBtn"/>
                    </a>
                    <br /><br /><b>Conclusion</b>
                    <br /><br />By utilizing competitive analysis combined with the literature study, the most efficient approach for my programming was found. I found that React was the way 
                    to go, because React has great support from, for example, Meta, Netflix and PayPal. I also already had some experience with React, which helped me with 
                    the time restraints. But what made React so important, was that React boosts Search Engine Optimalisation (SEO) greatly, and for my portfolio to eventually 
                    be seen by more people, this is an absolute must. Using a framework also shows that I can be flexible with coding and I am not forced to only use normal 
                    JavaScript, which is something that frontend companies will appreciate. 
                    </p>
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
                    <h1 class="researchTitle">Ideate, Prototype and Test</h1>
                    <h2 class="researchSubtitle">Inspiration</h2>
                    <p class="researchText"><b>Main Inspiration</b>
                    <br /><br />My main inspiration was from the site of a local media company called Cult. They have just recently updated their site to make 
                    it more visually pleasing and to improve user experience on the site. But the main reason why this design stood out to me, was that Cult is the rising star among 
                    start-ups in the region where I live. Within only two years of existing, they have already made videos and commercials for companies like McDonalds or football clubs, like 
                    VVV-Venlo and Fortuna Sittard. These big clients all see the work that Cult. has done on their portfolio site and Dirk Jeurissen, co-owner of Cult., said that with the new 
                    site, there was a big increase in people looking through their entire portfolio, because it was very nice and instinctive to go through. And next to these 
                    reasons, I also really liked the design, what drove me to use this as main inspiration. 
                    <br /><br /><b>Color Scheme</b>
                    <br /><br />I wanted to go for a professional and slick color scheme, and with color psychology this brought me to the colors 
                    blue and purple. These colors, for example, stand for Trust, Competance and Ambition. The white also shows my Honesty, Simplicity and 
                    Cleanliness. With these colors, I make sure that readers immediately have a certain idea with who I am and what I do. Also an idea of my main style 
                    of design can be created when seeing the colors in the entirety of the portfolio.  
                    <br /><br />
                    <div data-aos="fade-up" >
                    <div class="researchImg colorPsy"></div>
                    </div>  
                    <b>Conclusion</b>
                    <br /><br />After the research, I had a couple of design trends and example sites as inspiration. By using tools like 
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
                    <div class="tag researchTag leftTag">Peer Review</div>
                    <div class="tag researchTag">Co-Reflection</div>
                    <p class="researchText"><b>Wireframing Tools</b>
                    <br /><br />For making the design, I tested a couple of tools. These tools were Uizard, Visily, Figma and Adobe XD. Figma and Adobe XD were 
                    both platforms I already worked with and I do like them, but they don't have AI generated wireframes from images or sketches. And since time was of the 
                    essence, using AI to create the wireframe would be much more efficient. So it was between Visily and Uizard. While testing the platforms, I noticed that Uizard had 
                    way more buttons and menus and it showed a lot of editing possibility. Visily only had three buttons in the side menu and it looked like it didn't have many functions. 
                    That is, until you open the menus and see all the possibilities. But eventually I chose Uizard, because with the extra buttons I the side menu, it felt way more 
                    structured. Functionality of both platforms was the same, down to the AI options. The only difference is the Uizard has a bit more AI functions. So that is why I chose Uizard. Looking back at this choice, Visily 
                    probably would have been the better option, since Uizard had a couple of weird issues, like not being able to change the font to bold in an element with 
                    regular text and eventually, all the menus and buttons to click on became too much of a hassle to go through. Also the extra AI functions that Uizard had, I 
                    didn't even use and I will probably also not use in the future. Visily is cleaner with the same functionality, so next time I will try this one out.
                    <br /><br /><b>Iterations by Peer Review and Co-Reflection</b>
                    <br /><br /><b>WHY? -</b> I involved multiple people into the design process, so I could be able to improve my design in places where I thought 
                    it was good, but others felt there was room for improvement. This made me more aware of certain issues within my design and later even my documentation. 
                    Talking to teachers (the stakeholders and experts) and to peers gave me a couple of insights to improve my media product.
                    <br /><br /><b>HOW? -</b> The peer reviews were quite similar to the peer reviews I did during the empathise phase. Again, there was 
                    a very non-formal atmosphere and I was asking what they liked, what they didn't like and why they thought so. But because of this non-formal way 
                    of doing peer reviews, I did not make a document about this. The things that my peers liked were the way that I structured the project cards and they 
                    especially liked the about me section. The points of improvement were that the pictures I used as backgroud for the project cards made the text on them 
                    unclear and that a lot of the text was crammed without much space between the different elements. So I changed the background pictures and darkened the overlay and I 
                    put more space between the different text elements.
                    <br /><br />
                    <div data-aos="fade-up" >
                    <div class="researchImg iteration"></div>
                    </div>  
                    <br /><br /> My midterm review could be seen as a Co-Reflection, since the teachers are stakeholders in this project and I had a feedback/reflection 
                    session with them. This session was planned in advance and I talked mostly about how I achieved the learning outcomes. Paul and Rose gave me a couple 
                    of feedback points, mostly about me having to change my reflections into documentation. I mostly talked about what I did and what I learned, instead of 
                    saying what I did, how I did it and what came out of the research/actions I have done. There were also a few remarks about the design, about that I should make 
                    my list of main skills more visual and that I should add a favicon and give my pages titles, instead of React App with the React favicon.
                    <br /><br />
                    <a href={CR}>
                    <input type="button" value="Co-Reflection Feedback" class="viewBtn"/>
                    </a>
                    <br /><br />
                    <div data-aos="fade-up" >
                    <div class="researchImg skillList"></div>
                    </div>  
                    <br /><br /><b>Conclusion</b> 
                    <br /><br />The AI tool I started using, which I found during the research phase, is <Link to="https://www.uizard.io">Uizard</Link>. This tool helped me create a design 
                    by using AI to give ideas and to tranform sketches and images into full-fledged wireframes. This spared me a great deal of time by instantly 
                    turning my main inspiration into a wireframe. The only lack that this program has, is that it lacks in feature, if you do not buy the full version. Also, you cannot write bold 
                    text in a text element that has regular text. You have to make two elements for that. But even with those lack in functions, a design could be made almost the same 
                    as with Adobe XD. Compared to Adobe XD, which has no AI assistance of sketches to life, a lot of time was saved during 
                    the design process. <br /><br />
                    By going through multiple tests, I knew what needed improvement. Most of the design was okay, but there were some small elements the needed some changing. 
                    Even with the big time restraints, I was able to still do some testing and find out the improvement points. The most important of which 
                    are that I need to show my skills in the about me section a bit more clearly and aestetically pleasing, and that I need 
                    to write more in a conclusive way instead of a reflective way. Most other feedback point were smaller things, like images making 
                    the text overlay unreadable or giving my pages names and a favicon. Unfortunately, because of the aforementioned time restraints, 
                    a test report couldn't be written.</p>
                    </div>
                    <div data-aos="fade-up">
                    <div class="researchImg design"></div>
                    </div>
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