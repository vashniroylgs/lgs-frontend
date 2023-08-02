// import React, { Component } from "react";
// import "./index.css"; // Import your custom CSS file
// import SaasPageCarouselSlider from "../SaaspageCarouselSlider/index";
// import Slider from "react-slick"; // Import the Slider component from the package you are using
// import "slick-carousel/slick/slick.css"; // Import the CSS file for the slider
// import "slick-carousel/slick/slick-theme.css";

// const TransformingCarrerList = [
//   {
//     id: 1,
//     imgurl:
//       "https://res.cloudinary.com/dcczhcvjg/image/upload/v1689660531/mendix-540x540-1_bmgczf.png",
//     description:
//       "Mendix provides a cloud-based hosting service that allows users to deploy their applications directly from the Mendix Modeler. This is the easiest and most popular option for deploying Mendix applications.",
//   },
//   {
//     id: 2,
//     imgurl:
//       "https://res.cloudinary.com/dcczhcvjg/image/upload/v1689666315/free-ibm-282120_pgpro3.webp",
//     description:
//       "Deploying Mendix applications on IBM Cloud combines the strengths of both platforms, providing you with scalability, security, integration capabilities, AI services, global presence, and enterprise-grade support to ensure the success of your applications.",
//   },
//   {
//     id: 3,
//     imgurl:
//       "https://res.cloudinary.com/dcczhcvjg/image/upload/v1689669974/sap_s3diuq.png",
//     description:
//       "Deploying Mendix applications on IBM Cloud combines the strengths of both platforms, providing you with scalability, security, integration capabilities, AI services, global presence, and enterprise-grade support to ensure the success of your applications.",
//   },
//   {
//     id: 4,
//     imgurl:
//       "https://res.cloudinary.com/dcczhcvjg/image/upload/v1689670491/Microsoft_Azure-Logo.wine_vqfhky.png",
//     description:
//       "By deploying Mendix on Azure, you can leverage the benefits of a powerful cloud platform, seamlessly integrate with Azure services, and take advantage of Azure's scalability, reliability, and security features.",
//   },
//   {
//     id: 5,
//     imgurl:
//       "https://res.cloudinary.com/dcczhcvjg/image/upload/v1689670839/pivotal-web-services_vsiom5.png",
//     description:
//       "Deploying Mendix on PWS can provide a reliable, scalable, and cost-effective hosting solution for your applications.",
//   },
//   {
//     id: 6,
//     imgurl:
//       "https://res.cloudinary.com/dcczhcvjg/image/upload/v1689743081/aws-logo-teaser_b0izx8.png",
//     description:
//       "Deploying Mendix on AWS offers the benefits of scalability, flexibility, reliability, security, cost optimization, and seamless integration with other AWS services, enabling you to build and run your Mendix application in a robust and efficient manner.",
//   },
//   {
//     id: 7,
//     imgurl:
//       "https://res.cloudinary.com/dcczhcvjg/image/upload/v1689743352/openshift_logo_icon_169886_b92dya.png",
//     description:
//       "Overall, deploying Mendix in OpenShift brings the benefits of scalability, high availability, containerization, DevOps integration, resource optimization, monitoring, and ecosystem support, making it a compelling choice for hosting Mendix applications.",
//   },
// ];

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 2000,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   speed: 500,
//   slidesToShow: 3, // Show 3 slides in large devices
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1100,
//       settings: {
//         slidesToShow: 2, // Show 1 slide in small devices (e.g., tablets and mobiles)
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1, // Show 1 slide in small devices (e.g., tablets and mobiles)
//       },
//     },
//   ],
// };

// class SaasPage extends Component {
//   componentDidMount() {
//     // Attach the scroll event listener to the window
//     window.addEventListener("scroll", this.handleScroll);
//   }

