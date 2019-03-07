import React from "react";

function Item(props) {
    return (
        <div 
        role="img"
        aria-label="item"
        onClick={() => props.handleClick(props.id)}
        style={{ image: `url("${props.pic}")` }}
        className={`item${props.shake ? " shake" : ""}`}
        />
    );
}

export default Item;