
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './jobs.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ keyword: '', experience: '', location: '' });

  useEffect(() => {
    async function fetchJobs() {
      try {
        const queryParams = new URLSearchParams(filters).toString();
        const response = await fetch(`http://localhost:3005/alljobs?${queryParams}`);
        const data = await response.json();
        setJobs(data.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }

    fetchJobs();
  }, [filters]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          name="keyword"
          placeholder="Search by keyword"
          value={filters.keyword}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="experience"
          placeholder="Filter by experience"
          value={filters.experience}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Filter by location"
          value={filters.location}
          onChange={handleFilterChange}
        />
      </div>
      <h1 className='head'>Jobs</h1>
      <div className="job-listings">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div className="job-listing" key={job._id}>
              <div className="job-details">
                <h2 className="job-title">{job.title}</h2>
                <p className="job-description">{job.description}</p>
                <p className="job-details">Experience: {job.experience} years</p>
                <p className="job-details">Location: {job.location}</p>
                <Link className="apply-link" to={`/career/${job._id}`}>Apply</Link>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
