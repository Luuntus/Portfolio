import React from "react";
import { HashLink as Link} from "react-router-hash-link";

function Navbar() {

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -60; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const scrollWithOffsetProjects = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -310; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const scrollWithOffsetAboutMe = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -160; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return(
    <div class="navbar">
        <ul>
            <Link to="/#top" class="anchor" scroll={el => scrollWithOffset(el)}>
                <li class="bigNumber">01.</li>
                <li class="navList"> &lt;Home&gt;</li>
            </Link>
            <Link to="/#projects" class="anchor projectsLink" scroll={el => scrollWithOffsetProjects(el)}>
                <li class="bigNumber">02.</li>
                <li class="navList"> &lt;Projects&gt;</li>
            </Link>
            <Link to="/#aboutMe" class="anchor" scroll={el => scrollWithOffsetAboutMe(el)}>
            <li class="bigNumber">03.</li>
                <li class="navList">&lt;About me&gt;</li>
            </Link>
            <Link to="/#contact" class="anchor" scroll={el => scrollWithOffset(el)}>
            <li class="bigNumber">04.</li>
                <li class="navList">&lt;Contact&gt;</li>
            </Link>
        </ul>
    </div>
    )
}

export default Navbar;