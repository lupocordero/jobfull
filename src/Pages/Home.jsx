import React from "react";
import { JobCounter } from "../JobCounter/JobCounter";
import { JobSearch } from "../JobSearch/JobSearch";
import { JobList } from "../JobList/JobList";
import { JobPost } from "../JobPost/JobPost";



function Home(props) {
  return (
    <>
      <div className="middle">
        <JobCounter />

        <JobSearch />
      </div>

      <JobList>
        {jobs.map((job) => (
          <JobPost key={job.id} title={job.title} company={job.company} />
        ))}
      </JobList>
    </>
  );
}

export { Home };
