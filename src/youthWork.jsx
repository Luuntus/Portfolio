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

import 'aos/dist/aos.css'; 

function YouthWork() {

    AOS.init();

    const [open, setOpen] = useState(false);
    const [eduOpen, setEduOpen] = useState(false);
    const [natOpen, setNatOpen] = useState(false);
    const [interviewOpen, setInterviewOpen] = useState(false);

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
                    {natOpen ? ( <div data-aos="fade-up"><div class="tag researchTag leftTag">Literature Study</div>
                    <div class="tag researchTag">Trend Analysis</div>
                    <p class="researchText"><b>Literature Study</b>
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

                    <br /><br /><b>Trend analysis</b>
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
                    <div class="tag researchTag leftTag">Expert Interview</div>
                    <p class="researchText"><b>Expert Interview</b>
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
                <h2 class="researchSubtitle">Sketching</h2>
                <div class="tag researchTag leftTag">Sketching</div>
                    <p class="researchText"><b>Sketching</b>
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
                </div>
                <br /><br />
                <div data-aos="fade-up">
                    <h2 class="researchSubtitle">Sketching</h2>
                <div class="tag researchTag leftTag">Sketching</div>
                    <p class="researchText"><b>Sketching</b>
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
                </div>
                <br /><br />
                <div data-aos="fade-up">
                    {interviewOpen ? (<h2 class="researchSubtitle" id="Interviews" onClick={handleInterviewOpen}>Software Design ⮝</h2>) : (<h2 class="researchSubtitle" id="Interviews" onClick={handleInterviewOpen}>Software Design ⮟</h2>)}
                    <br />
                    {interviewOpen && (
                    <div data-aos="fade-up">
                    <p class="researchText"><b>C4 Diagram</b>
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
                </div>
                </div>
                </React.StrictMode>
    )
}

export default YouthWork;