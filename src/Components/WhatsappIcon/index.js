import Lottie from 'lottie-react';
import React from 'react';
import WhatsappTime from './WhatsappTime.json';
import './index.css'

// import Whatsappanimation from './whatsappanimation.json'

const WhatsAppIntegration = () => {
  return (
    <a className='nav-join-whatsapp-anchor mr-5' href='http://wa.me/917672086195' target='_blank'>
        <Lottie  className="whatsapp-icon" loop={true} animationData={WhatsappTime} />
    </a>
  );
};


export default WhatsAppIntegration;