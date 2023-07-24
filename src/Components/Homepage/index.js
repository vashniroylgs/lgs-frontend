import React, { Component } from "react";
import { Heading, Li, Tick } from "../MicrosoftDynamic/styledComponents";
import { ArrowIcon2 } from "../MobileandAppDevelopment/styledComponents";
import ReactSlick from "../Slider";
import WhyUs from '../Whyus'
import ReviewsCarousel from "../Customerscrolling";

const Details = [

  {
    id: 1,
    question:
      "Siemens's Polarion for Health Tech customers has helped achieve compliance",
    answer:
      "Accelerate medical device innovation and automate proof of compliance.Achieve Proof of Compliance in lesser time.Automate Risk Management and Compliance with help of Siemens Polarion.Quick-Start with Automated Industry Processes.Synchronize Collaboration In Real Time with Siemens Polarion Requirement Management Automate Your Validation and Verification",
  },

  {

    id: 2,

    question: "Polarion for Automotive & Transportation Industries",

    answer:

      "Polarion offers 90% reduced time in bringing the product to market for many OEMs and suppliers in the automotive and transportation industries. Seamless real-time collaboration Built-in support for ReqIF data exchange, and/or through common document formats such as Word/Excel® or PDF® Contextual visibility improves team effectiveness.Comprehensive traceabilityand automated tracking speeds and protects functional safety compliance. Model Driven development with Polarion’s Diagram Editor, plus integration with Sparx Systems Enterprise Architect™ and with MATLAB® Simulink™ Intuitive workflow drives rapid adoption. Enabling automotive industry project templates facilitate functional safety compliance, process assessment, Agile development practices, and other objectives. Comprehensive traceability and automated tracking speeds and protects functional safety compliance. Model Driven development with Polarion’s Diagram Editor, plus integration with Sparx Systems Enterprise Architect™ and with MATLAB® Simulink™ Intuitive workflow drives rapid adoption.",

  },

  {

    id: 3,

    question: "Polarion for Aerospace",

    answer:

      "With Polarion it is possible to reduce time-to-market and improve quality and safety. Polarion provides guaranteed traceability and proof of compliance for systems and software engineering organizations in regulated industries. A unified solution for Requirements-, Quality- and Application Lifecycle Management. recent integrations with MATLAB® Simulink®, Klocwork’s and others show a real deep understanding for the target markets integrating Product Lifecycle Management (PLM) and Application Lifecycle Management (ALM) processes allows us to bridge the gap between mechanical, hardware, electronic and software development, delivering unprecedented efficiencies.",

  },

  {

    id: 4,

    question: "Polarion for Oil & Gas",

    answer:

      "With Polarion it is possible to reduce time-to-market and improve quality and safety. Polarion provides guaranteed traceability and proof of compliance for systems and software engineering organizations in regulated industries. A unified solution for Requirements-, Quality- and Application Lifecycle Management. Seamless real-time collaboration Built-in support for ReqIF data exchange, and/or through common document formats such as Word/Excel® or PDF® Contextual visibility improves team effectiveness.Comprehensive traceability and automated tracking speeds. Powerful reporting engine & Word round trip, ability to export/import requiremets into Polarion achieved awesome milestones to Oil & Gas customer.",

  },

  {

    id: 5,

    question: "Polarion for Enterprise Agile",

    answer:

      "You must comply with regulations like ISO 26262, FDA 21 CFR Part 820 or IEC 62304. You must meet standards like CMMI, SPICE, etc. to achieve transparency in globally distributed environments. You’re required to demonstrate diligence in Corporate Governance for shareholders, regulators, etc. Requirements Management, Engineering and Test Management are key for time-to-market and success. You need to mitigate the risks of product and project failure.",

  },

];


class HomePage extends Component {

  render() {
    return (

      <div className="container-fluid">

        <div className="row">

          <div className="col-12 ">
              <ReactSlick />

          </div>

        </div>

        <div className="row p-5">

          <div className="col-12 col-md-7">

            <Heading>About ALM</Heading>

            <h5 className="mb-4">

              Labyrinth Global Solutions is one of the best Website Development

              Companies in India. We have a team of professional experts having

              years of experience in this field. Our specialised team can

              provide custom web solutions to establish your business online.

            </h5>

            <h4>Industry Focus</h4>

            <div className="d-flex">

              <ul>

                <Li>
                  <Tick />
                  Health Tech
                </Li>

                <Li>

                  {" "}

                  <Tick />

                  Automotive & Transportation

                </Li>

                <Li>

                  {" "}

                  <Tick /> Aerospace

                </Li>

              </ul>

              <ul>

                <Li>

                  {" "}

                  <Tick />

                  Oil & Gas

                </Li>

                <Li>

                  {" "}

                  <Tick />

                  Enterprise Agile (SAFe)

                </Li>

              </ul>

            </div>

            <button className="btn btn-primary">

              Learn More <ArrowIcon2 />

            </button>

          </div>

          <div className="col-12 col-md-5">

            <img

              src="https://www.labyrinthglobalsolutions.com/assets/img/aboutus1.png"

            //   alt="home-page"

              width={500}

              height={500}

            />

          </div>

        </div>

        <div className="row p-5">

          <Heading className="text-center">Why Us</Heading>

          <div className="col-12 col-md-5 mt-3">

            <img

              height={500}

              width={500}

              src="https://www.pngmart.com/files/About-Us-PNG-Photos.png"

              alt="why-us"

            />

          </div>

          <div className="col-12 col-md-7 mt-3">

            <ul>

              {Details.map((eachItem) => (

                <WhyUs key={eachItem.id} details={eachItem} />

              ))}

            </ul>

          </div>
          <ReviewsCarousel />

        </div>

      </div>

    );

  }

}




export default HomePage;