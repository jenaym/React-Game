import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    Score: {props.score} | Top Score: {props.topScore}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;