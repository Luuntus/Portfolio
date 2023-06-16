import React, { useState } from "react";
import Navbar from "./components/navbar";
import RG from "./documents/Reading Guide International Week.pdf";
import PP from "./documents/Project Plan International Project.pdf";
import IQ from "./documents/Interview Questions.pdf";
import SI from "./documents/Schoolplein14 interviews.pdf";
import { Link } from "react-router-dom";
import poster from "./photos/Soft Purple Illustrative Travel Tips Infographic Poster.png";
import FS from "./documents/Feasibility solutions (Liangyu & Niels).pdf";
import CR from "./documents/Research-Group1(Maarten&Umair).pdf";
import CS from "./documents/cardSorting.jpg";
import CD from "./documents/Concept document.pdf";
import video from "./photos/Untitled.mp4";
import groupPhoto from "./photos/groupPhoto.jpg";
import AOS from 'aos';
import Footer from "./components/footer";
import { HashLink } from "react-router-hash-link";

function InternationalWeek() {

    AOS.init();

    const [open, setOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);
    const [feasOpen, setFeasOpen] = useState(false);
    const [commOpen, setCommOpen] = useState(false);
    const [brainOpen, setBrainOpen] = useState(false);
    const [ideationOpen, setIdeationOpen] = useState(false);
    const [conceptOpen, setConceptOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleUserOpen = () => {
        setUserOpen(!userOpen);
    };

    const handleFeasOpen = () => {
        setFeasOpen(!feasOpen);
    };

    const handleCommOpen = () => {
        setCommOpen(!commOpen);
    };

    const handleBrainOpen = () => {
        setBrainOpen(!brainOpen);
    };

    const handleIdeationOpen = () => {
        setIdeationOpen(!ideationOpen);
    };

    const handleConceptOpen = () => {
        setConceptOpen(!conceptOpen);
    };

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return(
        <>
            <Navbar />
                <div className="bodyContent">
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
                    <h1 class="researchTitle">Empathise and Define</h1>
                    <div data-aos="fade-up">
                    {open ? (<h2 class="researchSubtitle" id="Interviews" onClick={handleOpen}>Preparation Week ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handleOpen}>Preparation Week ⮟</h2>)}
                    {open && (
                    <div data-aos="fade-up">
                    <em class="researchQuestion">What are new and innovative technologies you can use during the International Week?</em>
                    <br />
                    <HashLink to="/internationalWeek/#trendAnalysis" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Trend Analysis</div></HashLink>
                    <HashLink to="/internationalWeek/#poster" scroll={el => scrollWithOffset(el)}><div class="tag researchTag">Design Specification</div></HashLink>
                    <p class="researchText"><b id="trendAnalysis">Trend Analysis</b>
                    <br /><br /><b>WHY? -</b> There are a lot of articles on the internet that talk about specific trends and how to use them in your project. 
                    These trends can simplify the design process in a lot of ways and knowing about these trends, you don't limit yourself to just your own knowledge when 
                    designing a solutions to an opportunity or problem.
                    <br /><br /><b>HOW? -</b> I searched along Google for ICT trends that improve the design process. I also went to all of the inspiration sessions 
                    that Fontys arranged and got some trends from there. Lastly, there were also trends that already popped in my head, like AI. We distributed the work among the 
                    group mates and eventually, I went more in depth about AI, as deliberated by the group.
                    <br /><br /><b>Results -</b> AI can be used for a placethora of things during the international week. It can be used to create 
                    schematic designs, to create avatars (something we eventually did), but it can also be used as an autonomous learing tool. With AI, 
                    a lot of data can be used and with machine learning, an AI model can sometimes even predict the future. These things can all be used to keep 
                    in mind when developing a concept to not limit yourself when making a concept.
                    <br /><br /><b id="poster">Design Specification</b>
                    <br /><br /><b>WHY? -</b> We made a poster about our findings from the research, to easily see what was researched and to 
                    make the information as easily readable as we can. With a poster, our everything we researched was presentable, even to people 
                    with lesser knowlegde about ICT-Solutions.
                    <br /><br /><b>HOW? -</b> We used Canva to make an aestically appealing poster. Canva also allowed us to collaborate on the poster and 
                    divide the work between the groupmates. We used a template and made changes according to the information we were putting on the 
                    poster.
                    <br /><br /><b>Results -</b> The result is a poster with a short summary of the results of the research done in the preperation week. 
                    Of course, it is visually appealing and the text is kept to a minimum, since that is how a poster should be. The poster can be seen here: 
                    <br /><br />
                    <div data-aos="fade-up">
                    <img src={poster} alt="poster" style={{width: "60%"}}/>
                    </div>
                    </p>
                    </div>)}
                    </div>
                    </div>
                    <br /><br />

                <div data-aos="fade-up">
                    {userOpen ? (<h2 class="researchSubtitle" id="Interviews" onClick={handleUserOpen}>User Research ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handleUserOpen}>User Research ⮟</h2>)}
                    <em class="researchQuestion">What are the preferred play activities and engagement patterns of children in the target age group within the context of Schoolplein14, and how can this knowledge inform the design of technological innovations to encourage outdoor play?</em>
                    <br />
                    {userOpen && (
                    <div data-aos="fade-up">
                    <HashLink to="/internationalWeek/#targetAudienceInterview" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Interviews</div></HashLink>
                    <p class="researchText"><b id="targetAudienceInterview">Interviews</b>
                    <br /><br /><b>WHY? -</b> By interviewing some children and their parents, I could get an understanding of what the kids 
                    wanted and what they currently have on the Schoolplein14. With this knowledge, an impression could be formed about what brainstormed 
                    ideas for a Schoolplein14 coating are good and fit the children that play there and which ones do not.
                    <br /><br /><b>HOW? -</b> At first, we visited a Cruyff Court and started talking to the youth at the Cruyff Court. A 
                    Cruyff Court is not the same as a schoolplein14, but we were asking more questions about the benefits of the Cruyff Court, to 
                    get an idea of what was good about the initiative of Cruyff. After that, we went to a schoolplein14 and we interviewed children who were 
                    just finishing school, with permission from parents/guardians of course. We had prepared some questions and also some ideas to also immediately 
                    get some sort of testing done.
                    <br /><br /><b>Results -</b> It was clear that weather did not matter to the children. It was moderately rainy and the kids still played outside 
                    like it was sunny. The school and the children were really proud about Cody Gakpo, a professional Dutch footballer, who was a student at this school. 
                    The school had a running track and the goal game field as coatings and a lot of children wanted to play hockey, but the school did not have the supplies for 
                    this, in terms of hockey sticks. For a lot of children, it didn't really matter what they were doing, because they were just playing around whatever they had. 
                    There was one thing that the children wanted changed, and that was the plants and bushes along the playground, because often a ball landed in these plants and the 
                    children thought that that was a shame, because it damaged the plants. This showed that the children were already pretty invested in their evironment. A full report was not 
                    written about the interviews, since the interviews were quite hectic and due to the short nature of the international week, 
                    we also had to cut it due to time restraints, to finish our concept.</p>

                    <p class="researchText">My group mates Umair and Maarten also did some more research into our target audience, in the form of a literature study. It was found that soccer is 
                    still the most popular sport amongst both the boys and the girls, followed by skipping rope and tag. But that doesn't mean that other sports are not important. 
                    Games with a lot of social interaction are showed to be the most popular games on the playground. The kids (ages 6-12) also start to get more connected with friends, often 
                    with friends from the same gender. And this makes a small devide between the boys and the girls of these ages. The boys were 
                    more physically active during recess than girls and were more likely to engage in team sports, such as soccer and basketball. 
                    Girls were more likely to engage in creative and social activities, such as drawing, reading, and talking with friends.</p> 
                    <p class="researchText">View the whole research document with the button below. (Note that I did not directly work on the literature research)</p>
                    <a href={IQ} style={{display: "inline-block"}}>
                        <input type="button" value="Interview Questions" class="viewBtn"/>
                    </a>
                    <a href={SI} style={{display: "inline-block", marginLeft: "30px"}}>
                        <input type="button" value="Interview Documentation" class="viewBtn"/>
                    </a>
                    <a href={CR} style={{display: "inline-block", marginLeft: "30px"}}>
                        <input type="button" value="Literature Research" class="viewBtn"/>
                    </a>
                    </div>)}
                    </div>

                    <br /><br />
                    <div data-aos="fade-up">
                    {feasOpen ? (<h2 class="researchSubtitle" id="Interviews" onClick={handleFeasOpen}>Feasibility Ideas ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handleFeasOpen}>Feasibility Ideas ⮟</h2>)}
                    <em class="researchQuestion">"What is the potential value and feasibility of the brainstormed ideas in effectively encouraging outdoor play among children in the context of Schoolplein14?"</em>
                    <br />
                    {feasOpen && (
                    <div data-aos="fade-up">
                    <HashLink to="/internationalWeek/#compAnalysis" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Competitive Analysis</div></HashLink>
                    <p class="researchText"><b id="compAnalysis">Competitive Analysis</b>
                    <br /><br /><b>WHY? -</b> We needed to know what the pros and cons of our ideas were, to see which ideas would be the best overall. 
                    Another benefit of doing a competitive analysis is that you look a your solutions from multiple sides, the goods and the bads to inform the 
                    stakeholder about why they should use this solution and vice versa.

                    <br /><br /><b>HOW? -</b> First, I wrote down our ideas again and then started to think in the values of the Cruyff Foundation. 
                    I coupled the values and the SDG's of the Cruyff Foundation to these ideas and I visualized if they were in line with the 
                    ideals. I also checked the results from the interviews to see how they line up with our ideas. Then I checked technical 
                    feasibility and financial feasibility, since the Cruyff Foundation does have a budget, even if they said that we could think of the most 
                    crazy ideas, so we would not limit ourselves in the design process.  
                    <br /><br /><b>Results -</b> We had three ideas: A beamer that projects lights in a musical chairs type game, a running track with sensors/cameras that measures your speed and shows you running as an avatar and an expansion on the 
                    muscial light with all kinds of different games/patterns stored in the beamer. The first idea showed promise, by being easy-to-use and being sustainable (fun) 
                    on a long-term. The biggest downside were that it required building a sound and light system, which would be a big thing for a primary school and 
                    a non-profit organisation. This same downside also applied to the third idea, but the third idea had more games in it and was even more 
                    accessible, with the different games. As for the running track, it was very low-cost and easy to make and the avatars would encourage the kids to 
                    try running out to see themselves as a fictional character. The two biggest downsides from this were that this could become very competitive, to a 
                    point were it isn't fun anymore and that people could make fun of each others running.
                    <br /><br />Eventually, we decided not to go with any of these ideas, since for none of these it felt like the pros 
                    outweighed the cons. We did took a liking to the music aspect and decided to continue with the idea of music, but on a larger 
                    scale, so that the pros would eventually outweigh the cons. We knew that no idea would be absolutely perfect, but these ideas were just not of 
                    enough benefit.</p>
                    <a href={FS} style={{display: "inline-block"}}>
                        <input type="button" value="Feasibility Solutions" class="viewBtn"/>
                    </a>
                    </div>)}
                    </div>

                    <br /><br />

                    <div data-aos="fade-up">
                    {commOpen ? (<h2 class="researchSubtitle" id="Interviews" onClick={handleCommOpen}>Communication ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handleCommOpen}>Communication ⮟</h2>)}
                    {commOpen && (
                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle" id="Communication"></h2>
                    <p class="researchText">Communication went really well with my group mates. We could get everything done with each other and 
                    everyone was on location every day. We even did some things after school together, just to learn more about cultures and each other. 
                    With my advisor (Bernhard Sill), we had a good connection. We briefed him every day about progress and he also even joined the group photo. 
                    In short, The communication in the group was seamless. Tasks were done when they were expected and our stakeholders were constantly briefed about 
                    our progress. The entire group is even following each other on Instagram to keep in touch.</p>

                    <img src={groupPhoto} alt="group photo" style={{width: "90%"}}/>

                    </div>)}
                    </div>

                    <br /><br />

                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle" id="Conclusion">Conclusion</h2>
                    <em class="researchQuestion">"How can the integration of synthetic media, mixed reality, artificial intelligence, and/or big data in the design of Schoolplein14 and its surrounding environment effectively encourage children and young people to engage in outdoor play and physical activities?"</em>
                    <p class="researchText">By grabbing existing ideas and applying technical solutions to them, a lot can be made interesting. By incorporating physical challenges, blending
                    technology with nature, fostering creativity and customization, promoting social interaction, and considering age-appropriate content, we can create engaging experiences that encourage outdoor
                    play and support children's physical, cognitive, and social development. Children nowadays grow up in a world of technology and entertainment. The gamification element of sporting would 
                    bring entertainment, technology and sporting together. This way, children will learn about technology, while also gaining all the benefits of sporting.</p>
                    </div>

                    <br /><br />

                    <div data-aos="fade-up">
                    <h1 class="researchTitle">Prototype and Ideate</h1>
                    {brainOpen ? (<h2 class="researchSubtitle" id="Interviews" onClick={handleBrainOpen}>Brainstorming ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handleBrainOpen}>Brainstorming ⮟</h2>)}
                    {brainOpen && (
                    <div data-aos="fade-up">
                    <HashLink to="/internationalWeek/#cardSorting" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Card Sorting</div></HashLink>
                    <HashLink to="/internationalWeek/#sketching" scroll={el => scrollWithOffset(el)}><div class="tag researchTag">Sketching</div></HashLink>
                    <p class="researchText"><b id="cardSorting">Card Sorting</b>
                    <br /><br /><b>WHY? -</b> By thinking up all kinds of ideas and eventually sorting them, every group member could put their ideas 
                    on paper. And when sorted, we could see what categories or ideas overlap with each other, to narrow down a specific direction or idea 
                    for the design process.
                    <br /><br /><b>HOW? -</b> Everyone in the group had five minutes to write down whatever ideas they had in their mind for a 15th coating for 
                    the Johan Cruyff Foundation. We wrote them down on post-its and  put them all on a big canvas. After this, we sorted everything in categories 
                    and discussed about the card and categories.
                    <br /><br /><b>Results -</b> There immediately was a mutual interest in applying music to innovate upon the existing coatings of schoolplein14.
                    Using projectors or lights was also a thing that we all agreed on. With projectors and light, a lot of games can be played, since the lights can change 
                    to whatever game the kids would like to play. A lot of technical possibilities came to the forefront, even from the students who were not studying 
                    ICT.
                    <br /><br /> 
                    <img src={CS} alt="cardSorting" style={{width: "60%"}}/>
                    <br /><br /><b id="sketching">Sketching</b>
                    <br /><br /><b>WHY? -</b> We proceeded the brainstorming by drawing what we thought was going to be the new innovation for Schoolplein14 
                    for the Cruyff Foundation. By doing this, we could see what our groupmates were thinking and we had some visualization of what direction 
                    everyone wanted to go in. 
                    <br /><br /><b>HOW? -</b> We all grabbed an A5 piece of paper from Umair's sketch book and we started drawing whatever we thought was going to 
                    be the next innovation. Because of the card sorting, music and ICT-solutions were the main focus during the sketching and like the, we could see 
                    in what direction we wanted to go in. 
                    <br /><br /><b>Results -</b> Everyone had made some sort of rythmn game that combines using a projector for changing lights 
                    and music to get the children to play. But we had this in all sorts of ways. A projected piano where you had to jump on, or some 
                    virtually playing instrument were a couple of the ideas. Eventually, we combined all these ideas together to make the musical light room, 
                    which was a projector what could project spotlight with which you can play a game equivalent to musical chairs. But you could also play games like 
                    throw the ball in the blue spotlight or run to the yellow light zone etc. Everything, of course, with music. Unfortunately, these 
                    sketches were not photographed.
                    </p>
                    </div>)}
                    </div>

                    <br /><br />

                    <div data-aos="fade-up">
                    {ideationOpen ? (<h2 class="researchSubtitle" id="Interviews" onClick={handleIdeationOpen}>Ideating on ideas ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handleIdeationOpen}>Ideating on ideas ⮟</h2>)}
                    {ideationOpen && (
                    <div data-aos="fade-up">
                    <HashLink to="/internationalWeek/#ideation" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Ideation</div></HashLink>
                    <p class="researchText"><b id="ideation">Ideation</b>
                    <br /><br /><b>WHY? -</b> Ideating upon our ideas made the final concept way better. We could have just settled 
                    on what we already had, but there is always improvement to be found on places that you would overlook.  
                    <br /><br /><b>HOW? -</b> By referring to the experts (the teachers and supervisors), the demands of our stakeholder Axel and the 
                    interviews, where we got some opinions on what ideas we already had. With that feedback, we improved upon the existing ideas we had 
                    and we made new ideas. Eventually, one of these ideas was used for the final concept.
                    <br /><br /><b>Results -</b> By iterating our ideas, we went from just music, to music and a beamer, to the musical lights game (the 
                    musical chairs type game), to the musical lights version with extra games to play. And finally, we came to the idea of creating a rock 
                    band type game, all because of the feedback we got along the way. The feedback was often to think big and to check the target audience and 
                    see what they want. That brought us to the eventual concept.</p>
                    </div>)}
                    </div>

                    <br /><br /> 

                    <div data-aos="fade-up">
                    {conceptOpen ? (<h2 class="researchSubtitle" id="Interviews" onClick={handleConceptOpen}>Final Concept ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handleConceptOpen}>Final Concept ⮟</h2>)}
                    {conceptOpen && (
                    <div data-aos="fade-up">
                    <HashLink to="/internationalWeek/#concept" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Concept</div></HashLink>
                    <HashLink to="/internationalWeek/#designSpec" scroll={el => scrollWithOffset(el)}><div class="tag researchTag">Design Specification</div></HashLink>
                    <HashLink to="/internationalWeek/#pitch" scroll={el => scrollWithOffset(el)}><div class="tag researchTag">Pitch</div></HashLink>
                    <p class="researchText"><b id="concept">Concept</b>
                    <br /><br /><b>WHY? -</b> Making a concept helps stakeholders understand what you are going to make. Your eventual 
                    product is going to be based upon this concept, so to make a schematic diplay. For the Cruyff Foundation, they will recieve 
                    a the plan of the 15th coating that we made, so they can perfect it as they see fit and tweak it where they want. With the concept, 
                    tweaks can still easily be made, compared to a full prototype. 
                    <br /><br /><b>HOW? -</b> For the final concept, we took all the findings from our research and card sortings and brainstorming 
                    sessions. With all the feedback in mind, we started developing the concept by sketching and we described it in a concept document. 
                    We also made a video about the concept.
                    <br /><br /><b>Results -</b> We made a concept document, some sketches and a video as concept. The concept became a 
                    rock band type game, where the children 'play' an instrument by jumping on the lights in the ground that light up. It is also accessible 
                    for kids with disabilities, since the 'singer' just has to make noise to reach the right notes and get points. The groups get randomly formed 
                    by bracelets that light up when it's your turn. By doing this, we encouraged team play and not locking people out of the game for being less good. 
                    The kids will see their avatars play on a big projected screen on the wall, and difficulty is defined by AI, to not make everything too 
                    difficult or easy for the children. To still also have a little competitiveness, of 2 teams of maximum 4 players should play the game. The winner 
                    will be determined by the amount of points and correct light they have hit.
                    </p>
                    <a href={CD} style={{display: "inline-block"}}>
                        <input type="button" value="Concept Document" class="viewBtn"/>
                    </a>
                    <br /><br /> 
                    <p class="researchText"><b id="designSpec">Design specification</b>
                    <br /><br /><b>WHY? -</b> Making a visual representation of the concept removes any kinds of miscommunication and 
                    misinterpretation of the concept. The video we made would also work as a sort of pitch and documentation of the design 
                    process.
                    <br /><br /><b>HOW? -</b> I filmed our design process during the international week and we eventually edited it with 
                    iMovie. We also used some images from the interviews. We rendered this video and presented it in front of our stakeholders as a 
                    final presentation.
                    <br /><br /><b>Results -</b> During the final presentation, our original stakeholder Axel couldn't be there, so he invited someone else 
                    from the Cruyff Foundation. This is necessary context, because Axel told us not to limit ourself to anything, not even budget or 
                    feasibility. The person who gave us feedback on the video did care about feasibility and budget. Of course way paid slight attention 
                    to these points, but we did not limit ourselves on these points. This resulted in the feedback being that we had a good and creative idea, 
                    but that feasibility and budget would be a major issue.</p>
                    <div data-aos="fade-up">
                    <iframe src={video} frameborder="0" title="video" style={{width: "55vw", height: "60vh"}}></iframe>
                    </div>

                    <br /><br /><p class="researchText"><b id="pitch">Pitch</b>
                    <br /><br /><b>WHY? -</b> I also prepared a pitch for our concept to present in case we were chosen as winner of the category. 
                    I could give a broader explaination about what the concept was about, how it would be structured and how it would eventually look like 
                    in practice. This all to make the concept as clear as possible to the stakeholders.
                    <br /><br /><b>HOW? -</b> The pitch was made with Canva again. I used a template and changed the graphics to fit our concept. I put in all the 
                    important information about the concept: the context of the Cruyff Foundation and their vision, the opportunity and the goal and of course the 
                    detailed view of the concept. I was going to use the story about Johan Cruyff sporting with a child with Down syndrome as storytelling to show that 
                    we really understood the context of the Foundation, but unfortunately, I could not do my pitch, since my group wasn't chosen as the winner 
                    in our category.
                    <br /><br /><b>Results -</b> The result is a good looking pitch with everything in it. The concept was eventually given a name thanks to feedback from 
                    the teacher: Jam Jumpers. No script was writting for this pitch, because I want to keep a red line in my head, but not prepare everything and 
                    choke on my words if I forget something. I did not get further feedback on the pitch, since I wasn't able to do the pitch, as told before. 
                    The pitch can still be found here: <Link to="https://www.canva.com/design/DAFiryajJlw/0e3mnH4NFBc0VrUC41d8JA/edit?utm_content=DAFiryajJlw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                    Link to the Canva Pitch</Link></p>
                    <div class="researchImg pitch"></div>
                    </div>)}
                    </div>
                    </div>
                </div>
                <Footer />
        </>
    )
}

export default InternationalWeek;