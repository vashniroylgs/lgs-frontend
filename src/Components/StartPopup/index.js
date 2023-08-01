import React, { useState, useEffect } from 'react';
import './index.css';
import image1 from "../images/popupimage.jpg"

const FirstTimePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('English Communication Blue Print');
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [comment, setComment] = useState('');
  const [successMsg,setSuccessMsg]=useState("");
  const [errorMsg,setErrorMsg]=useState("")
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
  
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = async (event) => {
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
            course,
            phoneNumber,
            comment
          })
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        setSuccessMsg(data.success);
        setErrorMsg("");
      } else {
        const data = await response.json();
        console.log(data.error);
        setErrorMsg(data.error);
        setSuccessMsg("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <>
      {showPopup && (
        <div className="popup">
        
          {/* <form className="popup-content">
          <div className='pop-content-image-conatiner'>
          <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690546385/10-work_2x_fazttu.png" alt=""  className='callback-logo'/>
          </div>
          <div className='pop-content-content-conatiner'>
          <h2 className="request-call-back">Contact Us</h2>
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

            <label htmlFor="course" className="popup-label-name">Select Service *</label>
            <select
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="Popup-input popup-select"
              required
            >
              <option value="Salesforce" >Salesforce</option>
              <option value="Full Stack Developer" >Full Stack Developer</option>
              <option value="Data Science" >Data Science</option>
              <option value="Sales Force Admin" >Sales Force Admin</option>
              <option value="Mendix" >Mendix</option>
              <option value="Polarion">Polarion</option>
              <option value="Digital Marketing Expert">Digital Marketing Expert</option>
            </select>

            <label htmlFor="phoneNumber" className="popup-label-name">Phone Number * </label>
            <input
              type="number"
              id="phoneNumber"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="Popup-input"
              required
            />

            <label htmlFor="comment" className="popup-label-name">Comment</label>
            <input
              type="text"
              id="comment"
              placeholder="Enter your Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="Popup-input"
              
            />
            <p className='success-message'>{successMsg}</p>
            <p className='error-message'>{errorMsg}</p>
            <button onClick={handleSubmit}>Submit</button>
            <span className="close" onClick={closePopup}>
              &times;
            </span>
          </div>
          </form> */}
          <div className="card-container-3">
          <div className="popup-image-container ">
            <div>
              <h1 className="popup-heading">Get a Free Demo</h1>
              <p className="popup-para">
                Please Fill the form our expert will contact you
              </p>
              <img
                className="login-logo"
                src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690546385/10-work_2x_fazttu.png"
                alt="website login"
              />
            </div>
          </div>
          <form className="form-container  ">
            <div className="input-container">
              {" "}
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div className="input-container">
              <select
                id="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="input-field"
                required
              >
                <option value="Mendix">Mendix</option>

                <option value="Polarian">Polarian</option>

                <option value="Salesforce">Salesforce</option>

                <option value="Mobile And Web Application">
                  Mobile and Web Application
                </option>

                <option value="Saas And Cloud Solutions">
                  SAAS And Cloud Solutions
                </option>
              </select>
            </div>
            <div className="input-container">
              <input
                type="number"
                id="phoneNumber"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div className="input-container">
              {" "}
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                id="comment"
                placeholder="Enter your Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="popup-button-container">
              <button className="login-button" type="submit">
                SUBMIT
              </button>
            </div>
            <span className="close" onClick={closePopup}>
              &times;
            </span>
          </form>
        </div>
          
        </div>
      )}
    </>
  );
};

export default FirstTimePopup;


// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";

// function LgsPopUp() {
//   //   const [showPopup, setShowPopup] = useState(false);

//   const [email, setEmail] = useState("");

//   const [name, setName] = useState("");

//   const [course, setCourse] = useState("English Communication Blue Print");

//   const [phoneNumber, setPhoneNumber] = useState(null);

//   const [comment, setComment] = useState("");

//   //   const [successMsg, setSuccessMsg] = useState("");

//   //   const [errorMsg, setErrorMsg] = useState("");
//   return (
//     <div>
//       <div className="bg-container-3 ">
        
//       </div>
//     </div>
//   );
// }
// export default LgsPopUp;