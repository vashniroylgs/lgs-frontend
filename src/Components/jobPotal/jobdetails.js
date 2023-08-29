import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css"; // Import your custom CSS file
import ContactForm from "../Careers/CarrerContactform";
import Footer from "../Footer";
import Header from "../navbar";

const apiUrl = process.env.REACT_APP_API_BASE_URL

const JobDetails = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobDetails() {
      try {
        console.log("jobId:", id);
        const response = await fetch(`${apiUrl}/job/${id}`);
        const data = await response.json();
        setJobDetails(data);
        console.log("job details", jobDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    }

    fetchJobDetails();
  }, [id]);

  if (loading) {
    return <div className="job-details-container">Loading...</div>;
  }

  if (!jobDetails) {
    return (
      <div className="job-details-container">Error fetching job details</div>
    );
  }

  return (
    <div>
      <Header />
      <h1>Job Details</h1>

      <div className="job-details-container">
        <div className="job-details-content">
          <h3 className="job-title">Title: {jobDetails.title}</h3>
          <p className="job-description">
            Description: {jobDetails.description}
          </p>
          <p className="job-info">Experience: {jobDetails.experience}</p>
          <p className="job-info">Location: {jobDetails.location}</p>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default JobDetails;
