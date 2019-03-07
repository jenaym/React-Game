import React from "react";

function NavBar(props) {
    return (
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/">React Click Game</a>
                </li>
                <li>
                    Score: {props.score} | Top Score: {props.topScore}
                </li>
            </ul>
        </nav>
    )
}

export defeault NavBar;