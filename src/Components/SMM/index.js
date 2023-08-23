import React from "react";
import "./index.css";
import Header from "../navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
const Data = [
  {
    Basic: "Account Management – 2",
    Professional: "Account Management – 3",
    Advanced: "Account Management – 5",
  },
  {
    Basic: "Creation Of Campaign – 1",
    Professional: "Creation Of Campaign – 1",
    Advanced: "Creation Of Campaign – 1",
  },
  {
    Basic: "Facebook Marketing",
    Professional: "Facebook Marketing",
    Advanced: "Facebook Marketing",
  },
  {
    Basic:"Facebook Business Manager Set Up",
    Professional: "Facebook Business Manager Set Up",
    Advanced:  "Facebook Business Manager Set Up",
  },
  {
    Basic: "Pixel Installation",
    Professional:"Pixel Installation",
    Advanced:"Pixel Installation",
  },
  {
    Basic:"Custom Conversion Creation",
    Professional:"Custom Conversion Creation",
    Advanced:"Custom Conversion Creation",
  },
  {
    Basic:"Remarketing",
    Professional:"Remarketing",
    Advanced:"Remarketing",
  },
  {
    Basic:" Custom Audience Creation",
    Professional:" Custom Audience Creation",
    Advanced:" Custom Audience Creation",
  },
  {
    Basic: "Creation Of Automated Rules",
    Professional: "Creation Of Automated Rules",
    Advanced: "Creation Of Automated Rules",
  },
  {
    Basic: "Facebook Analytics Report Creation",
    Professional: "Facebook Analytics Report Creation",
    Advanced: "Facebook Analytics Report Creation",
  },
  {
    Basic:"Ad Campaign Monitoring",
    Professional:"Ad Campaign Monitoring",
    Advanced:"Ad Campaign Monitoring",
  },
  {
    Basic:"Catalogue Creation",
    Professional:"Catalogue Creation",
    Advanced:"Catalogue Creation",
  },
  {
    Basic: "Dynamic Ads Creation",
    Professional: "Dynamic Ads Creation",
    Advanced: "Dynamic Ads Creation",
  },
  {
    Basic: "Instant Experience Ads Creation",
    Professional: "Instant Experience Ads Creation",
    Advanced: "Instant Experience Ads Creation",
  },
  {
    Basic:"Customization Of Ad Placements",
    Professional:"Customization Of Ad Placements",
    Advanced:"Customization Of Ad Placements",
  },
  {
    Basic: "A/B Testing Of Ad Set, Creative &",
    Professional: "A/B Testing Of Ad Set, Creative &",
    Advanced: "A/B Testing Of Ad Set, Creative &",
  },
  {
    Basic:'',
    Professional:"Placement",
    Advanced:"Placement",
  },
  {
    Basic:'',
    Professional:"Carousel And Collection Ads",
    Advanced:"Carousel And Collection Ads",
  },
  {
    Basic:'',
    Professional:"Traffic Monitoring",
    Advanced:"Traffic Monitoring",
  },
  {
    Basic:'',
    Professional:"Monthly Report",
    Advanced:"Monthly Report",
  },
  {
    Basic: "Instagram Marketing",
    Professional: "Instagram Marketing",
    Advanced: "Instagram Marketing",
  },
  {
    Basic: [
      "Audience Research",
      "Instagram Ads Creative Creation & Design",
      "Instagram Ads Monitoring And Management",
    ],
    Professional: [
      "Audience Research",
      "Instagram Ads Creative Creation & Design",
      "Instagram Ads Monitoring And Management",
    ],
    Advanced: [
      "Audience Research",
      "Instagram Ads Creative Creation & Design",
      "Instagram Ads Monitoring And Management",
    ],
  },
  {
    Basic: "",
    Professional: "LinkedIn Marketing",
    Advanced: "LinkedIn Marketing",
  },
  {
    Basic: [],
    Professional: [
      "Campaign Manager Account Set Up",
      "LinkedIn Insight Tag Installation",
      "Creation Of Custom Conversion",
      "Ads Monitoring",
      "Monthly Report",
    ],
    Advanced: [
      "Campaign Manager Account Set Up",
      "LinkedIn Insight Tag Installation",
      "Creation Of Custom Conversion",
      "Ads Monitoring",
      "Monthly Report",
    ],
  },
  {
    Basic: "",
    Professional: "Youtube Marketing",
    Advanced: "Youtube Marketing",
  },
  {
    Basic: [],
    Professional: [
      "Youtube Ad Account Set Up",
      "Skippable In-Stream Ads",
      "Non-Skippable In-Stream Ads",
      "Bumper Ads",
      "Discovery Ads",
      "Youtube Video Sequence Ads",
      "Detailed Audience Creation",
      "Custom Audience Creation",
      "A/B Testing Of Targeting",
      "Remarketing Video Ads",
      "Video Ads With Promotion Of Your Products",
      "Monthly Report",
    ],
    Advanced: [
      "Youtube Ad Account Set Up",
      "Skippable In-Stream Ads",
      "Non-Skippable In-Stream Ads",
      "Bumper Ads",
      "Discovery Ads",
      "Youtube Video Sequence Ads",
      "Detailed Audience Creation",
      "Custom Audience Creation",
      "A/B Testing Of Targeting",
      "Remarketing Video Ads",
      "Video Ads With Promotion Of Your Products",
      "Monthly Report",
    ],
  },
  {
    Basic: "",
    Professional: "Twitter Marketing",
    Advanced: "Twitter Marketing",
  },
  {
    Basic: [],
    Professional: [
      "Tweet Engagement Ads",
      "Video Or GIF View Ads",
      "Awareness Ads",
      " Website Conversion Ads",
      "In-stream Video View Ads",
      "Follower Ads",
      "App Install Ads",
      "App Reengagement",
      "Audience Creation",
      "Monthly Report",
    ],
    Advanced: [
      "Tweet Engagement Ads",
      "Video Or GIF View Ads",
      "Awareness Ads",
      "Website Conversion Ads",
      "In-stream Video View Ads",
      "Follower Ads",
      "App Install Ads",
      "App Reengagement",
      "Audience Creation",
      "Monthly Report",
    ],
  },
];

const Smm = () => {
  return (
    <>
      <Header />
      <div className="smm-main-container">
        <h1 className="smm-heading">
          Our Monthly Social Media Marketing Pricing Plans
        </h1>
        <table>
          <thead>
            <tr>
              <th className="smm-column">BASIC</th>
              <th className="smm-column-1">PROFESSIONAL</th>
              <th className="smm-column-2">ADVANCED</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((row, index) => (
              <tr key={index}>
                <td>
                  {Array.isArray(row.Basic)
                    ? row.Basic.map((item, idx) => <div key={idx}>{item}</div>)
                    : row.Basic}
                </td>
                <td>
                  {Array.isArray(row.Professional)
                    ? row.Professional.map((item, idx) => (
                        <div key={idx}>{item}</div>
                      ))
                    : row.Professional}
                </td>
                <td>
                  {Array.isArray(row.Advanced)
                    ? row.Advanced.map((item, idx) => (
                        <div key={idx}>{item}</div>
                      ))
                    : row.Advanced}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="smm-button">
          <Link to="/contactus">
            <button className="learn-more-button-smm">Get Quote</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Smm;
