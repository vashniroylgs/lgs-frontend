// import "./index.css";
// import { Component, useState } from "react";
// import ContactTabItem from "../ContactTabs";
// import { Navigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ReCAPTCHA from "react-google-recaptcha";
// import Footer from "../Footer";
// import Header from "../navbar";

// const tabsList = [
//   { tabId: "Services", displayText: "Request for Services" },
//   { tabId: "Team", displayText: "Join our Team" },
//   { tabId: "Queries", displayText: "Other Queries" },
// ];

// // Write your code here

// const ContactPage = () => {
//   const [tab, changeTabId] = useState(tabsList[0].tabId);
//   const [firstName, setservicesFirstName] = useState("");
//   const [lastName, setserviesLastName] = useState("");
//   const [email, setservicesBusinessEmail] = useState("");
//   const [message, setservicesMessage] = useState("");
//   const [queryFirstName, setqueryFirstName] = useState("");
//   const [queryLastName, setqueryLastName] = useState("");
//   const [queryEmail, setqueryEmail] = useState("");
//   const [queryCountry, setqueryCountry] = useState("");
//   const [queryMessage, setqueryMessage] = useState("");
//   const [querySubmitbtn, setQuerySubmitbtn] = useState(false);

//   const changeTab = (tabId) => {
//     changeTabId(tabId);
//   };

//   const submitContactServices = async (e) => {
//     e.preventDefault();
//     const servicesformData = {
//       firstName,
//       lastName,
//       email,
//       message,
//     };

//     try {
//       const response = await fetch("http://localhost:3005/contactlgs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(servicesformData),
//       });
//       if (response.ok) {
//         console.log("services Form submitted successfully");
//         alert("Form Submitted Successfully");
//       } else {
//         console.error("form submission falied");
//       }
//     } catch (error) {
//       console.error("Error", error);
//     }
//   };

//   const submitContactQueries = async (e) => {
//     e.preventDefault();
//     setQuerySubmitbtn(true);
//     const queriesformData = {
//       queryFirstName,
//       queryLastName,
//       queryEmail,
//       queryCountry,
//       queryMessage,
//     };
//     console.log(queriesformData);
//     try {
//       const queryresponse = await fetch("http://localhost:3005/queries", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(queriesformData),
//       });
//       if (queryresponse.ok) {
//         console.log("queries Form submitted successfully");
//         alert("your query has been Submitted Successfully");
//       } else {
//         console.error("query form submission falied");
//       }
//     } catch (error) {
//       console.error("Error", error);
//     } finally {
//       setQuerySubmitbtn(false);
//     }
//   };

//   const onChange = (value) => {
//     console.log("Captcha value:", value);
//   };

//   const [captchaStyles, setCaptchaStyles] = useState({
//     transform: "scale(0.77)",
//     WebkitTransform: "scale(0.77)",
//     transformOrigin: "0 0",
//     WebkitTransformOrigin: "0 0",
//   });

//   const showServicesPage = () => (
//     <form onSubmit={submitContactServices} className="contact-form-container">
//       <h1>Let’s Work Together</h1>
//       <div className="contact-input-fields-container">
//         <input
//           required
//           type="text"
//           className="contact-input-field"
//           placeholder="First Name*"
//           onChange={(e) => setservicesFirstName(e.target.value)}
//         />
//         <input
//           required
//           type="text"
//           className="contact-input-field"
//           placeholder="Last Name*"
//           onChange={(e) => setserviesLastName(e.target.value)}
//         />
//         <input
//           required
//           type="email"
//           className="contact-input-field"
//           placeholder="Business Email Address*"
//           onChange={(e) => setservicesBusinessEmail(e.target.value)}
//         />
//       </div>
//       <div className="d-flex flex-column mt-3">
//         <textarea
//           required
//           className="servicesTextarea"
//           placeholder="Message*"
//           onChange={(e) => setservicesMessage(e.target.value)}
//         />
//       </div>
//       <div>
//         <div className="checkbox-container">
//           <input type="checkbox" required />
//           <p className="contact-checkbox-field">Agree Terms & Coditions</p>
//         </div>
//         <p>
//           Send me occasional information about Labyrinth Global Solutions, a LGS
//           Group Company news and events to the provided email address.
//         </p>
//         <p>You may withdraw your consent at any time.</p>
//         <p>
//           For more information about how Labyrinth Global Solutions protects
//           your privacy and processes your personal data please see our{" "}
//           <a>Privacy Policy</a>
//         </p>
//       </div>
//       <div
//         class="g-recaptcha"
//         data-theme="light"
//         data-sitekey="XXXXXXXXXXXXX"
//         style={captchaStyles}
//         className="google-captcha-container"
//       >
//         <ReCAPTCHA
//           sitekey="6LfHycEnAAAAAF_Yt24Y7H6nxaAXeEZ9OCO4Cxz0"
//           onChange={onChange}
//         />
//       </div>
//       <button className="contact-submit-button" type="submit">
//         SUBMIT
//       </button>
//     </form>
//   );

