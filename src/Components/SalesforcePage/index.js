// import React, { Component } from "react";
// import { FaCheck } from "react-icons/fa";
// import salesforceanimation from "./salesforceanimation.json";
// import Lottie from "lottie-react";
// import "./index.css";

// class SalesForce extends Component {
//   componentDidMount() {
//     // Attach the scroll event listener to the window
//     window.addEventListener("scroll", this.handleScroll);
//   }

//   componentWillUnmount() {
//     // Remove the scroll event listener when the component is unmounted
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   handleScroll = () => {
//     var revals = document.querySelectorAll(".salesforce-reval");
//     for (var i = 0; i < revals.length; i++) {
//       var windowheight = window.innerHeight;
//       var revaltop = revals[i].getBoundingClientRect().top;
//       var revalpoint = 150;
//       if (revaltop < windowheight - revalpoint) {
//         revals[i].classList.add("active");
//       } else {
//         revals[i].classList.remove("active");
//       }
//     }
//   };
//   render() {
//     return (
//       <div className="container-fluid salesforce-main-container">
//         <div className="row mr-0 p-5">
//           <div className="sales-force-container col-12">
//             <h3 className="sales-heading">
//               Experience the Power of Salesforce with Labyrinth Global Solutions
//             </h3>
//           </div>
//         </div>

//         <div className="row sales-force-cardcontainer p-5  ">
//           <div className="col-md-6 col-12">
//             <h1>SalesForce</h1>
//             <p>
//               Welcome to Labyrinth Global Solutions, your premier provider of
//               Salesforce Industries solutions. We specialize in leveraging the
//               power of Salesforce Industries to help businesses transform their
//               operations, drive growth, and deliver exceptional customer
//               experiences.
//             </p>
//             <p>
//               We provide businesses with access to the industry-leading customer
//               relationship management (CRM) platform, empowering organizations
//               to enhance their sales, marketing, and customer support processes.
//             </p>
//             <p>
//               Unlock the full potential of your business with Salesforce,
//               implemented and supported by Labyrinth Global Solutions. Contact
//               us today to schedule a consultation and discover how Salesforce
//               can revolutionize your sales, marketing, and customer support
//               processes.
//             </p>
//           </div>
//           <div className="col-12 col-md-6">
//             <Lottie
//               loop={true}
//               animationData={salesforceanimation}
//               height={200}
//               width={300}
//             />
//           </div>
//         </div>

//         <div className="row p-5">
//           <h1 className="salesforce-offerings text-center ">
//             LABYRINTH OFFERING
//           </h1>
//           <div class="col-md-6 col-12 col-lg-4 my-5 ">
//             <div class="feature-box dark-graybg p-4 radius5">
//               <figure>
//                 {" "}
//                 <div class="img-block bgdarkblue">
//                   <img
//                     class="polarian-card-image-2"
//                     src="https://png.pngtree.com/png-vector/20190622/ourmid/pngtree-checklistcheckexpertiselistclipboard-flat-color-icon-vec-png-image_1490531.jpg"
//                     alt="installation"
//                     width="100"
//                     height="100"
//                   />
//                 </div>
//                 <figcaption>
//                   <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading">
//                     Expertise and Guidance
//                   </div>
//                 </figcaption>
//               </figure>
//             </div>
//           </div>
//           <div class="col-md-6 col-12 col-lg-4 my-5 ">
//             <div class="feature-box dark-graybg p-4 radius5">
//               <figure>
//                 {" "}
//                 <div class="img-block bgdarkblue">
//                   <img
//                     class="polarian-card-image-2"
//                     src="https://www.pngall.com/wp-content/uploads/4/Solution-PNG-Images.png"
//                     alt="installation"
//                     width="90"
//                     height="90"
//                   />
//                 </div>
//                 <figcaption>
//                   <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading">
//                     Seamless Implementation
//                   </div>
//                 </figcaption>
//               </figure>
//             </div>
//           </div>
//           <div class="col-md-6 col-12 col-lg-4 my-5">
//             <div class="feature-box dark-graybg p-4 radius5">
//               <figure>
//                 {" "}
//                 <div class="img-block bgdarkblue">
//                   <img
//                     class="polarian-card-image-2"
//                     src="https://img.freepik.com/premium-vector/isometric-flat-3d-illustration-concept-businessman-business-development-training_18660-4828.jpg"
//                     alt="installation"
//                     width="100"
//                     height="100"
//                   />
//                 </div>
//                 <figcaption>
//                   <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading">
//                     Training and Support
//                   </div>
//                 </figcaption>
//               </figure>
//             </div>
//           </div>
//           <div class="col-md-6 col-12 col-lg-4 my-5">
//             <div class="feature-box dark-graybg p-4 radius5">
//               <figure>
//                 {" "}
//                 <div class="img-block bgdarkblue">
//                   <img
//                     class="polarian-card-image-2"
//                     src="https://w7.pngwing.com/pngs/432/490/png-transparent-value-added-trade-service-flags-text-service-logo.png"
//                     alt="installation"
//                     width="90"
//                     height="90"
//                   />
//                 </div>
//                 <figcaption>
//                   <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading">
//                     Value-Added Services
//                   </div>
//                 </figcaption>
//               </figure>
//             </div>
//           </div>
//           <div class="col-md-6 col-12 col-lg-4 my-5">
//             <div class="feature-box dark-graybg p-4 radius5">
//               <figure>
//                 {" "}
//                 <div class="img-block bgdarkblue">
//                   <img
//                     class="polarian-card-image-2"
//                     src="https://png.pngtree.com/png-clipart/20220812/ourmid/pngtree-handshake-partnership-deal-png-image_6105842.png"
//                     alt="installation"
//                     width="100"
//                     height="100"
//                   />
//                 </div>
//                 <figcaption>
//                   <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading">
//                     Long-Term Partnership
//                   </div>
//                 </figcaption>
//               </figure>
//             </div>
//           </div>
//           <div class="col-md-6 col-12 col-lg-4 my-5">
//             <div class="feature-box dark-graybg p-4 radius5">
//               <figure>
//                 {" "}
//                 <div class="img-block bgdarkblue">
//                   <img
//                     class="polarian-card-image-2"
//                     src="https://cdn-icons-png.flaticon.com/512/2620/2620254.png"
//                     alt="installation"
//                     width="90"
//                     height="90"
//                   />
//                 </div>
//                 <figcaption>
//                   <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading">
//                     Data-Driven Insights
//                   </div>
//                 </figcaption>
//               </figure>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default SalesForce;


import React, { Component } from "react";
import salesforceanimation from "./salesforceanimation.json";
import Lottie from "lottie-react";
import Header from "../navbar";
import Footer from "../Footer";
import "./index.css";

class SalesForce extends Component {
  componentDidMount() {
    // Attach the scroll event listener to the window
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var revals = document.querySelectorAll(".salesforce-reval");
    for (var i = 0; i < revals.length; i++) {
      var windowheight = window.innerHeight;
      var revaltop = revals[i].getBoundingClientRect().top;
      var revalpoint = 150;
      if (revaltop < windowheight - revalpoint) {
        revals[i].classList.add("active");
      } else {
        revals[i].classList.remove("active");
      }
    }
  };
  render() {
    return (
      <><Header />
      <div>
        <div className="container-fluid">
          <div className="row p-5 salesforce-bg-image">
            <div className="col-12 salesforce-content-container">
              <h1 className="salesforce-banner-heading">
                Sales<span style={{ color: "#ffffff" }}>Force</span>
              </h1>
              <h3 className="salesforce-banner-heading-2">
                Experience the Power of Salesforce with Labyrinth Global
                Solutions
              </h3>
            </div>
          </div>
          <div className="row  salesforce-reval p-5 ">
            <div className="col-md-6 col-12">
              <h1 className="salesforce-heading">SalesForce</h1>
              <p className="salesforce-paragraph">
                Welcome to Labyrinth Global Solutions, your premier provider of
                Salesforce Industries solutions. We specialize in leveraging the
                power of Salesforce Industries to help businesses transform
                their operations, drive growth, and deliver exceptional customer
                experiences.
              </p>
              <p className="salesforce-paragraph">
                We provide businesses with access to the industry-leading
                customer relationship management (CRM) platform, empowering
                organizations to enhance their sales, marketing, and customer
                support processes.
              </p>
              <p className="salesforce-paragraph">
                Unlock the full potential of your business with Salesforce,
                implemented and supported by Labyrinth Global Solutions. Contact
                us today to schedule a consultation and discover how Salesforce
                can revolutionize your sales, marketing, and customer support
                processes.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <Lottie
                loop={true}
                animationData={salesforceanimation}
                className="animation-image"
              />
            </div>
          </div>

          <div className="row p-5">
            <h1 className="salesforce-heading text-center">
              LABYRINTH OFFERING
            </h1>
            <div class="col-md-6 col-12 col-lg-4 my-5 salesforce-reval">
              <div class="sales-box sales-dark-graybg p-4 sales-radius5">
                <figure>
                  {" "}
                  <div class="sales-img-block sales-bgdarkblue">
                    <img
                      class="polarian-card-image-2"
                      src="https://png.pngtree.com/png-vector/20190622/ourmid/pngtree-checklistcheckexpertiselistclipboard-flat-color-icon-vec-png-image_1490531.jpg"
                      alt="installation"
                      width="100"
                      height="100"
                    />
                  </div>
                  <figcaption>
                    <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading text-center">
                      Expertise and Guidance
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-md-6 col-12 col-lg-4 my-5 salesforce-reval">
              <div class="sales-box sales-dark-graybg p-4 sales-radius5">
                <figure>
                  {" "}
                  <div class="sales-img-block sales-bgdarkblue">
                    <img
                      class="polarian-card-image-2"
                      src="https://www.pngall.com/wp-content/uploads/4/Solution-PNG-Images.png"
                      alt="installation"
                      width="100"
                      height="100"
                    />
                  </div>
                  <figcaption>
                    <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading text-center">
                      Seamless Implementation
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-md-6 col-12 col-lg-4 my-5 salesforce-reval">
              <div class="sales-box sales-dark-graybg p-4 sales-radius5">
                <figure>
                  {" "}
                  <div class="sales-img-block sales-bgdarkblue">
                    <img
                      class="polarian-card-image-2"
                      src="https://img.freepik.com/premium-vector/isometric-flat-3d-illustration-concept-businessman-business-development-training_18660-4828.jpg"
                      alt="installation"
                      width="100"
                      height="100"
                    />
                  </div>
                  <figcaption>
                    <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading text-center">
                      Training and Support
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-md-6 col-12 col-lg-4 my-5 salesforce-reval">
              <div class="sales-box sales-dark-graybg p-4 sales-radius5">
                <figure>
                  {" "}
                  <div class="sales-img-block sales-bgdarkblue">
                    <img
                      class="polarian-card-image-2"
                      src="https://w7.pngwing.com/pngs/432/490/png-transparent-value-added-trade-service-flags-text-service-logo.png"
                      alt="installation"
                      width="100"
                      height="100"
                    />
                  </div>
                  <figcaption>
                    <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading text-center">
                      Value-Added Services
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-md-6 col-12 col-lg-4 my-5 salesforce-reval">
              <div class="sales-box sales-dark-graybg p-4 sales-radius5">
                <figure>
                  {" "}
                  <div class="sales-img-block sales-bgdarkblue">
                    <img
                      class="polarian-card-image-2"
                      src="https://png.pngtree.com/png-clipart/20220812/ourmid/pngtree-handshake-partnership-deal-png-image_6105842.png"
                      alt="installation"
                      width="100"
                      height="100"
                    />
                  </div>
                  <figcaption>
                    <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading text-center">
                      Long-Term Partnership
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-md-6 col-12 col-lg-4 my-5 salesforce-reval">
              <div class="sales-box sales-dark-graybg p-4 sales-radius5">
                <figure>
                  {" "}
                  <div class="sales-img-block sales-bgdarkblue">
                    <img
                      class="polarian-card-image-2"
                      src="https://cdn-icons-png.flaticon.com/512/2620/2620254.png"
                      alt="installation"
                      width="100"
                      height="100"
                    />
                  </div>
                  <figcaption>
                    <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading text-center">
                      Data-Driven Insights
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
  }
}

export default SalesForce;