import React, { useContext } from 'react';
import JobCard from './JobCard';
import Pagination from './Pagination';
import Loading from './Loading';
import { JobContext } from '../context/JobContext';

function JobList() {
  const { jobs, loading, currentPage, jobsPerPage } = useContext(JobContext);

  if (loading) {
    return <Loading />;
  }

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className="job-list">
      {currentJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <Pagination />
    </div>
  );
}

export default JobList;