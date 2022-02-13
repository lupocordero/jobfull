import React from "react";
import "./JobList.css"

function JobList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>

        </section>
    )   

};

export { JobList }