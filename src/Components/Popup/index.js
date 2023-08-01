import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom'; 

const PopupForm = ({ onSubmit }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const closePopup = () => {
    navigate("/");
  };

  const handleSubmit = async (event) => {
    console.log(name,email,phone,whatsapp,service,message,successMsg,errorMsg)
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3005/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
             email,
              phone, whatsapp, service, message
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSuccessMsg(data.success);
        setErrorMsg('');
      } else {
        const data = await response.json();
        console.log(data.error);
        setErrorMsg(data.error);
        setSuccessMsg('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="popup">
      <form className="popup-content">
        <div className='pop-content-image-conatiner'>
          <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690546385/10-work_2x_fazttu.png" alt="" className='callback-logo' />
        </div>
        <div className='pop-content-content-conatiner'>
          <h2 className="request-call-back">Contact Us!</h2>
          <label className="popup-label-name" htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="Popup-input"
            required
          />

          <label htmlFor="email" className="popup-label-name">Email Address *</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="Popup-input"
            required
          />

          <label htmlFor="service" className="popup-label-name">Select Service *</label>
          <select
            id="course"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="Popup-input popup-select"
            required
          >
            <option value="Sales Force" >Sales Force</option>
            <option value="MobileandAppDevelopment" >MobileandAppDevelopment</option>
            <option value="Mendix" >Mendix</option>
            <option value="Polarion">Polarion</option>
          </select>

          <label htmlFor="PhoneNumber" className="popup-label-name">PhoneNumber * </label>
          <input
            type="number"
            id="PhoneNumber"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="Popup-input"
            required
          />

          <label htmlFor="whatsapp" className="popup-label-name">WhatsApp Number * </label>
          <input
            type="number"
            id="whatsapp"
            placeholder="Enter your phone number"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="Popup-input"
            required
          />

          <label htmlFor="message" className="popup-label-name">Message</label>
          <input
            type="text"
            id="message"
            placeholder="Enter your Comment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="Popup-input"
          />
          <p className='success-message'>{successMsg}</p>
          <p className='error-message'>{errorMsg}</p>
          <button className='popup-submit-btn' type="submit" onClick={handleSubmit}>Submit</button>
          <span className="close" onClick={closePopup }>
              &times;
            </span>
        </div>
      </form>
    </div>
  );
};

export default PopupForm;



