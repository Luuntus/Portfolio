import React from "react";
import Navbar from "./components/navbar";
import RG from "./documents/Reading Guide Group Project.pdf";
import PP from "./documents/Project Plan International Project.pdf";

function InternationalWeek() {
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
                    <h2 class="researchSubtitle" id="TAR">User Research</h2>
                    <em class="researchQuestion">What are the preferred play activities and engagement patterns of children in the target age group within the context of Schoolplein14, and how can this knowledge inform the design of technological innovations to encourage outdoor play?</em>
                    <br />
                    <div class="tag researchTag leftTag">Literature Study</div>
                    <div class="tag researchTag">Interviews</div>
                    <p class="researchText">By interviewing some children playing at a Schoolplein14 and a Cruyff Court in Eindhoven, we found out some interesting things. 
                    The kids said that the schoolplein was nice and that they liked the greenery. They wanted the schoolplein to be more luxurious, and they wanted 
                    the greenery to be protected better, as balls often fly into the greenery, which damages it. They also would like a hockey field, since a lot 
                    of the hockey sticks were broken, and they didn't have a spot to play. They would like a hockey field with artificial grass, but the grass should not be too high.</p>
                    <p class="researchText">My group mates Umair and Maarten also did some more research into our target audience, in the form of a literature study. It was found that soccer is 
                    still the most popular sport amongst both the boys and the girls, followed by skipping rope and tag. But that doesn't mean that other sports are not important. 
                    Games with a lot of social interaction are showed to be the most popular games on the playground. The kids (ages 6-12) also start to get more connected with friends, often 
                    with friends from the same gender. And this makes a small devide between the boys and the girls of these ages. The boys were 
                    more physically active during recess than girls and were more likely to engage in team sports, such as soccer and basketball. 
                    Girls were more likely to engage in creative and social activities, such as drawing, reading, and talking with friends.</p> 
                    <p class="researchText">View the whole research document with the button below. (Note that only this literature research was NOT done by me)</p>
                    <a href={PP}>
                        <input type="button" value="Research Document" class="viewBtn"/>
                    </a>
                    </div>
                    <br /><br />
                    </div>
                </div>
        </>
    )
}

export default InternationalWeek;