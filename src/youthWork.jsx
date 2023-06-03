import React, {useEffect} from "react";
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

import 'aos/dist/aos.css'; 

function YouthWork() {

    AOS.init();

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
                    <h2 class="researchSubtitle" id="IR">International Research</h2>
                    <em class="researchQuestion">What does other international youth work currently do to reach out to the youth?</em>
                    <br />
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
                    <b>Findings - </b>
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
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle" id="ER">Education of social media</h2>
                    <em class="researchQuestion">How can we educate social workers on the use of online media?</em>
                    <br />
                    <HashLink to="/youthWork/#EduStudy" scroll={el => scrollWithOffset(el)}><div class="tag researchTag leftTag">Literature Study</div></HashLink>
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
                    things to change. But in general, the idea was well liked, which meant that we were going in the right direction.</p>
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle" id="NR">Social media in the Netherlands</h2>
                    <em class="researchQuestion">What are the most used social platforms for youth internationally and in the Netherlands?</em>
                    <br />
                    <div class="tag researchTag leftTag">Literature Study</div>
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
                        <input type="button" value="Research Document" class="viewBtn"/>
                    </a>

                    <br /><br /><b>Trend analysis</b>
                    <br></br><b>WHY? -</b> By looking at the current trends, I could find out what social media platform the youth currently uses the most and what are 
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
                    online community and hosting online events. Again, unfortunately, she didn't write a report about this, so this conclusion is based upon me seeing Fenna 
                    as a rightful authority and referencing her work, even though there is no report about this.</p>
                    </div>
                    <br /><br />
                    <div data-aos="fade-up">
                    <h2 class="researchSubtitle" id="Interviews">Interviews and Meetings</h2>
                    <em class="researchQuestion">Who are the social workers and what are their main tasks in their job?/How can we educate social workers on the use of online media?</em>
                    <br />
                    <div class="tag researchTag leftTag">Expert Interview</div>
                    <div class="tag researchTag">Co-Creation</div>
                    <div class="tag researchTag">Co-Reflection</div>
                    <p class="researchText">During the research phase, I conducted two interviews together with my project group. One with Dirk-Jan van Soelen (innovations manager) at 
                    Dynamo and one with Matheus Sales de Moura (Team leader) at Pitstop. For the interview at Pitstop, I contacted Matheus via a telephone call and eventually via WhatsApp, after we got his contact information from Fenna Dam (research at Garage2020 
                    and our product owner). We had prepared questions in advance as a group effort, but I 
                    still came up with a couple of questions during the interviews themselves. For example at Pitstop, I saw a big poster of the 'Touch of God' painting 
                    by Michaelangelo, so I asked how religion was handeled at Pitstop, which gave some more information about the working of Pitstop. These interviews really 
                    gave me an idea of the current state of youth work, but also what the future should look like, in the eyes of Dirk-Jan and Matheus.</p>
                    <p class="researchText">Once every two weeks we had a meeting with Fenna to discuss the progress of the project. After the first four weeks, which were planned out for research, 
                    I was one of the three people of our group to present the research to Fenna. It was important to me that Fenna, as product owner, was regularly informed about 
                    the project, to make sure that Fenna and us were on the same line. This made sure that no double work was done and that the direction the project was going in was regularly tested.</p>
                    </div>
                    <br /><br />
                </div>
                </div>
                </React.StrictMode>
    )
}

export default YouthWork;