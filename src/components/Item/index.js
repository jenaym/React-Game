import React from "react";
import "./style.css";

function Item(props) {
    return (
        <div 
        role="img"
        aria-label="item"
        onClick={() => props.handleClick(props.id)}
        style={{ backgroundImage: `url("${props.image}")` }}
        className={`item`}
        />
    );
}

export default Item;
