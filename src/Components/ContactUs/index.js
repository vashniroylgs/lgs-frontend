// import {Component} from "react"
// import "./index.css"


// class ContactUs extends Component{

//     state={name:"",email:"",message:""}


//     namechange=event=>{

//         this.setState({name:event.target.value})

//     }

//     emaichange=event=>{

//         this.setState({email:event.target.value})

//     }

// messagechange=event=>{

//     this.setState({message:event.target.value})

// }




// submitted=event=>{

//     event.preventDefault()

//     console.log(this.state)

//     //API CALL SHOULD BE WRITTEN TO PROCESS WITH DATA

// }

//     render(){

//         const{name,email,message}=this.state

//     return(
//         <div className="container-fluid">
//             <div className="totalContactUsContainer" >
//                 <div className="contactUsContainer">
//                     <div className="detailsContainer shadow">
//                         <form className="formContainer p-3" onSubmit={this.submitted}>
//                             <h1 className="text-center text-danger">C O N T A C T U S</h1>
//                             <label htmlFor="name" className="mt-3">Fullname</label>

//                             <input value={name} type="text" onChange={this.namechange} placeholder="Fullname" className="smallInput" id="name"/>

//                             <label htmlFor="email" className="mt-3">Email</label>

//                             <input type="text" value={email} onChange={this.emailchange} placeholder="Email" className="smallInput" id="email"/>

//                             <label htmlFor="message" className="mt-3">Message</label>

//                             <input type="text" value={message}  placeholder="Type Your Message" onChange={this.messagechange} className="largeInput" id="message"/>

//                             <button   className=" mt-3 contactbutton btn btn-danger" type="submit">Submit</button>
//                         </form>
//                     </div>

//                     <div className="aboutUsContainer p-3" >
//                         <h1 className="text-left contactfind">F I N D US</h1>
//                         <p className="text-left contactPara">Launched in 2004, the World-Wide Labyrinth Locator has been designed to be an easy-to-use database of labyrinths around the world. Information about labyrinths you can visit, including their locations, pictures, and contact details, are accessible here, along with information about the many types of labyrinths found worldwide. Labyrinths occur in many forms, shapes, and sizes, and the Locator contains both historic and modern examples. At the current time the Worldwide Labyrinth Locator database contains more than 6250 labyrinths (including a few mazes) in more than 90 different countries around the world.</p>
//                         <a href=" https://goo.gl/maps/AB4kAJK1xedFZLmu6" target="_blank">  <button type="button" className="btn btn-danger">Find Locations <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
//                         <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
//                     </svg></button></a>
//                     </div>
//                 </div>
//             </div>
//     </div>
//     )
//     }
// }




// export default ContactUs
import React, { useState } from 'react';
import './index.css';

const ContactUs = ({ onComplete }) => {
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

          // Reset form fields after successful submission
          setName('');
          setEmail('');
          setPhone('');
          setWhatsapp('');
          setService('');
          setMessage('');
        } else {
          // Registration failed - User already exists or other error
          setAlertMessage('User with this email already exists or you have entered wrong information');
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
    <div className="Contactus_container">
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
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