//   componentWillUnmount() {
//     // Remove the scroll event listener when the component is unmounted
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   handleScroll = () => {
//     var revals = document.querySelectorAll(".saas-reval");
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
//         <div className="row p-5 ">
//           <div className="sales-force-container col-12">
//             <h1 className="sales-heading">
//               Welcome to LABYRINTH Global Solutions - Your Ultimate SaaS
//               Solution!
//             </h1>
//           </div>
//         </div>
//         <div className="row p-5 saas-reval ">
//           <div className="col-lg-6 saas-content">
//             <div>
//               <h2>
//                 Streamline Your Business Operations with Labyrinth Global
//                 Solutions
//               </h2>
//               <p>
//                 Are you looking to revolutionize your business operations,
//                 enhance productivity, and outperform the competition? Look no
//                 further! Labyrinth Global Solutions offers a cutting-edge
//                 Software as a Service (SaaS) platform, empowering businesses of
//                 all sizes to thrive in the digital age.
//               </p>
//               <p>
//                 Our comprehensive suite of SaaS tools provides seamless
//                 integration, unparalleled scalability, and top-notch security,
//                 giving you the edge you need to succeed.
//               </p>
//               <h2>Experience the Future of SaaS</h2>
//               <p>
//                 Unlock the full potential of your business with Labyrinth Global
//                 Solutions. Sign up today for a free trial and discover how our
//                 SaaS platform can take your business to new heights.
//               </p>
//               <button className="cta-btn">Contact us</button>
//             </div>
//           </div>
//           <div className="col-lg-6 saas-image-container">
//             <img
//               className="saas-image animate_animated animate_fadeInRight"
//               alt="saas"
//               src="https://res.cloudinary.com/dots1s0gu/image/upload/v1690444486/saas_image_p5pern.jpg"
//             />
//           </div>
//         </div>
//         <div className="row pt-5 mt-5 saas-reval">
//           {/* <div className="slider-main-container-saas col-12">
//             <Slider {...settings}>
//               {TransformingCarrerList.map((each) => (
//                 <SaasPageCarouselSlider key={each.id} cardDetails={each} />
//               ))}
//             </Slider>
//           </div> */}
//         </div>
//       </div>
//     );
//   }
// }

// export default SaasPage;

// SaasPage.js

import React, { Component } from "react";
import "./index.css"; // Import your custom CSS file
import SaasPageCarouselSlider from "../SaaspageCarouselSlider/index";

import Slider from "react-slick"; // Import the Slider component from the package you are using
import "slick-carousel/slick/slick.css"; // Import the CSS file for the slider
import "slick-carousel/slick/slick-theme.css";

const TransformingCarrerList = [
  {
    id: 1,
    imgurl:
      "https://res.cloudinary.com/dcczhcvjg/image/upload/v1689660531/mendix-540x540-1_bmgczf.png",
    description:
      "Mendix provides a cloud-based hosting service that allows users to deploy their applications directly from the Mendix Modeler. This is the easiest and most popular option for deploying Mendix applications.",
  },
  {
    id: 2,
    imgurl:
      "https://res.cloudinary.com/dcczhcvjg/image/upload/v1689666315/free-ibm-282120_pgpro3.webp",
    description:
      "Deploying Mendix applications on IBM Cloud combines the strengths of both platforms, providing you with scalability, security, integration capabilities, AI services, global presence, and enterprise-grade support to ensure the success of your applications.",
  },
  {
    id: 3,
    imgurl:
      "https://res.cloudinary.com/dcczhcvjg/image/upload/v1689669974/sap_s3diuq.png",
    description:
      "Deploying Mendix applications on IBM Cloud combines the strengths of both platforms, providing you with scalability, security, integration capabilities, AI services, global presence, and enterprise-grade support to ensure the success of your applications.",
  },
  {
    id: 4,
    imgurl:
      "https://res.cloudinary.com/dcczhcvjg/image/upload/v1689670491/Microsoft_Azure-Logo.wine_vqfhky.png",
    description:
      "By deploying Mendix on Azure, you can leverage the benefits of a powerful cloud platform, seamlessly integrate with Azure services, and take advantage of Azure's scalability, reliability, and security features.",
  },
  {
    id: 5,
    imgurl:
      "https://i0.wp.com/softwareengineeringdaily.com/wp-content/uploads/2019/09/logo_pivotal.png?resize=469%2C250&ssl=1",
    description:
      "Deploying Mendix on PWS can provide a reliable, scalable, and cost-effective hosting solution for your applications.",
  },
  {
    id: 6,
    imgurl:
      "https://res.cloudinary.com/dcczhcvjg/image/upload/v1689743081/aws-logo-teaser_b0izx8.png",
    description:
      "Deploying Mendix on AWS offers the benefits of scalability, flexibility, reliability, security, cost optimization, and seamless integration with other AWS services, enabling you to build and run your Mendix application in a robust and efficient manner.",
  },
  {
    id: 7,
    imgurl:
      "https://res.cloudinary.com/dcczhcvjg/image/upload/v1689743352/openshift_logo_icon_169886_b92dya.png",
    description:
      "Overall, deploying Mendix in OpenShift brings the benefits of scalability, high availability, containerization, DevOps integration, resource optimization, monitoring, and ecosystem support, making it a compelling choice for hosting Mendix applications.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 3, // Show 3 slides in large devices
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2, // Show 1 slide in small devices (e.g., tablets and mobiles)
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1, // Show 1 slide in small devices (e.g., tablets and mobiles)
      },
    },
  ],
};

class SaasPage extends Component {
  componentDidMount() {
    // Attach the scroll event listener to the window
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var revals = document.querySelectorAll(".saas-reval");
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
      <div className="container-fluid salesforce-main-container">
        <div className="row p-5 sales-force-container">
          <div className="col-12">
            <div className="sales-force-text-container">
              <h1 className="sales-heading">
                Welcome to Labyrinth Global Solutions Your Ultimate SaaS
                Solution!
              </h1>
              <h1 className="sales-heading">
                Deploy your Polarion on our ISO 27001 certified cloud.
              </h1>
            </div>
          </div>
        </div>
        <div className="row p-5 saas-reval ">
          <div className="col-12 col-md-6 saas-content">
            <h2>
              Streamline Your Business Operations with Labyrinth Global
              Solutions
            </h2>
            <p>
              Are you looking to revolutionize your business operations, enhance
              productivity, and outperform the competition? Look no further!
              Labyrinth Global Solutions offers a cutting-edge Software as a
              Service (SaaS) platform, empowering businesses of all sizes to
              thrive in the digital age.
            </p>
            <p>
              Our comprehensive suite of SaaS tools provides seamless
              integration, unparalleled scalability, and top-notch security,
              giving you the edge you need to succeed.
            </p>
            <h2>Experience the Future of SaaS</h2>
            <p>
              Unlock the full potential of your business with Labyrinth Global
              Solutions. Sign up today for a free trial and discover how our
              SaaS platform can take your business to new heights.
            </p>
            <div>
              <button className="cta-btn">Contact us</button>
            </div>
          </div>
          <div className="col-12 col-md-6 saas-image-container">
            <img
              className="saas-image animate_animated animate_fadeInRight"
              alt="saas"
              src="https://img.freepik.com/premium-photo/cloud-storage-download-digital-service-app-with-data-transfer-3d-rendering_599740-2.jpg"
            />
          </div>
        </div>
        <div className="row pt-5 mt-5 saas-reval">
          <div className="col-12 saaspage-carousel-container">
            <Slider {...settings}>
              {TransformingCarrerList.map((each) => (
                <SaasPageCarouselSlider key={each.id} cardDetails={each} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default SaasPage;
