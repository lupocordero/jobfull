import React from "react";

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