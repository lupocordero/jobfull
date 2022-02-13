import React from "react";
import "./JobPost.css"

function JobPost(props) {
    return (
        <li className="Item">
            <h2>{props.title}</h2>
            <h3>{props.company}</h3>
        </li>
    )   

};

export { JobPost }