import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';

function SearchFilter() {
  const { search, setSearch, filterType, setFilterType } = useContext(JobContext);

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
        <option value="">All Types</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
    </div>
  );
}

export default SearchFilter;