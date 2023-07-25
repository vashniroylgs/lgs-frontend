// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import ContactUs from './ContactUs/index';
// import './modal.css';

// const ContactUsModal = ({ onComplete, onClose }) => {
//   const [isModalOpen, setIsModalOpen] = useState(true);

//   const closeModal = () => {
//     setIsModalOpen(false);
//     onClose(); // Call the onClose function provided by App.js to handle the modal close action
//   };

//   return (
//     <Modal
//       isOpen={isModalOpen}
//       onRequestClose={closeModal}
//       contentLabel="Contact Us"
//       className="modal"
//       overlayClassName="overlay"
//     >
//       <ContactUs onComplete={onComplete} onClose={closeModal} />
//     </Modal>
//   );
// };

// export default ContactUsModal;
