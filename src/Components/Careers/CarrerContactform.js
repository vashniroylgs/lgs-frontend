import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    totalExp: '',
    careerGap: '',
    currentLocation: '',
    preferredLocation: '',
    reasonForJobChange: '',
    jobProfile: '',
    email: '',
    relevantExp: '',
    currentCTC: '',
    expectedCTC: '',
    noticePeriod: '',
    resume: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple form validation (checking if required fields are not empty)
    const requiredFields = ['name', 'phone', 'totalExp', 'reasonForJobChange', 'email', 'relevantExp', 'currentCTC', 'expectedCTC', 'noticePeriod', 'resume'];

    const isFormValid = requiredFields.every((field) => formValues[field].trim() !== '');
    if (!isFormValid) {
      alert('Please fill in all the required fields.');
      return;
    }

    // Call the API to send form data to the server and send the email
    axios
      .post('http://localhost:5000/send-email', formValues) // Change the URL to match your server's endpoint
      .then((response) => {
        console.log(response.data);
        alert('Form submitted successfully. Email sent.');
        setFormValues({
          ...formValues,
          name: '',
          phone: '',
          totalExp: '',
          careerGap: '',
          currentLocation: '',
          preferredLocation: '',
          reasonForJobChange: '',
          jobProfile: '',
          email: '',
          relevantExp: '',
          currentCTC: '',
          expectedCTC: '',
          noticePeriod: '',
          resume: null,
        });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form. Please try again later.');
      });
  };

  return (
    <div className="container rounded pb-5 px-4">
      <h4 className="semi_heading-career text-center text-uppercase pt-5 font-weight-bold careers-heading">
        Come Work With Us
      </h4>
      <div className="text-uppercase text-center pb-5">
        Don't be shY! Drop us a line and our team will get to you asap.
      </div>
      <form id="career_form" onSubmit={handleSubmit}>
        <input hidden type="text" value={formValues.lead_url} className="form-control" name="lead_url" required />
        <div className="row career-contact rounded p-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="career_name">
                Name <a style={{ color: 'red' }}>*</a>
              </label>
              <input
                type="text"
                className="form-control career-fields"
                id="career_name"
                name="career_name"
                required
                value={formValues.career_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_phone">
                Phone No <a style={{ color: 'red' }}>*</a>
              </label>
              <input
                type="tel"
                className="form-control career-fields"
                id="career_phone"
                name="career_phone"
                minLength="10"
                maxLength="16"
                onKeyPress={(event) => event.charCode >= 48 && event.charCode <= 57}
                required
                value={formValues.career_phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_total_exp">
                Total Exp <a style={{ color: 'red' }}>*</a>
              </label>
              <input
                className="form-control career-fields"
                id="career_total_exp"
                type="text"
                name="career_total_exp"
                required
                value={formValues.career_total_exp}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_gap">Career Gap(Reason)</label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_gap"
                name="career_gap"
                value={formValues.career_gap}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_current_loc">Current Location</label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_current_loc"
                name="career_current_loc"
                value={formValues.career_current_loc}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_preferred_loc">Preferred Location</label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_preferred_loc"
                name="career_preferred_loc"
                value={formValues.career_preferred_loc}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_job_change">
                Reason for job change <a style={{ color: 'red' }}>*</a>
              </label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_job_change"
                name="career_job_change"
                required
                value={formValues.career_job_change}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Job Profile</label>
              <select
                name="job_profile"
                className="custom-select mb-3 career-fields"
                id="position"
                value={formValues.job_profile}
                onChange={handleInputChange}
              >
                <option value="0">Select Job Profile</option>
                <option value="1">Android developer</option>
                <option value="2">Web developer</option>
                <option value="3">Sales & DigitalMarketing</option>
                <option value="4">Java</option>
                <option value="5">SEO</option>
                <option value="6">Others</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="career_email">
                Email <a style={{ color: 'red' }}>*</a>
              </label>
              <input
                type="email"
                className="form-control career-fields"
                id="career_email"
                name="career_email"
                required
                value={formValues.career_email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_relevant_exp">
                Relevant Exp <a style={{ color: 'red' }}>*</a>
              </label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_relevant_exp"
                name="career_relevant_exp"
                required
                value={formValues.career_relevant_exp}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_current_ctc">
                Current CTC <a style={{ color: 'red' }}>*</a>
              </label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_current_ctc"
                name="career_current_ctc"
                required
                value={formValues.career_current_ctc}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_exp_ctc">
                Expected CTC(Offer if any) <a style={{ color: 'red' }}>*</a>
              </label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_exp_ctc"
                name="career_exp_ctc"
                required
                value={formValues.career_exp_ctc}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_notice_period">
                Notice Period(LWD if serving) <a style={{ color: 'red' }}>*</a>
              </label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_notice_period"
                name="career_notice_period"
                required
                value={formValues.career_notice_period}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="attach_document">Attach your resume <a style={{ color: 'red' }}>*</a></label>
              <div className="custom-file cursor-pointer z-1" id="attach_document">
                <input
                  type="file"
                  className="custom-file-input cursor-pointer"
                  id="customFile"
                  name="attach_document"
                  required
                  // onChange={handleFileChange} // If you want to handle file selection
                />
                <label className="custom-file-label rounded-0 career-fields file-choose cursor-pointer" htmlFor="customFile">
                  Choose file
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="career_message">Why should we hire you ?</label>
              <textarea
                className="form-control career-fields"
                rows="3"
                id="career_message"
                name="career_message"
                value={formValues.career_message}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          <div className="col-12">
            <div>
              <a href="tel:+91 8897145382" className="phone-link">
                <span className="font-weight-bold">Contact HR :</span>
                <img
                  src=""
                  width="12.5px"
                  height="9.5px"
                  className="img-fluid"
                  alt="call"
                />
                +91 8897145382
              </a>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <span className="add_career_error" style={{ color: 'red' }}></span>
            <button
              className="btn text-uppercase text-white ml-auto add_career_pop_up_button"
              type="submit"
              style={{ background: 'rgb(2, 80, 169)' }}
            >
              Submit <span className="add_career_pop_up_fa_spin_icon"></span>
            </button>
          </div>
        </div>
      </form>
      <div className="hide-form"></div>
    </div>
  );
};

export default ContactForm;
