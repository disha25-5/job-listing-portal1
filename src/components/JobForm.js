import React, { useState, useContext } from 'react';
import { JobContext } from '../context/JobContext';

function JobForm() {
  const { addJob } = useContext(JobContext);
  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    description: '',
  });

  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addJob(newJob);
  //   setNewJob({
  //     title: '',
  //     company: '',
  //     location: '',
  //     type: 'Full-time',
  //     description: '',
  //   });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit called. New job data:", newJob); // Add this line
    addJob(newJob);
    setNewJob({
      title: '',
      company: '',
      location: '',
      type: 'Full-time',
      description: '',
    });
  };
  

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h2>Post a Job</h2>
      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={newJob.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={newJob.company}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={newJob.location}
        onChange={handleChange}
        required
      />
      <select name="type" value={newJob.type} onChange={handleChange}>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
      <textarea
        name="description"
        placeholder="Description"
        value={newJob.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Post Job</button>
    </form>
  );
}

export default JobForm;