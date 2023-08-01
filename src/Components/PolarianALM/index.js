// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// import "./index.css";

// class Polarian extends Component {
//   componentDidMount() {
//     // Attach the scroll event listener to the window
//     window.addEventListener("scroll", this.handleScroll);
//   }

//   componentWillUnmount() {
//     // Remove the scroll event listener when the component is unmounted
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   handleScroll = () => {
//     var revals = document.querySelectorAll(".polarian-alm-reval");
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
//       <div>
//         <div className="container-fluid polarian-alm-bg-colour">
//           <div className="row plarian-alm-reval p-4">
//             <div className="col-12 col-md-7">
//               <h1 className="polarian-alm-heading p-3">POLARION ALM</h1>
//               <p className="polarian-alm-paragraph">
//                 Labyrinth brings 25+ years of application life cycle management
//                 experience and catering to 100’s of client across the ocean.
//               </p>
//               <p className="polarian-alm-paragraph">
//                 We have been working with cutting edge technologies over the
//                 several years and have deployed successful and proven solutions
//                 to Automotive, Medical Devices, ESP, Pharmaceutical industries.
//               </p>
//               <p className="polarian-alm-paragraph">
//                 We developed custom plugins, custom reports, custom developed
//                 servlets by leveraging Polarion’s power reporting engine ,
//                 Software Development Kit, SOAP, OSLC
//               </p>
//             </div>
//             <div className="col-12 col-md-5 mb-4 polarian-image-container">
//               <img
//                 src="https://miro.medium.com/v2/resize:fit:600/1*xBu5h-5wTAzLvjvAZw6DZA.png"
//                 alt="polarian"
//                 className="polarian-home"
//               />
//             </div>
//           </div>
//           <div className="row p-5">
//             <h1 className="polarian-alm-heading text-center">
//               LABYRINTH OFFERING
//             </h1>
//             <div class="col-md-6 col-12 col-lg-4 my-5 polarian-alm-reval">
//               <div class="feature-box dark-graybg p-4 radius5">
//                 <figure>
//                   {" "}
//                   <div class="img-block bgdarkblue">
//                     <img
//                       class="polarian-card-image-2"
//                       src="https://cdn-icons-png.flaticon.com/512/4768/4768975.png"
//                       alt="installation"
//                       width="90"
//                       height="90"
//                     />
//                   </div>
//                   <figcaption>
//                     <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading">
//                       Installation, upgrades and maintenance of Polarion
//                     </div>
//                   </figcaption>
//                 </figure>
//               </div>
//             </div>
//             <div class="col-md-6 col-12 col-lg-4 my-5 polarian-alm-reval">
//               <div class="feature-box dark-graybg p-4 radius5">
//                 <figure>
//                   {" "}
//                   <div class="img-block bgdarkblue">
//                     <img
//                       class="polarian-card-image"
//                       src="https://png.pngtree.com/png-vector/20230412/ourmid/pngtree-implementation-flat-icon-vector-png-image_6701398.png"
//                       alt="implimentation"
//                       width="110"
//                       height="110"
//                     />
//                   </div>
//                   <figcaption>
//                     <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading">
//                       Implementation (Large & Small)
//                     </div>
//                   </figcaption>
//                 </figure>
//               </div>
//             </div>
//             <div class="col-md-6 col-12 col-lg-4 my-5 polarian-alm-reval">
//               <div class="feature-box dark-graybg p-4 radius5">
//                 <figure>
//                   {" "}
//                   <div class="img-block bgdarkblue">
//                     <img
//                       class="polarian-card-image"
//                       src="https://missdetails.com/wp-content/uploads/2022/04/preparing-for-brand-rollout.jpg"
//                       alt="roll-outs"
//                       width="100"
//                       height="100"
//                     />
//                   </div>
//                   <figcaption>
//                     <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading">
//                       Roll Outs
//                     </div>
//                   </figcaption>
//                 </figure>
//               </div>
//             </div>
//             <div class="col-md-6 col-12 col-lg-4 my-5 polarian-alm-reval">
//               <div class="feature-box dark-graybg p-4 radius5">
//                 <figure>
//                   {" "}
//                   <div class="img-block bgdarkblue">
//                     <img
//                       class="polarian-card-image"
//                       src="https://w7.pngwing.com/pngs/500/498/png-transparent-application-programming-interface-representational-state-transfer-web-api-computer-software-hackathon-api-icon-logo-computer-program-computer-programming-thumbnail.png"
//                       alt="integration"
//                       width="110"
//                       height="110"
//                     />
//                   </div>
//                   <figcaption>
//                     <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading">
//                       Integration
//                     </div>
//                   </figcaption>
//                 </figure>
//               </div>
//             </div>
//             <div class="col-md-6 col-12 col-lg-4 my-5 polarian-alm-reval">
//               <div class="feature-box dark-graybg p-4 radius5">
//                 <figure>
//                   {" "}
//                   <div class="img-block bgdarkblue">
//                     <img
//                       class="polarian-card-image"
//                       src="https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-plugin-icon-connect-and-disconnect-concept-png-image_4703328.png"
//                       alt="plugins"
//                       width="110"
//                       height="110"
//                     />
//                   </div>
//                   <figcaption>
//                     <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading">
//                       Custom Developed Plugins
//                     </div>
//                   </figcaption>
//                 </figure>
//               </div>
//             </div>
//             <div class="col-md-6 col-12 col-lg-4 my-5 polarian-alm-reval">
//               <div class="feature-box dark-graybg p-4 radius5">
//                 <figure>
//                   {" "}
//                   <div class="img-block bgdarkblue">
//                     <img
//                       class="polarian-card-image"
//                       src="https://www.pngall.com/wp-content/uploads/3/Report.png"
//                       alt="reports"
//                       width="100"
//                       height="100"
//                     />
//                   </div>
//                   <figcaption>
//                     <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading">
//                       Custom Developed Reports
//                     </div>
//                   </figcaption>
//                 </figure>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Polarian;


import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

class Polarian extends Component {
  componentDidMount() {
    // Attach the scroll event listener to the window
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var revals = document.querySelectorAll(".polarian-alm-reval");
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
      <div>
        <div className="container-fluid polarian-alm-bg-colour">
          <div className="row polarain-alm-first-page plarian-alm-reval p-4">
            <div className="col-12 col-md-7">
              <h1 className="polarian-alm-heading p-3">POLARION ALM</h1>
              <p className="polarian-alm-paragraph">
                Labyrinth brings 25+ years of application life cycle management
                experience and catering to 100’s of client across the ocean.
              </p>
              <p className="polarian-alm-paragraph">
                We have been working with cutting edge technologies over the
                several years and have deployed successful and proven solutions
                to Automotive, Medical Devices, ESP, Pharmaceutical industries.
              </p>
              <p className="polarian-alm-paragraph">
                We developed custom plugins, custom reports, custom developed
                servlets by leveraging Polarion’s power reporting engine ,
                Software Development Kit, SOAP, OSLC
              </p>
            </div>
            <div className="col-12 col-md-5 mb-4 polarian-image-container">
              <img
                src="https://miro.medium.com/v2/resize:fit:600/1*xBu5h-5wTAzLvjvAZw6DZA.png"
                alt="polarian"
                className="polarian-home"
              />
            </div>
          </div>
          <div className="row p-5">
            <h1 className="polarian-alm-heading text-center">
              LABYRINTH OFFERING
            </h1>
            <div class="col-md-6 col-12 col-lg-4 my-5 polarian-alm-reval ">
              <div class="feature-box dark-graybg p-4 radius5">
                <figure>
                  {" "}
                  <div class="img-block bgdarkblue">
                    <img
                      class="polarian-card-image-2"
                      src="https://cdn-icons-png.flaticon.com/512/4768/4768975.png"
                      alt="installation"
                      width="90"
                      height="90"
                    />
                  </div>
                  <figcaption>
                    <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading">
                      Installation, upgrades and maintenance of Polarion
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-md-6 col-12 col-lg-4 my-5 polarian-alm-reval">
              <div class="feature-box dark-graybg p-4 radius5">
                <figure>
                  {" "}
                  <div class="img-block bgdarkblue">
                    <img
                      class="polarian-card-image"
                      src="https://png.pngtree.com/png-vector/20230412/ourmid/pngtree-implementation-flat-icon-vector-png-image_6701398.png"
                      alt="implimentation"
                      width="110"
                      height="110"
                    />
                  </div>
                  <figcaption>
                    <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading text-center">
                      Implementation (Large & Small)
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-md-6 col-12 col-lg-4 my-5 polarian-alm-reval">
              <div class="feature-box dark-graybg p-4 radius5">
                <figure>
                  {" "}
                  <div class="img-block bgdarkblue">
                    <img
                      class="polarian-card-image"
                      src="https://missdetails.com/wp-content/uploads/2022/04/preparing-for-brand-rollout.jpg"
                      alt="roll-outs"
                      width="100"
                      height="100"
                    />
                  </div>
                  <figcaption>
                    <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading text-center">
                      Roll Outs
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-md-6 col-12 col-lg-4 my-5 polarian-alm-reval">
              <div class="feature-box dark-graybg p-4 radius5">
                <figure>
                  {" "}
                  <div class="img-block bgdarkblue">
                    <img
                      class="polarian-card-image"
                      src="https://w7.pngwing.com/pngs/500/498/png-transparent-application-programming-interface-representational-state-transfer-web-api-computer-software-hackathon-api-icon-logo-computer-program-computer-programming-thumbnail.png"
                      alt="integration"
                      width="110"
                      height="110"
                    />
                  </div>
                  <figcaption>
                    <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading text-center">
                      Integration
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-md-6 col-12 col-lg-4 my-5 polarian-alm-reval">
              <div class="feature-box dark-graybg p-4 radius5">
                <figure>
                  {" "}
                  <div class="img-block bgdarkblue">
                    <img
                      class="polarian-card-image"
                      src="https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-plugin-icon-connect-and-disconnect-concept-png-image_4703328.png"
                      alt="plugins"
                      width="110"
                      height="110"
                    />
                  </div>
                  <figcaption>
                    <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading text-center">
                      Custom Developed Plugins
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-md-6 col-12 col-lg-4 my-5 polarian-alm-reval">
              <div class="feature-box dark-graybg p-4 radius5">
                <figure>
                  {" "}
                  <div class="img-block bgdarkblue">
                    <img
                      class="polarian-card-image"
                      src="https://www.pngall.com/wp-content/uploads/3/Report.png"
                      alt="reports"
                      width="100"
                      height="100"
                    />
                  </div>
                  <figcaption>
                    <div class="fs-18 text-uppercase my-3 polarian-alm-card-heading text-center">
                      Custom Developed Reports
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Polarian;