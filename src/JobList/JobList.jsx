import React from "react";
import "./JobList.css"

function JobList(props) {
    return (
        <section className="joblist-wrapper">
            <ul>
                {props.children}
            </ul>

        </section>
    )   

};

export { JobList }