import React from "react";


function ContentContainer(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default ContentContainer;