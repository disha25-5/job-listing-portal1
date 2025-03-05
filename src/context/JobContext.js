import React, { createContext, useState, useEffect } from 'react';
import getJobs from '../services/jobService';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);  // You can adjust this value


  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      const jobData = await getJobs();
      setJobs(jobData);
      setLoading(false);
    };

    fetchJobs();
  }, []);

//   const addJob = (newJob) => {
//     setJobs([...jobs, { ...newJob, id: Date.now() }]);
//   };
const addJob = (newJob) => {
    setJobs([...jobs, { ...newJob, id: Date.now() }]);
    console.log("addJob called. Updated jobs state:", [...jobs, { ...newJob, id: Date.now() }]); // Add this line
  };

  const filteredJobs = jobs.filter((job) => {
    const searchMatch = job.title.toLowerCase().includes(search.toLowerCase());
    const typeMatch = filterType === '' || job.type === filterType;
    return searchMatch && typeMatch;
  });

  const contextValue = {
    jobs: filteredJobs,
    loading,
    search,
    setSearch,
    filterType,
    setFilterType,
    addJob,
    currentPage,
    setCurrentPage,
    jobsPerPage
  };

  return (
    <JobContext.Provider value={contextValue}>
      {children}
    </JobContext.Provider>
  );
};