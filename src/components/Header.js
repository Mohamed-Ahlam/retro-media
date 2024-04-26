import React from "react";
import Vhs from "./Vhs";

function Header(){

    return(

        <div className="header">
            
            <div className="title">
                <h1>Retro Media</h1>
            </div>

            <nav >
                <ul className="navBar">
                    <li><a href="./components/Vhs" className="navItem">VHS</a></li>
                    <li><a href="./components/Cd" className="navItem">CD</a></li>
                    <li><a href="./components/Tape" className="navItem">TAPE</a></li>
                </ul>
            </nav>

            {/* <Vhs/> */}

        </div>
    )
}

export default Header;