//   const showTeamPage = () => {
//     return <Navigate to="/careers" />;
//   };

//   const showQueriesPage =  () => (
//     <div className="contact-query-main-container1">
//       <div className="contact-query-main-container2">
//         <h1>Reach Out To Us</h1>
//         <form
//           className="contact-query-form-container"
//           onSubmit={submitContactQueries}
//         >
//           <div className="contact-query-main-container3">
//             <div className="contact-query-first-container">
//               <input
//                 className="query-input-field"
//                 placeholder="First Name"
//                 type="text"
//                 id="firstName"
//                 name="FirstName"
//                 onChange={(e) => setqueryFirstName(e.target.value)}
//               />
//             </div>
//             <div className="contact-query-first-container">
//               <input
//                 className="query-input-field"
//                 placeholder="Last Name"
//                 type="text"
//                 id="lastName"
//                 name="LastName"
//                 onChange={(e) => setqueryLastName(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="contact-query-main-container3">
//             <div className="contact-query-first-container">
//               <input
//                 placeholder="Email"
//                 type="email"
//                 id="email"
//                 className="query-input-field"
//                 name="Email"
//                 onChange={(e) => setqueryEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <div className="contact-query-first-container">
//                 <select
//                   name="Country"
//                   id="position"
//                   className="query-input-options-field"
//                   onChange={(e) => setqueryCountry(e.target.value)}
//                   value={queryCountry}
//                 >
//                   <option value="Country">Country</option>
//                   <option value="Afghanistan">Afghanistan</option>
//                   <option value="Albania">Albania</option>
//                   <option value="Algeria">Algeria</option>
//                   <option value="Andorra">Andorra</option>
//                   <option value="Angola">Angola</option>
//                   <option value="Antigua &amp; Deps">Antigua &amp; Deps</option>
//                   <option value="Argentina">Argentina</option>
//                   <option value="Armenia">Armenia</option>
//                   <option value="Australia">Australia</option>
//                   <option value="Austria">Austria</option>
//                   <option value="Azerbaijan">Azerbaijan</option>
//                   <option value="Bahamas">Bahamas</option>
//                   <option value="Bahrain">Bahrain</option>
//                   <option value="Bangladesh">Bangladesh</option>
//                   <option value="Barbados">Barbados</option>
//                   <option value="Belgium">Belgium</option>
//                   <option value="Belize">Belize</option>
//                   <option value="Benin">Benin</option>
//                   <option value="Bhutan">Bhutan</option>
//                   <option value="Bolivia">Bolivia</option>
//                   <option value="Bosnia Herzegovina">Bosnia Herzegovina</option>
//                   <option value="Botswana">Botswana</option>
//                   <option value="Brazil">Brazil</option>
//                   <option value="Brunei">Brunei</option>
//                   <option value="Bulgaria">Bulgaria</option>
//                   <option value="Burkina">Burkina</option>
//                   <option value="Burundi">Burundi</option>
//                   <option value="Cambodia">Cambodia</option>
//                   <option value="Cameroon">Cameroon</option>
//                   <option value="Canada">Canada</option>
//                   <option value="Cape Verde">Cape Verde</option>
//                   <option value="Central African Rep">
//                     Central African Rep
//                   </option>
//                   <option value="Chad">Chad</option>
//                   <option value="Chile">Chile</option>
//                   <option value="China">China</option>
//                   <option value="Colombia">Colombia</option>
//                   <option value="Comoros">Comoros</option>
//                   <option value="Congo">Congo</option>
//                   <option value="Congo (Democratic Rep)">
//                     Congo (Democratic Rep)
//                   </option>
//                   <option value="Costa Rica">Costa Rica</option>
//                   <option value="Croatia">Croatia</option>
//                   <option value="Cuba">Cuba</option>
//                   <option value="Cyprus">Cyprus</option>
//                   <option value="Czech Republic">Czech Republic</option>
//                   <option value="Denmark">Denmark</option>
//                   <option value="Djibouti">Djibouti</option>
//                   <option value="Dominica">Dominica</option>
//                   <option value="Dominican Republic">Dominican Republic</option>
//                   <option value="East Timor">East Timor</option>
//                   <option value="Ecuador">Ecuador</option>
//                   <option value="Egypt">Egypt</option>
//                   <option value="El Salvador">El Salvador</option>
//                   <option value="Equatorial Guinea">Equatorial Guinea</option>
//                   <option value="Eritrea">Eritrea</option>
//                   <option value="Estonia">Estonia</option>
//                   <option value="Ethiopia">Ethiopia</option>
//                   <option value="Fiji">Fiji</option>
//                   <option value="Finland">Finland</option>
//                   <option value="France">France</option>
//                   <option value="Gabon">Gabon</option>
//                   <option value="Gambia">Gambia</option>
//                   <option value="Georgia">Georgia</option>
//                   <option value="Germany">Germany</option>
//                   <option value="Ghana">Ghana</option>
//                   <option value="Greece">Greece</option>
//                   <option value="Grenada">Grenada</option>
//                   <option value="Guatemala">Guatemala</option>
//                   <option value="Guinea">Guinea</option>
//                   <option value="Guinea-Bissau">Guinea-Bissau</option>
//                   <option value="Guyana">Guyana</option>
//                   <option value="Haiti">Haiti</option>
//                   <option value="Honduras">Honduras</option>
//                   <option value="Hungary">Hungary</option>
//                   <option value="Iceland">Iceland</option>
//                   <option value="India">India</option>
//                   <option value="Indonesia">Indonesia</option>
//                   <option value="Iran">Iran</option>
//                   <option value="Ireland (Republic)">Ireland (Republic)</option>
//                   <option value="Israel">Israel</option>
//                   <option value="Italy">Italy</option>
//                   <option value="Ivory Coast">Ivory Coast</option>
//                   <option value="Jamaica">Jamaica</option>
//                   <option value="Japan">Japan</option>
//                   <option value="Jordan">Jordan</option>
//                   <option value="Kazakhstan">Kazakhstan</option>
//                   <option value="Kenya">Kenya</option>
//                   <option value="Kiribati">Kiribati</option>
//                   <option value="Korea North">Korea North</option>
//                   <option value="Korea South">Korea South</option>
//                   <option value="Kosovo">Kosovo</option>
//                   <option value="Kuwait">Kuwait</option>
//                   <option value="Kyrgyzstan">Kyrgyzstan</option>
//                   <option value="Laos">Laos</option>
//                   <option value="Latvia">Latvia</option>
//                   <option value="Lebanon">Lebanon</option>
//                   <option value="Lesotho">Lesotho</option>
//                   <option value="Liberia">Liberia</option>
//                   <option value="Libya">Libya</option>
//                   <option value="Liechtenstein">Liechtenstein</option>
//                   <option value="Lithuania">Lithuania</option>
//                   <option value="Luxembourg">Luxembourg</option>
//                   <option value="Macedonia">Macedonia</option>
//                   <option value="Madagascar">Madagascar</option>
//                   <option value="Malawi">Malawi</option>
//                   <option value="Malaysia">Malaysia</option>
//                   <option value="Maldives">Maldives</option>
//                   <option value="Mali">Mali</option>
//                   <option value="Malta">Malta</option>
//                   <option value="Marshall Islands">Marshall Islands</option>
//                   <option value="Mauritania">Mauritania</option>
//                   <option value="Mauritius">Mauritius</option>
//                   <option value="Mexico">Mexico</option>
//                   <option value="Micronesia">Micronesia</option>
//                   <option value="Moldova">Moldova</option>
//                   <option value="Monaco">Monaco</option>
//                   <option value="Mongolia">Mongolia</option>
//                   <option value="Montenegro">Montenegro</option>
//                   <option value="Morocco">Morocco</option>
//                   <option value="Mozambique">Mozambique</option>
//                   <option value="Myanmar (Burma)">Myanmar (Burma)</option>
//                   <option value="Namibia">Namibia</option>
//                   <option value="Nauru">Nauru</option>
//                   <option value="Nepal">Nepal</option>
//                   <option value="Netherlands">Netherlands</option>
//                   <option value="New Zealand">New Zealand</option>
//                   <option value="Nicaragua">Nicaragua</option>
//                   <option value="Niger">Niger</option>
//                   <option value="Nigeria">Nigeria</option>
//                   <option value="Norway">Norway</option>
//                   <option value="Oman">Oman</option>
//                   <option value="Pakistan">Pakistan</option>
//                   <option value="Palau">Palau</option>
//                   <option value="Panama">Panama</option>
//                   <option value="Papua New Guinea">Papua New Guinea</option>
//                   <option value="Paraguay">Paraguay</option>
//                   <option value="Peru">Peru</option>
//                   <option value="Philippines">Philippines</option>
//                   <option value="Poland">Poland</option>
//                   <option value="Portugal">Portugal</option>
//                   <option value="Qatar">Qatar</option>
//                   <option value="Romania">Romania</option>
//                   <option value="Rwanda">Rwanda</option>
//                   <option value="St Kitts &amp; Nevis">
//                     St Kitts &amp; Nevis
//                   </option>
//                   <option value="St Lucia">St Lucia</option>
//                   <option value="Saint Vincent &amp; the Grenadines">
//                     Saint Vincent &amp; the Grenadines
//                   </option>
//                   <option value="Samoa">Samoa</option>
//                   <option value="San Marino">San Marino</option>
//                   <option value="Sao Tome &amp; Principe">
//                     Sao Tome &amp; Principe
//                   </option>
//                   <option value="Saudi Arabia">Saudi Arabia</option>
//                   <option value="Senegal">Senegal</option>
//                   <option value="Serbia">Serbia</option>
//                   <option value="Seychelles">Seychelles</option>
//                   <option value="Sierra Leone">Sierra Leone</option>
//                   <option value="Singapore">Singapore</option>
//                   <option value="Slovakia">Slovakia</option>
//                   <option value="Slovenia">Slovenia</option>
//                   <option value="Solomon Islands">Solomon Islands</option>
//                   <option value="Somalia">Somalia</option>
//                   <option value="South Africa">South Africa</option>
//                   <option value="South Sudan">South Sudan</option>
//                   <option value="Spain">Spain</option>
//                   <option value="Sri Lanka">Sri Lanka</option>
//                   <option value="Sudan">Sudan</option>
//                   <option value="Suriname">Suriname</option>
//                   <option value="Swaziland">Swaziland</option>
//                   <option value="Sweden">Sweden</option>
//                   <option value="Switzerland">Switzerland</option>
//                   <option value="Syria">Syria</option>
//                   <option value="Taiwan">Taiwan</option>
//                   <option value="Tajikistan">Tajikistan</option>
//                   <option value="Tanzania">Tanzania</option>
//                   <option value="Thailand">Thailand</option>
//                   <option value="Togo">Togo</option>
//                   <option value="Tonga">Tonga</option>
//                   <option value="Trinidad &amp; Tobago">
//                     Trinidad &amp; Tobago
//                   </option>
//                   <option value="Tunisia">Tunisia</option>
//                   <option value="Turkey">Turkey</option>
//                   <option value="Turkmenistan">Turkmenistan</option>
//                   <option value="Tuvalu">Tuvalu</option>
//                   <option value="Uganda">Uganda</option>
//                   <option value="Ukraine">Ukraine</option>
//                   <option value="United Arab Emirates">
//                     United Arab Emirates
//                   </option>
//                   <option value="United Kingdom">United Kingdom</option>
//                   <option value="United States">United States</option>
//                   <option value="Uruguay">Uruguay</option>
//                   <option value="Uzbekistan">Uzbekistan</option>
//                   <option value="Vanuatu">Vanuatu</option>
//                   <option value="Vatican City">Vatican City</option>
//                   <option value="Venezuela">Venezuela</option>
//                   <option value="Vietnam">Vietnam</option>
//                   <option value="Yemen">Yemen</option>
//                   <option value="Zambia">Zambia</option>
//                   <option value="Zimbabwe">Zimbabwe</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           <textarea
//             className="massage-container"
//             placeholder="Message"
//             rows="5"
//             cols="75"
//             onChange={(e) => setqueryMessage(e.target.value)}
//           ></textarea>
//           <div className="contact-query-checkbox-container">
//             <input type="checkbox" />
//             <div>
//               <p>
//                 Send me occasional information about GlobalLogic, a Hitachi
//                 Group Company news and events to the provided email address.
//               </p>
//               <p>
//                 You may withdraw your consent at any time. For more information
//                 about how GlobalLogic protects your privacy and processes your
//                 personal data please see our Privacy Policy.
//               </p>
//             </div>
//           </div>
//           <div
//             class="g-recaptcha"
//             data-theme="light"
//             data-sitekey="XXXXXXXXXXXXX"
//             style={captchaStyles}
//             className="google-captcha-container"
//           >
//             <ReCAPTCHA
//               sitekey="6LfHycEnAAAAAF_Yt24Y7H6nxaAXeEZ9OCO4Cxz0"
//               onChange={onChange}
//             />
//           </div>
//           <button className="contact-submit-button" type="submit">
//             {querySubmitbtn ? "Submitting.." : "SUBMIT"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );

