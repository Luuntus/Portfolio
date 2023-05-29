import React from "react";

function Skill(props) {

    const title = props.title;
    const img = props.img;

    return(
        <div className="skill" style={{backgroundImage:`url(${img})`}}>
            <div className="skillOverlay">
                <div className="skillImage" >
                    <p className="skillText">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Skill;