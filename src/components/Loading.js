import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';

function Pagination() {
  const { jobs, jobsPerPage, currentPage, setCurrentPage } = useContext(JobContext);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(jobs.length / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? 'active' : ''}>
            <button onClick={() => setCurrentPage(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;