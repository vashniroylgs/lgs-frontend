import React from 'react';

const VisitTracker = ({ visitCount }) => {
  const styles = {
    trackerContainer: {
      position: 'fixed',
      top: '65px',
      width:"120px",
      height:"80px",
      right: '10px',
      backgroundColor: 'blue',
      color: 'white',
      padding: '20px',
      borderRadius: '50%',
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
      zIndex: 9999, // Set a higher z-index to make it appear above the background image
      cursor: 'pointer', // Add cursor pointer to indicate it's clickable
    },
    visitCountStyle: {
      margin: '0',
    },
    trackerContainerHover: {
      backgroundColor: 'darkblue', // Change background color on hover
    },
  };

  const handleHover = () => {
    // Function to add hover effect
    const trackerContainer = document.getElementById('tracker-container');
    trackerContainer.style.backgroundColor = styles.trackerContainerHover.backgroundColor;
  };

  const handleMouseOut = () => {
    // Function to revert to original style after hover
    const trackerContainer = document.getElementById('tracker-container');
    trackerContainer.style.backgroundColor = styles.trackerContainer.backgroundColor;
  };

  return (
    <div
      id="tracker-container"
      style={styles.trackerContainer}
      onMouseEnter={handleHover} // Add onMouseEnter event to trigger hover effect
      onMouseLeave={handleMouseOut} // Add onMouseLeave event to revert to original style
    >
      <p style={styles.visitCountStyle}>Total Visits: {visitCount}</p>
    </div>
  );
};

export default VisitTracker;