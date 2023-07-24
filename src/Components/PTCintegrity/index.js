import React from 'react'
import { FaCheck } from 'react-icons/fa';
import './index.css'


const Ptcintegrety = () => {
  return (
    <div className='ptc-mainContainer'>
      <div className='ptc-alm-container'>
        <div className='alm-description-Card'>
            <h1 className='polarian-heading'>POLARION ALM</h1>
            <p>LGS is Siemens Polarion Channel partner in India.</p>
            <p>LGS have been working in Polarion ALM space since 2014 even before Siemens acquisition of Polarion.</p>
            <p>We have been delivering flawless services across global to various industries such as Automotive, Aerospace, Oil & Gas and Life Science.</p>
        </div>
        
        <img className='thingworx-image' alt='ptc' src='https://res.cloudinary.com/dots1s0gu/image/upload/v1689763455/ptc-intigrity_t53sgc.png'/>
        
      </div>
      <div className='ptc-alm-container'>
        
        <img className='thingworx-image' alt='ptc' src='https://res.cloudinary.com/dots1s0gu/image/upload/v1689763447/thingworx_lwwvie.jpg'/>
        
        <div className='alm-description-Card'>
            <h1 className='polarian-heading'>BENEFITS & VALUE ADDITION OF POLARION</h1>
            <ul>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>Installation, Upgrade and Maintenance of PTC ThingWorx Server on both Windows as well as Linux Operating System</li>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>Tool Integration with ThingWorx Platform</li>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>ThingWorx LDAP Configuration</li>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>ThingWorx SSO Configuration using Ping Federate</li>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>ThingWorx Custom Widget Development</li>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>Edge Device Communication with ThingWorx Platform</li>
            </ul>
        </div>
      </div>
      <div className='ptc-services-card-container'>
      <div className='ptc-services-container'>
        <h3 className='ptc-services-heading '>IoT Development with ThingWorx</h3>
        <hr/>
        <ul>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>IoT use case development</li>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>Data architecture strategy</li>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>Implement architecture for managing IoT devices and systems</li>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>Agents, clients and edge communication fundamentals</li>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>REST API connectivity</li>
        </ul>
      </div>
      <div className='ptc-services-container'>
        <h3 className='ptc-services-heading '>IoT Modeling with ThingWorx</h3>
        <hr/>
        <ul>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>User-centered solution design</li>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>Modeling patterns and strategies</li>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>Data structures, Events and Subscriptions</li>
            <li className='list-items'><span className='check-icons'><FaCheck/></span>Wrapped JavaScript services</li>
        </ul>
      </div>
      </div> 
      </div>  
  )
}

export default Ptcintegrety