//   const ShowForm = () => {
//     switch (tab) {
//       case "Services":
//         return showServicesPage();
//       case "Team":
//         return showTeamPage();
//       default:
//         return showQueriesPage();
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="contact-page-main-container">
//         <div className="Contact-hero-section">
//           <h1>How Can I help You ?</h1>
//           <p>
//             Whether you’re searching for a new engineering partner or starting a
//             new career, we would love to hear from you.
//           </p>
//         </div>
//         <div className="container">
//           <h1>Get in touch</h1>
//           <p>
//             Please fill out the form below. You can also contact us via
//             email/phone, and our team will gladly handle your request!
//           </p>
//           <ul className="tabs-container">
//             {tabsList.map((eachTab) => (
//               <ContactTabItem
//                 isActive={tab === eachTab.tabId}
//                 tabDetails={eachTab}
//                 changeTab={changeTab}
//                 key={eachTab.tabId}
//               />
//             ))}
//           </ul>
//           <div className="app-item-container">
//             <div className="contact-form-main-contianer">{ShowForm()}</div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ContactPage;
import "./index.css";
import { Component, useState } from "react";
import ContactTabItem from "../ContactTabs";
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "../Footer";
import Header from "../navbar";
import ReactSelect from "react-select";
import countries from "countries-list";

