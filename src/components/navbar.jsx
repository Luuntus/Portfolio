import React from "react";

function Navbar() {
    return(
    <div class="navbar">
        <ul>
            <a href="/" class="anchor">
                <li class="bigNumber">01.</li>
                <li class="navList"> &lt;Home&gt;</li>
            </a>
            <a href="#projects" class="anchor projectsLink">
                <li class="bigNumber">02.</li>
                <li class="navList"> &lt;Projects&gt;</li>
            </a>
            <a href="#aboutMe" class="anchor">
            <li class="bigNumber">03.</li>
                <li class="navList">&lt;About me&gt;</li>
            </a>
            <a href="#contact" class="anchor">
            <li class="bigNumber">04.</li>
                <li class="navList">&lt;Contact&gt;</li>
            </a>
        </ul>
    </div>
    )
}

export default Navbar;