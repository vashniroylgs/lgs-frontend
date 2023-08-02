import React, { Component } from 'react';
import career from "../images/careers.jpg"
import 'bootstrap/dist/css/bootstrap.css';
import ContactForm from './CarrerContactform';
import "./index .css"

class Careers extends Component{
    render(){
        return(
        <div className="container">
            <div className="row ">
                <div className='col-12 col-md-5 careers-heading-container'>
                <h1 className='careers-heading'>CAREERS</h1>
                <h3>Passion for Tech?</h3>
                    <h3>We're Hiring!</h3>
                    <h3>Join Us and Ignite Your Career </h3>
                    <p>We are excited to have you explore the opportunities 
                    we have to offer for talented individuals like you. Our company 
                    is committed to building innovative digital solutions and creating a
                     positive impact in the tech industry. Join us on this exciting journey of 
                     creativity and technology by exploring our open positions </p>
                </div>
                <div class=" col-12 col-md-7 careers-image-container">
                <img className='careers-image' alt='' src={career}/>
                </div>
            </div>
            <ContactForm/>
        </div>
        )
    }
}

export default Careers