const tabsList = [
  { tabId: "Services", displayText: "Request for Services" },
  { tabId: "Team", displayText: "Join our Team" },
  { tabId: "Queries", displayText: "Other Queries" },
];

// Write your code here

const ContactPage = () => {
  const [tab, changeTabId] = useState(tabsList[0].tabId);
  const [firstName, setservicesFirstName] = useState("");
  const [lastName, setserviesLastName] = useState("");
  const [email, setservicesBusinessEmail] = useState("");
  const [message, setservicesMessage] = useState("");
  const [Submitbtn, setSubmitbtn] = useState(false);
  const [queryFirstName, setqueryFirstName] = useState("");
  const [queryLastName, setqueryLastName] = useState("");
  const [queryEmail, setqueryEmail] = useState("");
  const [queryCountry, setqueryCountry] = useState("");
  const [queryMessage, setqueryMessage] = useState("");
  const [querySubmitbtn, setQuerySubmitbtn] = useState(false);
  const [isServicesRecaptchaVerified, setIsServicesRecaptchaVerified] =
    useState(false);
  const [isQueryRecaptchaVerified, setIsQueryRecaptchaVerified] =
    useState(false);

  const changeTab = (tabId) => {
    changeTabId(tabId);
  };
  const countryOptions = Object.keys(countries.countries).map((code) => ({
    value: code,
    label: countries.countries[code].name,
  }));

  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  const submitContactServices = async (e) => {
    e.preventDefault();
    setSubmitbtn(true);
    const servicesformData = {
      firstName,
      lastName,
      email,
      message,
    };

    try {
      const response = await fetch(`${apiUrl}/contactlgs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(servicesformData),
      });
      if (response.ok) {
        console.log("services Form submitted successfully");
        setservicesFirstName("");
        setserviesLastName("");
        setservicesBusinessEmail("");
        setservicesMessage("");
        alert("Form Submitted Successfully");
      } else {
        console.error("form submission falied");
      }
    } catch (error) {
      console.error("Error", error);
      
    }finally {
      setSubmitbtn(false);
    }
  };

  const submitContactQueries = async (e) => {
    e.preventDefault();
    setQuerySubmitbtn(true);
    const queriesformData = {
      queryFirstName,
      queryLastName,
      queryEmail,
      queryCountry,
      queryMessage,
    };
    console.log(queriesformData);
    try {
      const queryresponse = await fetch(`${apiUrl}/queries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(queriesformData),
      });
      if (queryresponse.ok) {
        console.log("queries Form submitted successfully");
        setqueryFirstName("");
        setqueryLastName("");
        setqueryEmail("");
        setqueryCountry("");
        setqueryMessage("");
        alert("your query has been Submitted Successfully");
      } else {
        console.error("query form submission falied");
      }
    } catch (error) {
      console.error("Error", error);
    } finally {
      setQuerySubmitbtn(false);
    }
  };

  const handleServicesCaptchaChange = (value) => {
    setIsServicesRecaptchaVerified(true);
  };

  const handleQueryCaptchaChange = (value) => {
    setIsQueryRecaptchaVerified(true);
  };

  const [captchaStyles, setCaptchaStyles] = useState({
    transform: "scale(0.77)",
    WebkitTransform: "scale(0.77)",
    transformOrigin: "0 0",
    WebkitTransformOrigin: "0 0",
  });

  const showServicesPage = () => (
    <form onSubmit={submitContactServices} className="contact-form-container">
      <h1 className="contact-services-heading">Let’s Work Together</h1>
      <div className="contact-input-fields-container">
        <input
          required
          type="text"
          className="contact-input-field"
          value={firstName}
          placeholder="First Name*"
          onChange={(e) => setservicesFirstName(e.target.value)}
        />
        <input
          required
          type="text"
          value={lastName}
          className="contact-input-field"
          placeholder="Last Name*"
          onChange={(e) => setserviesLastName(e.target.value)}
        />
        <input
          required
          type="email"
          value={email}
          className="contact-input-field"
          placeholder="Business Email Address*"
          onChange={(e) => setservicesBusinessEmail(e.target.value)}
        />
      </div>
      <div className="servicesTextarea-container">
        <textarea
          required
          value={message}
          className="servicesTextarea"
          placeholder="Message*"
          onChange={(e) => setservicesMessage(e.target.value)}
        />
      </div>
      <div>
        <div className="checkbox-container mb-2 mt-2">
          <input type="checkbox" required />
          <p className="contact-terms-description m-0">
            Agree Terms & Coditions
          </p>
        </div>
        <p className="contact-terms-description">
          Send me occasional information about Labyrinth Global Solutions, a LGS
          Group Company news and events to the provided email address.
        </p>
        <p className="contact-terms-description">
          You may withdraw your consent at any time.
        </p>
        <p className="contact-terms-description">
          For more information about how Labyrinth Global Solutions protects
          your privacy and processes your personal data please see our{" "}
          <a>Privacy Policy</a>
        </p>
      </div>
      <div
        class="g-recaptcha"
        data-theme="light"
        data-sitekey="XXXXXXXXXXXXX"
        style={captchaStyles}
        className="google-captcha-container"
      >
        <ReCAPTCHA
          sitekey="6LfHycEnAAAAAF_Yt24Y7H6nxaAXeEZ9OCO4Cxz0"
          onChange={handleServicesCaptchaChange}
        />
      </div>
      <button
        className="contact-submit-button"
        type="submit"
        disabled={!isServicesRecaptchaVerified}
      >
        {Submitbtn ? "Submitting.." : "SUBMIT"}
      </button>
    </form>
  );

  const showTeamPage = () => {
    return <Navigate to="/careers" />;
  };

  const showQueriesPage = () => (
    <form
      className="contact-query-form-container"
      onSubmit={submitContactQueries}
    >
      <h1>Reach Out To Us</h1>
      <div className="contact-query-input-fields-container">
        <input
          className="query-input-field"
          placeholder="First Name*"
          required
          type="text"
          id="firstName"
          value={queryFirstName}
          name="FirstName"
          onChange={(e) => setqueryFirstName(e.target.value)}
        />
        <input
          className="query-input-field"
          placeholder="Last Name*"
          required
          type="text"
          id="lastName"
          value={queryLastName}
          name="LastName"
          onChange={(e) => setqueryLastName(e.target.value)}
        />
        <input
          placeholder="Email*"
          type="email"
          required
          id="email"
          value={queryEmail}
          className="query-input-field"
          name="Email"
          onChange={(e) => setqueryEmail(e.target.value)}
        />

        <ReactSelect
          options={countryOptions}
          onChange={(selectedOption) => setqueryCountry(selectedOption.value)}
          className="query-input-field"
          value={countryOptions.find((option) => option.value === queryCountry)}
          placeholder="Country"
          styles={{
            // Override default styles
            control: (provided) => ({
              ...provided,
              border: "1px solid #ccc",
              borderRadius: "4px",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#007bff" : "white",
              color: state.isSelected ? "white" : "black",
            }),
          }}
        />
      </div>
      <div className="query-Textarea-container">
        <textarea
          placeholder="Message*"
          required
          value={queryMessage}
          className="queryTextarea"
          onChange={(e) => setqueryMessage(e.target.value)}
        ></textarea>
      </div>
      <div>
        <div className="checkbox-container mb-2 mt-2">
          <input type="checkbox" required />
          <p className="contact-terms-description m-0">
            Agree Terms & Coditions
          </p>
        </div>
        <p className="contact-terms-description">
          Send me occasional information about Labyrinth Global Solutions, a LGS
          Group Company news and events to the provided email address.
        </p>
        <p className="contact-terms-description">
          You may withdraw your consent at any time.
        </p>
        <p className="contact-terms-description">
          For more information about how Labyrinth Global Solutions protects
          your privacy and processes your personal data please see our{" "}
          <a>Privacy Policy</a>
        </p>
      </div>
      <div
        class="g-recaptcha"
        data-theme="light"
        data-sitekey="XXXXXXXXXXXXX"
        style={captchaStyles}
        className="google-captcha-container"
      >
        <ReCAPTCHA
          sitekey="6LfHycEnAAAAAF_Yt24Y7H6nxaAXeEZ9OCO4Cxz0"
          onChange={handleQueryCaptchaChange}
        />
      </div>
      <button
        className="contact-submit-button"
        type="submit"
        disabled={!isQueryRecaptchaVerified}
      >
        {querySubmitbtn ? "Submitting.." : "SUBMIT"}
      </button>
    </form>
  );

  const ShowForm = () => {
    switch (tab) {
      case "Services":
        return showServicesPage();
      case "Team":
        return showTeamPage();
      default:
        return showQueriesPage();
    }
  };

  return (
    <>
      <Header />
      <div className="contact-page-main-container">
        <div className="Contact-hero-section">
          <h1>How Can We help You ?</h1>
          <p className="contactus-hero-section-description">
            Whether you’re searching for a new engineering partner or starting a
            new career, we would love to hear from you.
          </p>
        </div>
        <div className="contact-container">
          <h1>Get in touch</h1>
          <p className="contact-getin-touch-description">
            Please fill out the form below. You can also contact us via
            email/phone, and our team will gladly handle your request!
          </p>
          <ul className="tabs-container">
            {tabsList.map((eachTab) => (
              <ContactTabItem
                isActive={tab === eachTab.tabId}
                tabDetails={eachTab}
                changeTab={changeTab}
                key={eachTab.tabId}
              />
            ))}
          </ul>
          <div className="contact-form-main-contianer">{ShowForm()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
