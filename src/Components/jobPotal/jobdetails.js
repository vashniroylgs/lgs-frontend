import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './JobDetails.css'; // Import your custom CSS file
import ContactForm from '../Careers/CarrerContactform';
import Footer from '../Footer';
import Header from '../navbar';

const JobDetails = () => {
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobDetails() {
      try {
        const response = await fetch(`http://localhost:3005/job/${jobId}`);
        const data = await response.json();
        setJobDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    }

    fetchJobDetails();
  }, [jobId]);

  if (loading) {
    return <div className="job-details-container">Loading...</div>;
  }

  if (!jobDetails) {
    return <div className="job-details-container">Error fetching job details</div>;
  }

  return (
    <div>
      <Header/>
  <h1>Job Details</h1>
      <div className="job-details-container">
  
  <div className="job-details-content">
    <h3 className="job-title">Title: {jobDetails.title}</h3>
    <p className="job-description">Description: {jobDetails.description}</p>
    <p className="job-info">Experience: {jobDetails.experience}</p>
    <p className="job-info">Location: {jobDetails.location}</p>
  </div>
</div>

      <ContactForm />
      <Footer/>
    </div>
  );
};

export default JobDetails;
