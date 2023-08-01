import Lottie from 'lottie-react';
import React from 'react';
import WhatsappTime from './WhatsappTime.json';
import './index.css'

// import Whatsappanimation from './whatsappanimation.json'

const WhatsAppIntegration = () => {
  return (
    <a className='nav-join-whatsapp-anchor' href='http://wa.me/919866238940' target='_blank'>
        <Lottie className="whatsapp-icon" loop={true} animationData={WhatsappTime} />
    </a>
  );
};


export default WhatsAppIntegration;