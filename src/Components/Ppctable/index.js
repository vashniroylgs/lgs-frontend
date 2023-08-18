import React from 'react';

const Data = [
  {
    "Basic": "PPC Packages",
    "Advanced": "PPC Packages",
    "Enterprise": "PPC Packages",
    
  },
  {
    "Basic": " Campaign – 1",
    "Advanced": " Campaign – 2",
    "Enterprise": " Campaign – 5",
    
    
  },
  {
    "Basic": " AD Groups – 2",
    "Advanced": " AD Groups – 6",
    "Enterprise": " AD Groups – 10",
    
  },
  {
    "Basic": " Ad Copies – Maximum 6",
    "Advanced": " Ad Copies – Maximum 15",
    "Enterprise": " Ad Copies – Maximum 50",
    
    
  },
  {
    "Basic": " No. of Keywords-50",
    "Advanced": " No. of Keywords-100",
    "Enterprise": " No. of Keywords-150",
    
    
  },
  {
    "Basic": " Search Ads",
    "Advanced": " Search Ads",
    "Enterprise": " Search Ads",
   
    
  },
  {
    "Basic": "  Display Ads",
    "Advanced": " Display Ads",
    "Enterprise": " Display Ads",
   
    
  },
  {
    "Basic": " Gmail Ads",
    "Advanced": " Gmail Ads",
    "Enterprise": " Gmail Ads",
   
    
  },
  {
    "Basic": " Video Ads",
    "Advanced": " Video Ads",
    "Enterprise": " Video Ads",
    
  },
  {"Basic": " Shopping Ads",
  "Advanced": " Shopping Ads",
  "Enterprise": " Shopping Ads",
   
    
    
  },
  {
    "Basic": " App Promotion Ads",
    "Advanced": " App Promotion Ads",
    "Enterprise": " App Promotion Ads",
    
    
    
  },
  {
    "Basic": " Remarketing List",
    "Advanced": " Remarketing List",
    "Enterprise": " Remarketing List",
    
    
  },
  {
    "Basic": " Conversion Tracking",
    "Advanced": " Conversion Tracking",
    "Enterprise": " Conversion Tracking",
    
  },
  {
    "Basic": "PPC CAMPAIGN MANAGEMENT",
    "Advanced": "PPC CAMPAIGN MANAGEMENT",
    "Enterprise": "PPC CAMPAIGN MANAGEMENT",
  
    
  },
  {
    "Basic": " Competitor Analysis – Yes",
    "Advanced": " Competitor Analysis – Yes",
    "Enterprise": " Competitor Analysis – Yes",
    
    
  },
  {
    "Basic": " Keyword Optimization – Yes",
    "Advanced": " Keyword Optimization – Yes",
    "Enterprise": " Keyword Optimization – Yes",
    
    
  },
  {
    "Basic": " Ad Copy Optimization – Yes",
    "Advanced": " Ad Copy Optimization – Yes",
    "Enterprise": " Ad Copy Optimization – Yes",
   
    
  },
  {
    "Basic": "VALUE ADDS",
    "Advanced": "VALUE ADDS",
    "Enterprise": "VALUE ADDS",
   
    
  },
  {
    "Basic": " ROI Analysis",
    "Advanced": " ROI Analysis",
    "Enterprise": " ROI Analysis",
  },
  {
    "Basic": " Landing Page Optimization",
    "Advanced": "  Landing Page Optimization",
    "Enterprise": "  Landing Page Optimization", 
  },
  {
    "Basic": " REPORTING",
    "Advanced": " REPORTING",
    "Enterprise": " REPORTING", 
  },
  {
    "Basic": "  Reports – Monthly",
    "Advanced": "  Reports – Monthly",
    "Enterprise": "  Reports – Monthly", 
  },
  {
    "Basic": " Dedicated Account Manager",
    "Advanced": " Dedicated Account Manager",
    "Enterprise": " Dedicated Account Manager", 
  },
  {
    "Basic": " Support – Email, Chat",
    "Advanced": "  Support – Email, Chat",
    "Enterprise": " Support – Email, Chat", 
  },
  
  
];

const PpcTable = () => {
  return (
    <div>
      <h1>
        <center>
        PPC
        </center>
      </h1>
    <table className='table-container'>
      <thead>
        <tr>
          <th className="feature-cell">BASIC</th>
          <th className="feature-cell"> ADVANCED</th>
          <th className="feature-cell">ENTERPRICE</th>
        </tr>
      </thead>
      <tbody >
        {Data.map((row, index) => (
          <tr key={index}>
            <td className='row-cell'>{row.BASIC}</td>
            <td>{row.ADVANCED}</td>
            <td>{row.ENTERPRICE}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
    <button className="learn-more-buttonorm">
      Learn More <BsArrowRightShort className="home-page-arrow" />
    </button>
    </div>
  );
};

export default PpcTable;
