
import React, { useState } from 'react';
import './popup.css';

const Registration = ({ onComplete, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const services = ['Service A', 'Service B', 'Service C', 'Service D'];
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      name,
      email,
      phone,
      whatsapp,
      service,
      message,
    };

    // Send a POST request to the backend API
    fetch('http://localhost:3005/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Registration successful
          setAlertMessage('Thank you for registering. We will get back to you soon.');
          setAlertType('success');
          setTimeout(() => {
            setAlertMessage(''); // Clear the alert message after a few seconds
            onComplete(); // Call the onComplete function provided by App.js to close the modal
          }, 3000); // 3 seconds delay before closing the modal
        } else {
          // Registration failed - User already exists or other error
          setAlertMessage('User with this email already exists');
          setAlertType('error');
        }
      })
      .catch((error) => {
        // Registration failed due to network or server error
        setAlertMessage('Registration failed. Please try again later.');
        setAlertType('error');
        console.error('Error registering user:', error);
      });
  };

  return (
    <div className="Registration_container">
       <div className="image-column"></div>
       <div className="form-column">
      {alertMessage && (
        <div className={`alert-${alertType}`}>
          {alertMessage}
        </div>
      )}
      <h2>Contact Us</h2>
      <p>"The only way to do great work is to love what you do." - Steve Jobs</p>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <label>
          Whatsapp:
          <input type="text" name="whatsapp" value={whatsapp} onChange={(event) => setWhatsapp(event.target.value)} />
        </label>
        <label>
            Service:
            <select value={service} onChange={(event) => setService(event.target.value)}>
              <option value="">Select a service</option>
              {services.map((serviceOption) => (
                <option key={serviceOption} value={serviceOption}>
                  {serviceOption}
                </option>
              ))}
            </select>
          </label>
        <label>
          Message:
          <textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
        <button type="submit">SEND</button>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </form>
    </div></div>
  );
};

export default Registration;
