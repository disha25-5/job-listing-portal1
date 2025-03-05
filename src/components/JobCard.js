import React from 'react';

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>Type: {job.type}</p>
      <p>Description: {job.description}</p>
    </div>
  );
}

export default JobCard;