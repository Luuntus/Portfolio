import React from "react";
import { NavLink, Router } from "react-router-dom";

function Navbar() {
    return(
    <div class="navbar">
        <ul>
            <NavLink to="/">
                <li class="bigNumber">01.</li>
                <li class="navList"> &lt;Home&gt;</li>
            </NavLink>
            <NavLink to="/#projects">
                <li class="bigNumber">02.</li>
                <li class="navList"> &lt;Projects&gt;</li>
            </NavLink>
            <NavLink to="/#aboutMe">
            <li class="bigNumber">03.</li>
                <li class="navList">&lt;About me&gt;</li>
            </NavLink>
            <NavLink to="/#contact">
            <li class="bigNumber">04.</li>
                <li class="navList">&lt;Contact&gt;</li>
            </NavLink>
        </ul>
    </div>
    )
}

export default Navbar;