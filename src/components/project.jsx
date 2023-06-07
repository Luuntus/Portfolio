import React from "react";
import styles from "../style.css";
import { HashLink } from "react-router-hash-link";

function Project(props) {
    const name = props.name;
    const project = props.project;
    const research = props.research;
    const design = props.design;
    const programming = props.programming;
    const image = props.image;
    const link = props.link;

    return(
        <div class="coverImage personalProject" style={{backgroundImage: `url(${image})`}}>
                <div data-aos="fade-up">
                    <div class="project">
                        <div class="projectDesc">
                            <h2 class="projectTitle">{name}</h2>
                            <em class="subtitle">{project}</em>
                            <br />
                            {research == null ? null : <div class="tag leftTag">{research}</div>}
                            {design == null ? null : <div class="tag">{design}</div>}
                            {programming == null ? null : <div class="tag">{programming}</div>}
                            <HashLink to={`${link}#top`} class="btnLink">
                                <input type="button" value="View ->" class="viewBtn" />
                            </HashLink>
                        </div>
                    </div>
                </div>
                </div>
    )
}

export default Project;