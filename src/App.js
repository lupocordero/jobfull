import React from "react";
import "./App.css";
import { JobCounter } from "./JobCounter/JobCounter";
import { JobSearch } from "./JobSearch/JobSearch";
import { JobList } from "./JobList/JobList";
import { JobPost } from "./JobPost/JobPost";
import mainlogo from "./012-code-2.png";

const jobs = [
  {
    id: 1,
    title: "Web Developer Junior",
    company: "Agenthash GmbH",
    description: "this is a fake description",
    alumni_name: "Blas Perez",
    alumni_email: "blas.perez@gmail.com",
    recruiter_name: "",
    recruiter_email: "",
    language: "EN",
    remote: true,
    country: "",
    days: 3,
    event_recording: "",
    link: "https://mariestarck.com/how-to-create-a-bottom-tab-navigator/",
  },
  {
    id: 2,
    title: "Senior Data Analyst",
    company: "DataCorp",
    description: "this is a fake description",
    alumni_name: "",
    alumni_email: "",
    recruiter_name: "Jean Baptiste",
    recruiter_email: "jean.babtiste@yahoo.com",
    language: "ES",
    remote: false,
    country: "Germany",
    days: 6,
    event_recording: "",
    link: "",
  },
  {
    id: 3,
    title: "Cyber Incidence Responser",
    company: "Security GmbH",
    description: "this is a fake description",
    alumni_name: "Blas Perez",
    alumni_email: "blas.perez@gmail.com",
    recruiter_name: "",
    recruiter_email: "",
    language: "DE",
    remote: true,
    country: "",
    days: 3,
    event_recording: "",
    link: "",
  },
];

function App() {
  return (
    <>
      <div className="top">
        <img className="mainlogo" src={mainlogo} alt="main logo" />
        <h1 className="App-logo">JOBSS</h1>
      </div>

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

export default App;
