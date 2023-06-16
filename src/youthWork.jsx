import React, {useEffect, useState} from "react";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";
import Footer from "./components/footer";
import RG from "./documents/Reading Guide Group Project.pdf";
import PP from "./documents/Project Plan - Group Project.pdf";
import AOS from 'aos';
import IR from './documents/Youth Work in Germany.pdf';
import ER from './documents/Education of social workers.pdf';
import NR from './documents/What are the most used social platforms for youth internationally and in the Netherlands_.pdf';
import { HashLink } from "react-router-hash-link";
import RP from "./documents/Research Phase.pdf";
import sketches from "./documents/sketches.pdf";
import prototype from "./documents/Design Phase.pdf";
import testReport from "./documents/Testing Report.pdf";
import groupFeedback from "./documents/Group Feedback Niels.pdf";

import 'aos/dist/aos.css'; 

function YouthWork() {

    AOS.init();

    const [open, setOpen] = useState(false);
    const [eduOpen, setEduOpen] = useState(false);
    const [natOpen, setNatOpen] = useState(false);
    const [interviewOpen, setInterviewOpen] = useState(false);
    const [softwareOpen, setSoftwareOpen] = useState(false);
    const [sketchOpen, setSketchOpen] = useState(false);
    const [c4Open, setC4Open] = useState(false);
    const [wireframeOpen, setWireframeOpen] = useState(false);
    const [prototypeOpen, setPrototypeOpen] = useState(false);
    const [testOpen, setTestOpen] = useState(false);
    const [feedbackOpen, setFeedbackOpen] = useState(false);

     const handleOpen = () => {
        setOpen(!open);
    };

    const handleEduOpen = () => {
        setEduOpen(!eduOpen);
    };

    const handleNatOpen = () => {
        setNatOpen(!natOpen);
    };

    const handleInterviewOpen = () => {
        setInterviewOpen(!interviewOpen);
    };

    const handleSketchOpen = () => {
        setSketchOpen(!sketchOpen);
    };

    const handleC4Open = () => {
        setC4Open(!c4Open);
    };

    const handleWireframeOpen = () => {
        setWireframeOpen(!wireframeOpen);
    };

    const handlePrototypeOpen = () => {
        setPrototypeOpen(!prototypeOpen);
    };

    const handleTestOpen = () => {
        setTestOpen(!testOpen);
    };

    const handleFeedbackOpen = () => {
        setFeedbackOpen(!feedbackOpen);
    };

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
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
                    {open ? (<h2 class="researchSubtitle" id="IR" onClick={handleOpen}>International Research ⮝</h2>) : (<h2 class="researchSubtitle" id="IR" onClick={handleOpen}>International Research ⮟</h2>)}
                    <em class="researchQuestion">What does other international youth work currently do to reach out to the youth?</em>
                    <br />
                    {open ? (<div data-aos="fade-up">
                    <HashLink to="/youthWork/#germanStudy" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Literature Study</div></HashLink>
                    <p class="researchText"><b id="germanStudy">Literature Study</b>
                    <br /><br /><b>WHY? -</b> Because this research was about finding out what happens at youth work in other countries, it was difficult to find 
                    an expert on youth work in that country or to go and do field research. So it was quickly decided that by doing a literature study, we could relatively easily 
                    find how youth work is structured in different countries and eventually see what they do well and what their points of improvement are, to see if we 
                    can use their ideas to benefit Dutch youth work.
                    <br /><br /><b>HOW? -</b> Because my german is pretty good, I could read through the german sites with almost no problems. That is also why some of my search 
                    terms involved german words. At first, I tried finding articles about the structure of german youth work. After this, I also decided to search more into the German 
                    captial of Berlin, to get an idea of how a big city handles youth work. These search terms involved
                    <ul>
                        <li>Jugendarbeit in Deutschland</li>
                        <li>Youth work in Germany</li>
                        <li>German youth work organisations</li>
                        <li>Online Jugendarbeit in Deutschland</li>
                        <li>Youth work legislation Germany</li>
                        <li>Berlin youth work</li>
                    </ul> 
                    Lastly, I tried to find some social media accounts, discord servers and other online presence of youth work organisations in Germany. I did this by searching for Instagram accounts and 
                    Discord servers on their respective platforms. This way, I could get an idea of how far German youth work organisations were in terms of social media presence. For Discord was looking for 
                    public servers and on instagram I was search for accounts, with the following search terms:
                    <ul>
                        <li>Jugendarbeit</li>
                        <li>Online Jugendarbeit</li>
                        <li>Jugendzentrum</li>
                    </ul>
                    <b>Results - </b>
                    With these search terms, I found a site that had a lot of information about how German youth work was structured. It has three levels: Local, State and 
                    national. Local youth work are defined as the local youth centres that actually deliver the youth work and they structure their youth work individually. At the state level, 
                    there are big organisations that overlook and fund the local level. These organisations also provide the local levels with a bit of structure, but only for their province. Two neighboring 
                    provinces can greatly differ in the ways of youth work, because of this. The national level, in turn, fund the state level and they approve or decline new laws for youth work in 
                    Germany. They also make a report about the state of youth work over the last year and the funding plan for the near future.
                    <br /><br />
                    On Instagram I already found a lot of accounts from youth centers all over Germany. But something I noticed when I was scrolling through some posts, was that 
                    most activities were either just digital or physical. There were no online gaming events or esport events planned on any account I found. For the Bielefeld Discord 
                    server that I found, I found out that there were online activities planned. So a lot of German youth work organisations already had an online presence, which was good, 
                    but almost none of them used online events or activities to their advantage.
                    <br /><br /><a href={IR}>
                        <input type="button" value="Literature Study" class="viewBtn"/>
                    </a>
                    <br /><br />
                    <div data-aos="fade-up">
                    <div class="researchImg bielefeld"></div>
                    </div>
                        
                    <br /><br /><b>Conclusion</b>
                    <br /><br />
                    In general, youth work in Germany is well developed. The big problem is that in almost every region, the youth work is completely different. 
                    There is enough funding for this youth work, but the structure can still have some improvements, like making sure that youth work is equally good 
                    everywhere. There are also not many youth work organisations in Germany that actually use online activities to their advantage. A lot of organisations do 
                    have social media presence on Instagram for example, but there is almost no usage of Discord. However, there are some organisations that are already more 
                    advanced on social media usage and it is also advised to do so.  
                    </p>
                    </div>) : (null)}
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    {eduOpen ? (<h2 class="researchSubtitle" id="ER" onClick={handleEduOpen}>Education of social media ⮝</h2>) : (<h2 class="researchSubtitle" id="ER" onClick={handleEduOpen}>Education of social media ⮟</h2>)}
                    <em class="researchQuestion">How can we educate social workers on the use of online media?</em>
                    <br />
                    {eduOpen ? ( <div data-aos="fade-up"><HashLink to="/youthWork/#EduStudy" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Literature Study</div></HashLink>
                    <HashLink to="/youthWork/#EduCo" scroll={el => scrollWithOffset(el)}><div class="tag researchTag">Co-Creation</div></HashLink>
                    <HashLink to="/youthWork/#EduCo" scroll={el => scrollWithOffset(el)}><div class="tag researchTag">Co-Reflection</div></HashLink>
                    <p class="researchText"><b id="EduStudy">Literature Study</b>
                    <br /><br /><b>WHY? -</b> Teaching someone something is incredibly hard, especially when it has to be learned autonomously. But there are countless 
                    research reports about certain tactics which increase the chance that the learner remembers what they have learned. By researching what these methods are 
                    and how I can imporove motivation to learn, the eventual goal of teaching social media to youth workers can be achieved easier.
                    <br /><br /><b>HOW? -</b> I already had some experience with teaching and teaching methods form semester 4 ICT & Education. Because of this, I know a couple 
                    of theories that would benefit the learning process. My search terms were in turn based on these theories that I have already learned.
                    <ul>
                        <li>Gamification frameworks</li>
                        <li>Learning Pit</li>
                        <li>Self-Determination Ryan & Deci</li>
                        <li>Vygotsky Circle</li>
                        <li>Forget Curve</li>
                    </ul>

                    <b>Results -</b> Almost all of the educational theories are about trying to get the learner to be motivated and remember what they learn. When someone 
                    tries to learn something, they have to be challenged, but not feel like it's too difficult and that they will never be able to learn it. The ideal situation 
                    is to get the learner in the state that they don't know the answer, but they can get to the answer with some external help. Also, everything that has been learned 
                    has to be repeated a couple of times to make memorisation better and to allow the learner to master the learning matter. By allowing the learner to replicate the 
                    learned actions to, for example, post something to Instagram, they have an easier time remembering what they learned. The added document also includes the results of the 
                    co-creation and co-reflection.

                    <br /><br />

                    <a href={ER}>
                        <input type="button" value="Research Document" class="viewBtn"/>
                    </a>

                    <br /><br /><b id="EduCo">Co-Creation & Co-Reflection</b>
                    <br /><br /><b>WHY? -</b> Co-Creation and Co-Reflection allows me to understand what my stakeholder wants, what they have already tried and 
                    how it worked or didn't work. With this, I was able to understand what methods of education were already used and what methods of education the 
                    stakeholders wanted to use to educate the youth workers. I could also see if the stakeholders liked the idea we had as a group and check if we had 
                    to add or change some things to the idea.
                    <br /><br /><b>HOW? -</b> As a group, we planned a meeting with Dirk-Jan van Soelen, innovations manager at Dynamo Youth Work, and with Matheus 
                    Sales de Moura, manager and youth worker at Pitstop Youth Center. During this interview, I asked what they had already tried in terms of teaching 
                    social media to their youth workers. I also asked them about the idea our group had: an educational platform with quizzes and lessons to learn social 
                    media, with interactive challenges that let you perform actions in a social media platform. This way, we started discussing about the failed attempts of teaching social media and dicuss about the best way to structure our idea.
                    <br /><br /><b>Results -</b> Dirk-Jan quickly started talking about how they tried to create a social media platform for the youth workers and the 
                    youth. He said that the digicoaches (youth workers at dynamo who are good with social media and online presence) at Dynamo also had made a manual about 
                    how to use social media. Both of these ideas flopped, because the youth didn't want to migrate to a platform monitored by youth work and no one wanted 
                    to read a physical manual to become more digital respectively. So when telling Dirk-Jan about our idea, he liked it. He did ask about how the platform 
                    would know that the user had done an action in a social media platform. We talked about letting this be checked by peer reviews, so digicoaches check 
                    if the learning youth worked did the action. Dirk-Jan said that this was too difficult to arrange and asked us to check if we could change this. 
                    <br /><br />
                    After Dynamo, we went to Pitstop and talked with Matheus, who himself is pretty good with social media already, but he said that he had no idea how 
                    to explain social media to his co-workers. He could show them how he did it, but they couldn't replicate his actions. Matheus was very happy with the 
                    idea we came up with, but also had the same remark as Dirk-Jan. But Matheus did say that he definitely saw potential in this idea and that he was 
                    optimistic about this platform helping to teach youth workers about social media. The results of this co-creation and co-reflection are in the same 
                    document as the literature study.  

                    <br /><br /><b>Conclusion</b>
                    <br /><br />In short, when we educate social workers, we need to take into account that their motivation can be very low and that they 
                    will forget certain things. Both of these cons of the learning process can be countered with good teaching strategies and the application of 
                    gamification. This way, not only will the social workers stay motivated, but they will also find it fun to learn, because they can earn digital 
                    goods or even just digital points, which gives a feeling of satisfaction. And that will, in turn, once again boost the motivation and will to really 
                    learn how to use online media properly <br /> <br />
                    I also asked both of them if they had a vision for the final product. Dirk-Jan wanted something digital and Matheus wanted something fun and 
                    engaging, so that motivation wouldn't be a problem. This is where co-creation became a part of the research. And since we already had a very rough 
                    idea of a possible product, I also asked both of them what they thought of our rough idea. The idea was some educational platform/website, that has 
                    DuoLingo as main inspiration. Both Dirk-Jan and Matheus were excited about this and Matheus even called it perfect, but there were still a couple of 
                    things to change. But in general, the idea was well liked, which meant that we were going in the right direction.</p></div>) : (null)}
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    {natOpen ? (<h2 class="researchSubtitle" id="NR" onClick={handleNatOpen}>Social media in the Netherlands ⮝</h2>) : (<h2 class="researchSubtitle" id="NR" onClick={handleNatOpen}>Social media in the Netherlands ⮟</h2>)}
                    <em class="researchQuestion">What are the most used social platforms for youth internationally and in the Netherlands?</em>
                    <br />
                    {natOpen ? ( <div data-aos="fade-up"><HashLink to="/youthWork/#litStudySocialMedia" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Literature Study</div></HashLink>
                    <HashLink to="/youthWork/#trendAnalysisSocialMedia" scroll={el => scrollWithOffset(el)}><div class="tag researchTag">Trend Analysis</div></HashLink>
                    <p class="researchText"><b id="litStudySocialMedia">Literature Study</b>
                    <br /><br /><b>WHY? -</b> By looking into what social media platforms are the most popular in the Netherlands (I did not do 
                    the international ones), I could find out what platforms we should use in our platform.
                    <br /><br /><b>HOW? -</b> I looked into articles that had some statistics about usage of social media in the Netherlands and daily usage in 
                    the Netherlands. I also found some articles that wrote about which age groups use social media the most. The search terms used were the following:
                    <ul>
                        <li>Most used social media in the Netherlands</li>
                        <li>Social media in Nederland</li>
                        <li>Social media in Nederland per leeftijdsgroep</li>
                        <li>Social media usage per age group in the Netherlands</li>
                    </ul>

                    <b>Results -</b> Unfortunately, the results were not so good. I was able to find how many people use certain platforms in the Netherlands and what 
                    the daily usage is, but no concrete numbers about how much certain age groups use certain platforms. A lot of articles did talk about TikTok and 
                    Instagram being the most popular among youth, but in graphs, this doesn't show, since WhatsApp and Facebook have a lot of accounts, but in another 
                    demographic. In the sources that I found, Discord was almost not referenced and SnapChat showed itself not to be used a lot. The most popular platforms 
                    showed themselves to be WhatsApp, Facebook and YouTube. But unfortunately, I could not find anything about what age groups use these platform and see 
                    what the youth uses the most.

                    <br /><br />
                    <a href={NR}>
                        <input type="button" value="Literature study and trend analysis" class="viewBtn"/>
                    </a>

                    <br /><br /><b id="trendAnalysisSocialMedia">Trend analysis</b>
                    <br/><br/><b>WHY? -</b> By looking at the current trends, I could find out what social media platform the youth currently uses the most and what are 
                    platforms that are growing among the youth. This way, I can find out what are the best platforms to put in the learning platform.
                    <br /><br /><b>HOW? -</b> Some of the articles that I found during the literature study, had some trends in them. By checking out what the articles 
                    said about certain trends and future visions of the social media landscape, I could get a general idea of what platforms are mostly used by the youth, 
                    and what platforms are the biggest growers among the same target group.
                    <br /><br /><b>Results -</b> Again, I could not find any hard numbers. But a lot of articles wrote about Instagram being the biggest platform among the 
                    youth, with TikTok being a massive grower. Also something interesting to see, was that BeReal already had a million users after about a year of releasing. 
                    BeReal was also mostly used by the youth. Unfortunately, I again could not find a lot about Discord. The trend analysis was combined with the literature 
                    study in the previous document.

                    <br /><br /><b>Conclusion</b>
                    <br /><br />Unfortunately, a concrete conclusion could not be made from the answers that I found. Seeing WhatsApp, Facebook and YouTube on top of the 
                    most used social media platfroms in the Netherlands, gives a wrong vision of what the youth specifically uses the most. So with the fact the I couldn't get 
                    good results, I asked Fenna Dam, stakeholder of the project and researcher at Garage2020, what she thought to be the best platforms to teach to the social workers.
                    She said that Instagram, SnapChat and TikTok were mainly used when she visited an event at Pitstop. She also said that Discord would be perfect for building an 
                    online community and hosting online events. Unfortunately, she didn't write a report about this, so this conclusion is based upon me seeing Fenna 
                    as a rightful authority and referencing her work, even though there is no report about this.</p>
                    <br /><br />
                    </div>) : (null)}
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    {interviewOpen ? (<h2 class="researchSubtitle" id="Interviews" onClick={handleInterviewOpen}>Interviews and Meetings ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handleInterviewOpen}>Interviews and Meetings ⮟</h2>)}
                    <em class="researchQuestion">Who are the social workers and what are their main tasks in their job?</em>
                    <br />
                    {interviewOpen && (
                    <div data-aos="fade-up">
                    <HashLink to="/youthWork/#ExpInterviewMeetings" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Expert Interview</div></HashLink>
                    <p class="researchText"><b id="ExpInterviewMeetings">Expert Interview</b>
                    <br /><br /><b>WHY? -</b> I wanted to know who the experts in the field of youth work were, what the opportunity was for social media usage and what 
                        their daily tasks are, so I could get a good overview of the world of youth work. So what better way to get this information, than to interview 
                        the experts (the youth workers) themselves.
                    <br /><br /><b>HOW? -</b> We asked our stakeholder Fenna from Garage2020 to give us the contact information for Dirk-Jan from Dynamo youth work and 
                    Matheus from Pitstop youth center. After Fenna had some deliberation with both parties, we were allowed to get the contact information and I was in charge 
                    of calling Matheus, so I did. I called Matheus on his phone and he said he was busy and to send him a message. After messaging via WhatsApp, we got a place and 
                    time and me and my project group started preparing questions regarding the our research questions and we wrote them down. Then, we went to Dynamo and Pistop and 
                    we had our interviews. We also made sure that we arrange a meeting with Fenna every two weeks, to evaluate the progress of the project.
                    <br /><br /><b>Results -</b> The youth workers at Dynamo deal with youth from 4-27 years old, at Pitstop, however, the ages more often are around 
                    13-18 years old. The goal is to let the youth spend time with other youth and let them do activities together. Pitstop also focusses a bit more on the 
                    problematic youth and they educate them to stay on the right path. This can sometimes be very difficult, because a lot of youth has trouble trusting the 
                    authorities. A youth worker should be somewhat of a friend of the youth, but a responsible friend that can let them see the positive and the good side of 
                    things. However, a youth worker should not be a 'pal' or a 'buddy' of the youth, in the words of Matheus, and influence them in a not-so-positive way. 
                    <br /><br />At both Dynamo and Pitstop lied a great opportunity to connect more youth online, but there was a big lack of knowledge to use social media in 
                    the right way to attract youth and to help more youth to connect with others. But the dangers of being online were also a great pain point for the youth workers. 
                    But the opportunity of getting more youth to connect with each other was amazing. Currently, there were almost only physical events, which applied to a specific 
                    group of the youth. But to include the youth who would rather stay at home, being online was the way to go for influencing the youth, in a good way, that do not go out.
                    <br/><br/><b>The results of the interviews can be found in the big research document in the next chapter.</b>
                    </p>
                    </div>)}
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle" id="Interviews">Conclusion</h2>
                    <em class="researchQuestion">How can youth workers from Eindhoven relate and connect to the online world of youth while countering the cons of online media?</em>
                    <p class="researchText">The complexity of social media and the dangers of it are the most important reasons for social workers not to be online. They should be well educated about how 
                    to use social media and how to counter the cons of social media. A social worker should, for example, know what to do when they find out that the youth is up to something bad/is in danger and how to act on this.
                        <br /><br />
                        There are already multiple ideas to get social workers online, like giving them a manual or creating a separate platform for the social workers and the youth, but these possible solutions did not work. Multiple 
                        sounds were heard from the social workers that they wanted something interactive to educate themselves. They want a way to learn everything about social media, in a fun and engaging way.
                        <br /><br />
                        Because of these reasons, our solution became an educational website, with interactive challenges, to learn everything about social media. And even if the youth workers don't know where to start, 
                        they can choose, or they can take a quiz, to focus on the track of an Archetype, as explained in the concept chapter. With this concept, all of the aforementioned points are taken care of and this 
                        will leave social workers with a way to learn social media in an easy, fun and engaging way. 
                        <br /><br />
                        <a href={RP}>
                        <input type="button" value="Research Phase document" class="viewBtn"/>
                        </a>
                        </p>
                        <br /><br />
                    </div>
                <div data-aos="fade-up">
                <h1 class="researchTitle">Design</h1>
                {sketchOpen ? (<h2 class="researchSubtitle" id="Interviews" onClick={handleSketchOpen}>Sketching ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handleSketchOpen}>Sketching ⮟</h2>)}
                    {sketchOpen && (<div data-aos="fade-up">
                    <HashLink to="/youthWork/#sketching" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Sketching</div></HashLink>
                    <p class="researchText" id="sketching"><b>Sketching</b>
                    <br /><br /><b>WHY? -</b> Sketching is a really easy way to make your idea visual and since you don't pour too much time in these sketches, 
                    it isn't as difficult to erase them and start over, compared to full wireframes or prototypes. By easily visualizing my thoughts and ideas, 
                    we could prevent miscommunication about ideas and settle on a rough design.
                    <br /><br /><b>HOW? -</b> With the sketching I used two whiteboards and I drew everthing that was on my mind and together as a group, we judged 
                    what was good and what could use improvement. Then we took pictures of the sketches and we cleaned the whiteboard and started again. All of these 
                    pictures were saved and sent to everyone using Discord. The same we did with the archetypes and their visualization.
                    <br /><br /><b>Results -</b> With the sketches, we resulted in have a nice structure for our product. Everyone had the same vision and we had a good 
                    base for the eventual wireframes and prototype. We also drew out and brainstormed about the archetypes. The archetypes are the visionary, the unifier and 
                    the sentinel. These are based on a content creater, a moderator/event organizer and a protector of online danger respectively. In this way, we magaged to touch 
                    upon every part of the online world.
                    <br /><br />
                    <a href={sketches}>
                        <input type="button" value="View Sketches" class="viewBtn"/>
                    </a>
                    </p>
                    </div>)}
                </div>
                <br /><br />
                <div data-aos="fade-up">
                    {c4Open ? (<h2 class="researchSubtitle" id="Interviews" onClick={handleC4Open}>Software Design ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handleC4Open}>Software Design ⮟</h2>)}
                    <br />
                    {c4Open && (
                    <div data-aos="fade-up">
                    <p class="researchText"><b>C4 Diagram</b>
                    <br /><br /><b>WHY? -</b> I made a C4 Diagram to visualize how the code would be structured and where everything will be saved when using the platform. This 
                    would help me communitcate my vision of the code in an understandable way to both stakeholders and coders alike. With a C4 Diagram, communication about code 
                    will be very smooth.

                    <br /><br /><b>HOW? -</b> We had a lecture about the C4-Diagram from Erik and after the slides were uploaded to Teams, I used the examples to get an idea 
                    of what to put in the C4-Diagram of our platform. Then I used Draw.io to create the C4-Diagram by using drag and drop components, to make the process of 
                    making the diagram easier. I evaluated the diagram by checking Eriks example in teams and by checking the C4-model website via the following link <Link to="https://c4model.com/#SystemContextDiagram">Link to C4 documentation</Link>. 
                    <br /><br /><b>Results -</b> The result is a C4-Diagram about the platform Social Sphere, according to the rules of the C4 model. This model is understandable and clear to make people understand how 
                    the platform and the eventual code is going to look. The diagram can be accessed via the following link <Link to="https://viewer.diagrams.net/?tags=%7B%7D&target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=c4%20diagram.drawio#R7V1pd6O2Gv41OefeD8lht%2F0x27Sdk2nT8bRz51OPjOWYBoMLOIn7668kJBYhFmMMONFMFyNAgJbnfd5Fry70283bTwHYrr%2F4S%2BheaMry7UK%2Fu9C0iaIo6H%2B4ZB%2BX6FONljwFzjIuU9OCufMvpIXssp2zhGHuwsj33cjZ5gtt3%2FOgHeXKQBD4r%2FnLVr6bf%2BoWPMFCwdwGbrH0u7OM1nHp1FTS8p%2Bh87RmT1bZF28Au5gWhGuw9F8zRfr9hX4b%2BH4U%2F9q83UIXtx5rl%2Fi%2BTyVnkxcLoBcJbvAXf%2BP2QFe4wIZr9N0w4JrM%2BBVs6Gf%2B8HfodTXl1Q%2BeYcDOf9tv6flHdLPvsfI7GNqBs40cVCS8XXl1yPF%2FgLvxw%2Bi%2F6Kfno%2F88e%2F6rC5eoyVHvLNBNuF182wH4yzZw6YD4ES5YoIFEqr7QLBd9383K98jV0Z52jfXPzmcnLkMycK7RBaq1fUtPol9P9P%2BklkVaYNLv10x2ErXdgr8BlcVPzhcvnZekyIwrI42FKjPvMvdmr2OvEFRVdujXqlVfS2uxfdcPcrVcaLpN%2FojuNfMdnGsfUVvwn6llRunjZ1P9Hk3%2BevkLPEXb%2FYO1%2FfP7pTpNhn8yrNMv1dbRBve9Sj%2BAYoKKj5cgXENctYIOXtdOBOdbNLpRwSvCH3yD47q3yefqylT%2FNDFReRgF%2FjPMnrF01bylj8iUr8gffMcakMG%2FeXvC0HZlG1dbMgnQm98A13nCQ99Gcw%2BNd%2F1mAyNwv3Qi%2Bt5b3%2FEiMttMPD6UK9SGtwr5Fw%2BPW1Sm4iNani%2Bb5AtpgcoViso0QaGwyvyz0T%2F6TQDRqAIL0glK0o9ZeKGw8QKDCL5limhH%2FgR91ArBHl2SwH98B8V%2Bgx6%2BpjiqMbRcZzF0SgsBxaunpOYU3tAPOnbYIQW8FuA35xBIcSEIPMd7iiuIVn6wKULi3F9Fr6h5UPF8H0ZwU4qO166L5VAG6mKcDIkwY88TQKECvCWRHPHt28B%2FQt2Ef%2ForfJbMnGgNSRUhGpsh7l80%2BzxyL%2FmFxiewI%2BcFX%2FQK9hJfPwC%2BzirxNfB33pKgqFqCohkEJiPlBtjPT%2BQ2hpSe78Ei3KqKpd4oFaBawE0Q2AzfFSFM35nKTC0CLI9WBcDViogrQuEEGoswrImweRR4nSnT8iDeAWibedDWVQFqGyLU1npB7RR%2Fv0IEzWgChWtnWwq9DxhZMWAiCGVouwuhCGt3IUH8EngkM1CAF6hVo0s6rK8JDq%2BicsBoWgudHw1hthRNRGh7GJTgKyqgBHrLa6xkoaOF69vP39ZI9OTwI8vgBMhgKPhvMvOZioXvRHV%2FclxWTwEZphr%2Bi69zF%2BQF8BB3kOJWBAtUE3sFg1QFgihb8Pdus53Tj0KAxEroFRaGmwQy8btiBYZd7wfR2n%2FyPeDep6U38M2J%2FoevvjLp0Q%2F2Luj33RurCB%2FsMwdIzXLQy2NojMs8NIEyFeHDH9lzaVXkaJ894isrBYfQ3wU2rBgFMWFH0wcETzCqlTyaQlS8KrARoUlAJvRLXvEWoQmt7hFjfgpcqp5HrgTJWBXxZ9K7spo1V5E%2BqakoboZCRQTckm8cBu%2FmaKxjuLvfAMcNJaqVoJohUa0FqiXat1qFJkPMfW3GsRZrdmVZ7aa%2FqdfX1ScCpHrq%2FSWe1Xis5vTNNirpN6I0ovkJA4%2BwoC%2BOHfihj6e5wp4CgxcHyQWpMb57jRHXOIjGOL2dGjOrS41xolsTgqBSY%2BxLY%2BQB87xVRkah4CXjUFhrlAQqhxeWJFCdqYWJJni4WqjmlMKrSaIkHqIXNqN1tUpiLEOaKInT4YiipXK6ndFSSZyaNRWNWEn8CUYY1oBto%2FEbXTA3Q%2BxCQD%2BWIEqdDxmnwyrwNxIJuVFf7cuUSHhaA1l7uGKmqlq40ga0aXGWKJMnTI1NWmpNRcMotF%2BA460CovIpdzHozI9WbeeRj%2FDqgrlHGZjRaBMKetRRmvOapkiHj2BkX0nV9wOovkM5S6Xq%2Bw5UXw5WzXFpvkeHuBCkndv%2BFt7gAQ3oC6KLrrdbF5GJDOyKAboP8OyGgAohWICGhwJz%2B1eiWJ5t6kpIr8U6XTkA6%2FjYuxrsy2mRKVJpCod8FAwL4GWRP0U4jP%2FUgisDS9KU%2Bg3jute0eOFHEVJeWC1%2BgGYL%2F0bo09CE%2BOZvKUzSAga3%2BAMfQYQt5qgI0X7FEECtHyG%2BkYHaDF8N0HwF3pMLMyT2xvMf6AxR2Ns9guUyfq5CPsz1X69ZJDMuoaHOmafAty1W1uID9JhdECLO%2BRXGc4lScofdkQQowuD%2BBcaSgDxpEfruLoLXqZiRwqJDYTGdciaDaVFaqIolEBeTSc%2Fi4jtEEKfkgIeXDbdomiL6ngkWh%2FbaQ1Pqac9MEcCOPs9LefoddNEgjYMgiTcKqZ1ozhKKiMYmkREkzDE%2B%2BwoXIQIgao5ltzh4Pl3QMH5NIc%2FE7cS%2F%2BTlzePIWcUnaxOfD7e8t%2FHcQbo%2FkRmfcnheHB3F9Tb%2FW7mZdcn3lfnJ3fSe5fn%2FwPeNsKPpoyb5czNMZ9p4Jxg5oP9HlYp5RYeCpFvOoisHR13Et5znQB%2Fang9hkyj3%2F%2BPqQp5uF8PBSg4n0hTEoMKrNC9IXVuMLu8jEBFBf%2FjlGi%2BtNo8Vjej6MZ60AZ7rCwVRT35qqTWtqGnEoQAKDLQEQe8pCiN1tEgpzUKhJKGwBhaWgMwhEaBxEqFZbiDA4R74%2BpP%2F9QIjI2ulSy9sujIsW2DDNlEw5%2F5P5X215kvO%2FhAolDCbHX65OGNc4CLKonOPYUGZXLM7oYHDRBZVNtUb4ggYhTgmQXEZV3QpI1EqflUJWXGsfADZvav%2B3jdRf0Y374jHwX0hqIoaIq51n49MIjiIHJkkamrOpfsONmIWrE3NZpjVjf4UFNtiC4y3CbfJA6bw4TIRUL1IUmLRe4eImFsdJf2Cgr3FsLGKMfliwgjxoV%2Fs5CuJFVafXt9gEVeYBKb8jc0a7yDs5stJQK0rDcjdKW1Neex9H156LU5jyeImhi2x5QlcGz4BP7cq4fvzl4lhH9K%2F%2BEjYD8iyE7xnfbaYIKy%2Fk3Of5b7%2BiD%2F7527fHOX5x%2FPrn7gOR%2FufWEF69TEr6n6X%2F%2BQjUtvSmqD2GdZY8KueRsgSbv4BnAsyxGEBKqvvRLI0dvRWD9IMA%2FHC8k4uh3k22oI5WhcZaTANnkGENaI8xrDy0mnzAZWNjzESpqUmmDjkn7nsmHHfA%2BB9Drp%2BSnLY1p51xiZssUZLg0XLa%2BvRrMnUIjxemDBIaY%2BqQITOHGE2X4usDZg7RFC7Mp%2FVi%2FNTcOobV%2BDLB5ClArnH4D%2BU2HeObkN6cB75l0Q0zjq4ATjse4UgziKQTOZERLT1A4aDqssXnJZm1VZf5RTWFmroKXDB5okk%2FYYiohQPNo6VYLK2jZ2UdNWVM2DjC48eUNe9MAJ9Dz0l7wNdrauoK8HnLwkQbDvBxbqsFCCE7w8Wi8ad5WfBbAGyX5ciKL1Tm9hpuQDlNZ0mwynL5ZWLTdiR%2Bl6TDcp5xwToe2sn2Q8CN4sMdusGLkkgMWvktsUruAvJemUfEd9sYSlb4nopVAjLA7eLjRUeYzQLc7L3rIIER4BwwNKGJihH7lGFtVeETreLQGsdPyAg1fJZXC8471GH%2B%2B0MpUP8EEKYGGaT%2BgElWz4vFV6fKlyz%2BEBbfHYlvxeGPoO1WQ9puGgPSdpUzWU9bhzUYWk1Nw4Q1HBIe3CyNIRdNLNMXDpO%2B0L%2BzPnuX%2Bu9wHz270ePj1x%2Fu58vszJHZC2X2Qpm9sM9QDYuz3KiiDZ3VJCVulpWbas%2BsXK4LlGaTd2A2EUrBateyXBYolwW2RHhN4RaYqErjFId9rwt88DFC%2FoKN0HhQB77rijId3vqbLRqRVCc5fG3gNaYvKZTHlvJ4WaBL3sDxLpL8iOgaB5%2BGNAia2txBGL4ixtYriH%2B8dYAnh90OU8keZHu29Jv7TweBW6q%2BWCJg1ZSpdTsTkH8Z5Xwq6jzhlpeo57VFoly6967M2kJ4k1btIVfuHR5MUq4aNLA1U1xSrhRF1cqB6OioET5%2Fms7bARrbn%2Fm9E4pVdRQ3glfwic0czd%2BNuyMfapLez17JX61C2KfVfI5tbHGGC7tAkDvjzsK8GtQC4kG4JCElhEo%2FQ7iNGTWh0zRuZA28J2oISSi0EoLVO1hV%2BLGZ9EQyacmku2LS5llFhhRA8o%2FwQ%2BfOFeKDTCLxgZNIlNte8sEW5ZJloFiLGc8bk80gD14fqKl1VQ0TbXGLKRm2gz6mhGwg66vNXiU%2BlWGILEcxMcUmW5xLxnjOjHGoFBOSMZ49Y0z3pJG21w9EMs%2FK9qrKlBiS8QotubWMdzYc40UslUfW1oxXL1iKh2S8Uoc%2FHtKqY3UlpJ3RKomOIE2w0HlsSrymcMscVIPfvLC5Es9bKgtVDQNpci2yXIs8iJVg1EG1anV4l1yL%2FHHDYos%2Bp2nj7TLGaEGoXI0MI7kU%2BXzsBjJo693YDdrz6klDXq0OudvuhMvGo07aLkXWFH4dWqGqgVOsF91enXnEWPZNgBkvW2fA7cpJDkBEOi2EbI9z4g6TaxHehz9M7XBfIekQ%2B%2BgOMfO8c65L86sAIKpjLCUzPCNm2LP5VR0wz6QAm1onWTd4l9KgWdblTjzHMr5RMLt6G2Y%2FO%2FGIZ2514KzciUfSwkNo4XlZOcs3qrhkO1XEy%2FQlUcxhRnVopSSKH48oMgJYzxSH3I1HKxgU%2BRQkjZmiWTAo8lUNlNyQBa8rd2i8xxh2ynD7zILNPWq7i0z4PEtxQstTxzrxt%2Be86sR3j84heI4P0Ixbwwi9JT2Gkd1vRitpgOw%2BB1V1xKo0QEqmWc40C3grI%2FI%2FABU9K896bghLWtyYFp%2BMzjLCzX633gSoPS%2FWGtJihlHjoMWqNrvSZl0xY1Ftw5DjL8DxVgFhdiQUNWMtVT4BGyzTCNbu1qOi4hWtW0ETOvW7bzJvQ4OnsuZdSXTPlegah%2BQcl0RXEt1Kois97efGWusBQpNMsQ1TfMcGVDZ3a5mioQ7IFCe6mQcno3VE5mxSV9XoOGJ7p3uymgmQuc7WNC38XZRaTEV20LzR9H1YQUdBAkftlDeGyhstnfLvkUGeuVNeMkgBQhiSQX4sBllPDAdcqqNZxuzK5Aid1dq5LqptJAt22pkQD9xNMGdxlLsJjmg3QaN69aTcTlBuJyi3EzwZtdWLyzitIrVVFUvAbWfK0dw2mfHVEEEj3LJ0rJaY5IlMes2DTyYTHkZ%2Fwyja02EFdpGfB49WzCZliXQGp9zuOLcn2%2Bm4loscyTt0Y2ZczQwVjQNjopjTqZ4bHppidEUaGvY9%2Fe4X4O4gk9n8YHBdZxvCenkAwi0Zencr5w0PjU5mkMHzqqlSnEFTwfzhExE1mD4N22wiaDOOoSSuUky5Yr7FyJaIUnAtjslCvmnzslNgC%2BFkYmLu4KXixlku3bK%2BzE%2FqTnrP4ntvVuw9EfrpJ%2Bu9WaH3HM%2BJHNRy%2F8IsIc4mxnl1Ni6I2xxTJHpGbdLgEcbDG3vtuMsHsMf2U%2F0OKY72Mzu6WfuB8y9m3Glnp3qlZuWumOM7E6mPhf0j6x%2BVK%2FoC3nIXPoAwSuiE64Jt6KTkYINgxvFuKGUiF9VM9k5Gh5ofHSn8ZaWjcHgYJxoeploYHoXh4DoZPpu1NFRMyBKSmkzHHBW9VNOSB3LjnZ6WfKXNoAvIZ8wm%2FdCh2lkQX8tRujtSEiDO7aGPAA7pQYjGxyvEY4RDG8dbI%2FYaCfu8eorVjwTW8Vazbp%2Beqtf1Qq8jqUtD02lc%2Blf4zw43jwSHfsBB5aizpgpER8%2FgYEpwOBYckqk2AnA4ge3fDmBl3sUPav43ZaqGrjLl1qnI7Qz9HUWFMNFfa%2Fw3BzT%2B67rFi5a2ln9UU11VXZn9G4qoaUFECXTR%2Bzcb0nku2UwvbGbKDzmRqpOsTu%2BFzbA3kmzmCDYzbTwSytmMsNvHwWZAZK9hmlo6WhOnhCQ3%2BYmkSXLThtwkVCVHVGrT93cUfmAOuLBfNye85as1A5kWjGjDMhCraEsJfdsB7he4dMADBIGHkP0Rtd%2FKDyQT6Z%2BJ8CHR1lTARMxemYi0qxzNRKwu7CrCbu%2BfiVQPljHsnCsMHR63tBX62xP7wUHGhGS%2FnRIJXQpTtfYDJpRrpbc1pP2AV%2BbUWVvpbRS2FytU1bP0LrpHBZ6QcIumq%2FST9iWyLaPgCtEL2K2KgiBOJrIn0nhwvMjuxE8qjH3pXWQLjAfo%2B%2BVCiOLEkUlXjqEv2dQo78MTwlBgECZjlDrZD%2FeETOqq6pfJTLSChNqFEMsAGcnRL33RuP0mNX1StDj0G8kxMSR9OZa%2BJBPsHURyVA%2BW6o1opMWhw7WLLYV2eznNAhHqd%2BzVBpTTyU7hCYS23YVcT%2FJQFtB4IDldDKdP5LS0M%2FQqqM3Z%2BAR1MZ5FCupDBfWk8Ug4c0E9hjz%2FUlCfRlBbTRVqNtzHIagNta2gLqBxoap%2BBfW0aPKtcOzfxkuWpWe%2FP%2FGtm9xq0sSdmx3pU7NH8T0tGmGk%2BD5QfCfz7ijPvqjbR%2BEm2EknQbHLZbaksROZvt0EDAWGYTUFmwG%2FPrs5qylYMviq%2BsyTdCBWhfF2axKsciOzOsWQBKs6sNJaodVkCLhiKDRya6mEK3JRAG0Hvkh6VRjFY3DonDNiTVohljZuxBrUbHSOiIUOA9%2BPsncHYLv%2B4i8xztz%2FHw%3D%3D">
                    Link to C4-Diagram for Social Sphere</Link>. 
                    </p>
                    <div class="researchImg c4"></div>
                    </div>)}
                </div>
                <br /><br />
                <div data-aos="fade-up">
                    {wireframeOpen ? (<h2 class="researchSubtitle" id="Interviews" onClick={handleWireframeOpen}>Wireframes ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handleWireframeOpen}>Wireframes ⮟</h2>)}
                    <br />
                    {wireframeOpen && (
                    <div data-aos="fade-up">
                    <HashLink to="/youthWork/#designSpecWireframes" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Design Specification</div></HashLink>
                    <p class="researchText"><b id="designSpecWireframes">Wireframes</b>
                    <br /><br /><b>WHY? -</b> By making wireframes, we could see what the general flow of the platform was going to be and make describing and showing the 
                    eventual design easier. These wireframes can be used as design specification and it makes clear to everyone what the current vision is for the product.

                    <br /><br /><b>HOW? -</b> We made wireframes in Figma for the design specification. These wireframes were also prototyped to check how the flow of the platform feels 
                    and what the eventual buttons and functions in the platform would do. We used a Figma grid to make sure that all elements on all the pages would align well with the rest 
                    of the design. 
                    <br /><br /><b>Results -</b> We ended up with a fully prototyped wireframe program. Thanks to these wireframes, everyone in the group knew what the vision for the project 
                    was going to be. This was also something that could be shown to stakeholders and the idea would be clear. The wireframes can be seen with the following link: <Link to="https://www.figma.com/file/EzOeUHi7cO9I3iWoypAXCH/Design?type=design&node-id=1%3A2&t=MfmyXvYgnsmrNbhh-1">
                    Link to wireframes for Social Sphere</Link>. We also immediately sent these wireframes to Matheus from Pitstop. We also sent them to Dirk-Jan from Dynamo, but he had a 
                    concussion and couldn't answer our mails anymore. Feedback from Matheus was super positive and he really liked the idea and thought that a lot of youth workers could definitely benefit and learn 
                    from this. A screenshot of Matheus' mail is added in the picure below.
                    </p>
                    <div class="researchImg feedbackMatheus"></div>
                    </div>)}
                </div>

                <br /><br />
                <div data-aos="fade-up">
                    {prototypeOpen ? (<h2 class="researchSubtitle" id="Interviews" onClick={handlePrototypeOpen}>Prototype ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handlePrototypeOpen}>Prototype ⮟</h2>)}
                    {prototypeOpen && (
                    <div data-aos="fade-up">
                    <HashLink to="/youthWork/#prototype" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Prototyping</div></HashLink>
                    <p class="researchText"><b id="prototype">High-fidelity Prototype</b>
                    <br /><br /><b>WHY? -</b> We made a prototype based on the wireframes to make the concept and flow of the product as clear as possible and to get the 
                    best possible feedback we could get. This prototype is an active representation of the direction we were going in and it showed the stakeholders a product 
                    they could already test. The feedback we can get from this prototype could improve it even more.

                    <br /><br /><b>HOW? -</b> The prototype was made with Figma, based on the wireframe we made previously. I was in charge of the archetype quiz, the lesson quiz and I checked all 
                    the other prototype pages and gave feedback on them. We made multiple iterations per page and eventually we chose the pages with the best user flow and design, in our 
                    opinions. The we prototyped our pages together to map out the user interactions and to eventually test the prototype.
                    <br /><br /><b>Results -</b> The eventual result was a full fledged prototype based upon thought through design decisions. We also made a report about the design, how we 
                    stuctured it and why we did it this way. The prototype is clickable and can be used for usability tests and design tests. The full prototype is found via this link: 
                    <Link to="https://www.figma.com/file/EzOeUHi7cO9I3iWoypAXCH/Design?type=design&node-id=1%3A3&t=MByC21yzTehJxN4Z-1"> Link to Figma Prototype</Link>.
                    </p>
                    <a href={prototype}>
                        <input type="button" value="Design Document" class="viewBtn"/>
                    </a>
                    </div>)}
                </div>

                <br /><br />

                <div data-aos="fade-up">
                    {testOpen ? (<h2 class="researchSubtitle" id="Interviews" onClick={handleTestOpen}>Testing ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handleTestOpen}>Testing ⮟</h2>)}
                    {testOpen && (
                    <div data-aos="fade-up">
                    <HashLink to="/youthWork/#thinkAloudTest" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Thinking Aloud</div></HashLink>
                    <HashLink to="/youthWork/#usabilityTest" scroll={el => scrollWithOffset(el)}><div class="tag researchTag">Usability Testing</div></HashLink>
                    <p class="researchText"><b id="thinkAloudTest">Thinking Aloud</b>

                    <br /><br /><b>WHY? -</b> We wanted to gather opinions and feedback from experts, to see on which places we could still improve. The reason we did think aloud with 
                    experts was that experts can give more constructive feedback during and after the test, instead of just random opinions on a platform, since it is used for the first time. 
                    A thinking aloud test would have been more subjective with someone who is not an expert.

                    <br /><br /><b>HOW? -</b> We asked Maaike and Joris, two teachers in the field of Media Design, and Fenna Dam, stakeholder from Garage2020, to do the thinking aloud test. We prepared a testing plan and some after-test 
                    questions. For the test with Fenna, we planned a physical meeting with her, but due to illness, it had to be online. For the test itself, we decided to go for a test where 
                    Maaike, Joris and Fenna could click whatever they want and start a conversation about possible feedback points. 
                    As a group of five people, we split up in two groups, one of three and one of two. 
                    <br /><br /><b>Results -</b> Results were plenty. In short, starting at the lesson page immediately after making an account is not good user experience. 
                    The lesson page itself was a bit cluttered and it was confusing to see which lessons you have done, which ones were locked and which were active. The results page of the 
                    quiz was also confusing, because you could not get feedback on the questions you did wrong or retake the quiz. We should also add a disclaimer to the Archetype quiz that this 
                    is not a true personality quiz, but just for fun and not based on factual research.

                    <br /><br />

                    <b id="usabilityTest">Usability Testing</b>

                    <br /><br /><b>WHY? -</b> We also wanted to have objective feedback about the usability of our prototype, so that is why we decided to do usability testing 
                    with the target audience. This way, we could check what things have to be changed and which elements of the prototype are good.

                    <br /><br /><b>HOW? -</b> I called Matheus again on his phone and I planned a meeting with him and the other tree youth workers of Dynamo. Iva also tried to get a 
                    hold of Jimmy, the digicoach at Dynamo, and Dirk-Jan, via the mail (we did not have their phone numbers), but we did not get a response. We decided to go with task based 
                    testing, where we made up a scenario tied to an assignment (activity) in the prototype. Then we let the testers try to complete the activity and closely observe what went right 
                    and what could have gone better. At the end, we had a list of questions for the testers to answer for some final feedback.

                    <br /><br /><b>Results -</b> Again, we got a lot of feedback. The main point was that we need to add a scroll down indicator, because most testers did not scroll down on any page. 
                    Again, the results page for the quiz came to light with the same problems as the thinking aloud test. Some youth workers really liked the style, while others thought it might be a 
                    bit childish. But they were all very excited about the content and the archetypes. In general, the youth workers found that this could be a really great tool to learn social media, 
                    however, it has to keep updating itself when an app changes its UI or has an update. Lastly, it has to keep up to date with new trends, like new popular social media platforms 
                    among the youth. 
                    </p>
                    <a href={testReport}>
                        <input type="button" value="Test Report" class="viewBtn"/>
                    </a>
                    </div>)}
                </div>

                <br /><br />

                <div data-aos="fade-up">
                    {feedbackOpen ? (<h2 class="researchSubtitle" id="Interviews" onClick={handleFeedbackOpen}>Group Feedback ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handleFeedbackOpen}>Group Feedback ⮟</h2>)}
                    {feedbackOpen && (
                    <div data-aos="fade-up">
                    <p class="researchText"><b>360 degrees feedback</b>

                    <br /><br /><b>WHY? -</b> We wanted to evaluate how everyone did during the group project and see what the good things and the points of improvement were for 
                    everyone. These points are great to know for future development and to make group work more smooth for all coming projects.

                    <br /><br /><b>HOW? -</b> We made a google forms survey and gave it to everyone from the group. There was a section with the same questions per person and 
                    like this, we could submit our feedback to our group mates. We also explicitly asked the group to be critical but fair in their feedback, because you 
                    can only learn from this. 
                    <br /><br /><b>Results -</b> The biggest point of feedback that came from the group reflection is that I should try to sometimes listen more and talk less. I could be 
                    very overwhelming for some people and I am definitely aware of this. I should stay quiet more and listen better to others, while also asking questions about them, instead of 
                    focussing on me. The rest of the feedback was very positive. My communication was good (with the exeption of the previous statement) and I have fairly contributed to the 
                    project, according to my group mates. So with this feedback point, I am looking to try to close my mouth every now and then, to prevent myself from speaking over someone and 
                    'intimidating' them. I will also ask people to shush me if I talk too much. However, I do want to keep my decisiveness when others are swinging between multiple choices, because this is a very important skill to me, even though this can sometimes 
                    lead to some heated arguments.  
                    </p>
                    <a href={groupFeedback}>
                        <input type="button" value="Group Feedback" class="viewBtn"/>
                    </a>
                    </div>)}
                </div>


                </div>
                </div>
                <Footer />
                </React.StrictMode>
    )
}

export default YouthWork;