import Lottie from "lottie-react";
import React from "react";
import WhatsappTime from "./WhatsappTime.json";
import "./index.css";

// import Whatsappanimation from './whatsappanimation.json'


const WhatsAppIntegration = () => {
  return (
    <div className="whatsapp-container">
      <a
        className="nav-join-whatsapp-anchor mr-5"
        href="https://chat.whatsapp.com/HPLVEgMc53TB25GXMOTEmy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Lottie
          className="whatsapp-icon"
          loop={true}
          animationData={WhatsappTime}
        />
      </a>
    </div>
  );
};

export default WhatsAppIntegration;
