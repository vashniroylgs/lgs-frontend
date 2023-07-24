import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";




import {

  Image,

  Li,

  ArrowIcon,

  Tick,

  Heading,

  CardHead,

  ArrowIcon2,

} from "./styledComponents";

import "./index.css";




function WebMobile() {

  return (

    <div className="container-fluid p-5" style={{ background: "#ffffff" }}>

      <div className="row p-3" style={{ background: "" }}>

        <Heading className="text-center">Web & Mobile App Development</Heading>




        <div className="col-12 col-md-7 order-2 order-md-1 p-3 mt-5">

          <h4>

            Labyrinth Global Solutions is one of the best Website Development

            Companies in India. We have a team of professional experts having

            years of experience in this field. Our specialised team can provide

            custom web solutions to establish your business online.

          </h4>

          <div className="d-flex">

            <ul>

              <Li>

                <Tick />

                Custom Web Development Services

              </Li>

              <Li>

                {" "}

                <Tick />

                Mobile Optimized Web Development

              </Li>

              <Li>

                {" "}

                <Tick /> Intranet Applications

              </Li>

            </ul>

            <ul>

              <Li>

                {" "}

                <Tick />

                B2B Portal

              </Li>

              <Li>

                {" "}

                <Tick />

                User-Friendly Interface

              </Li>

              <Li>

                <Tick />

                Responsive Website

              </Li>

            </ul>

          </div>

        </div>

        <div className="col-12 col-md-5 order-1 order-md-2">

          <Image

            src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"

            alt="web-app"

          />{" "}

        </div>

      </div>

      <div className="row p-3">

        <Heading className="text-center">Webdevelopment Feauters</Heading>

        <div className="col-12 col-md-6 col-lg-4">

          <div class="card-container">

            <div class="card">

              <div class="img-box">

                <img

                  src="https://www.12grids.com/uploads/blogs/original_cover_images/7-reasons-why-responsive-web-design-is-important-why-you-should-embrace-it-1.png"

                  alt="responsive"

                />

              </div>

              <div class="content">

                <CardHead>RESPONSIVE WEBSITES</CardHead>

                <p>

                  We strive to ensure that your website looks great across

                  different devices and offers best user experience.

                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="col-12 col-md-6 col-lg-4">

          <div class="card-container">

            <div class="card">

              <div class="img-box">

                <img

                  src="https://www.brandignity.com/wp-content/uploads/2016/07/seo-friendly-website-design.jpg"

                  alt="seo-friendly"

                />

              </div>

              <div class="content">

                <CardHead>SEO FRIENDLY</CardHead>

                <p>

                  We can optimize your website to make it SEO friendly and help

                  it reach the top in Google search results.

                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="col-12 col-md-6 col-lg-4">

          <div class="card-container">

            <div class="card">

              <div class="img-box">

                <img

                  className="chat-image"

                  src="https://img.freepik.com/free-vector/chatbot-concept-background-with-mobile-device_23-2147831507.jpg"

                  alt="chat-social"

                />

              </div>

              <div class="content">

                <CardHead>CHAT & SOCIAL INTEGRATION</CardHead>

                <p>

                  We promote effective communication between you and your

                  audience by using easy-to-use components

                </p>

              </div>

            </div>

          </div>

        </div>




        <div className="col-12 col-md-6 col-lg-4">

          <div class="card-container">

            <div class="card">

              <div class="img-box">

                <img

                  src="https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?size=626&ext=jpg&ga=GA1.1.1105777500.1683981584&semt=sph"

                  alt="blog"

                />

              </div>

              <div class="content">

                <CardHead>BLOG INTEGRATION</CardHead>

                <p>

                  We integrate all your blog post to keep your customers

                  informed about the latest development

                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="col-12 col-md-6 col-lg-4">

          <div class="card-container">

            <div class="card">

              <div class="img-box">

                <img

                  src="https://static.vecteezy.com/system/resources/previews/005/746/564/original/user-experience-design-gradient-icon-for-dark-theme-product-integration-process-support-user-behavior-thin-line-color-symbol-modern-style-pictogram-isolated-outline-drawing-vector.jpg"

                  alt="theme"

                />

              </div>

              <div class="content">

                <CardHead>CUSTOMIZE / THEME INTEGRATION</CardHead>

                <p>

                  We make sure to adjust the style and aesthetic value that suit

                  your brand in the best possible manner

                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="col-12 col-md-6 col-lg-4">

          <div class="card-container">

            <div class="card">

              <div class="img-box">

                <img

                  className="chat-image"

                  src="https://cdn-icons-png.flaticon.com/512/1484/1484799.png"

                  alt="chat-social"

                />

              </div>

              <div class="content">

                <CardHead>INQUIRY FORM INTEGRATION</CardHead>

                <p>

                  We allow your visitors to make a general inquiry about your

                  products or services without efforts

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="row p-3">

        <Heading className="text-center">Services</Heading>

        <div className="col-12 col-md-7 order-2 order-md-1 mt-3 ">

          <Heading>Web Design & Web Assets</Heading>

          <ul>

            <Li>

              <ArrowIcon />

              E-commerce applications

            </Li>

            <Li>

              <ArrowIcon />

              Custom Mobile applications on HTML5.

            </Li>

            <Li>

              <ArrowIcon />

              Distributed applications

            </Li>

            <Li>

              <ArrowIcon />

              Windows and Unix applications.

            </Li>

            <Li>

              <ArrowIcon />

              Client/server applications.

            </Li>

            <Li>

              <ArrowIcon />

              Desktop applications.

            </Li>

            <Li>

              <ArrowIcon />

              ERP solutions.

            </Li>

          </ul>

        </div>

        <div className="col-12 col-md-5 order-1 order-md-2">

          <img

            className="first-image"

            src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?size=626&ext=jpg&ga=GA1.2.1105777500.1683981584&semt=ais"

            alt="first"

          />

        </div>

      </div>

      <div className="row p-3">

        <div className="col-sm-12 col-md-5 order-2 order-md-1 ">

          <img

            className="first-image"

            alt="second"

            src="https://img.freepik.com/premium-vector/young-man-works-mobile-application-data-collection-analysis-flat-character-concept-web-design_130740-686.jpg?size=626&ext=jpg&ga=GA1.1.1105777500.1683981584&semt=ais"

          />

        </div>

        <div className="col-12 col-md-7 order-1 order-md-2">

          <Heading>Application Re-Engineering</Heading>

          <ul>

            <Li>

              <ArrowIcon2 />

              Perform source application portfolio analysis / reverse

              engineering to create use cases for target application.

            </Li>

            <Li>

              <ArrowIcon2 />

              Forward engineer or build in target technologies using the latest

              application development products and tools.

            </Li>

            <Li>

              <ArrowIcon2 />

              Understand the challenges in legacy applications and Re-use

              components and tools (if any) for the new applications.

            </Li>

          </ul>

        </div>

      </div>

      <div className="row p-3">

        <div className="col-12 col-md-5 order-2 order-md-2 ">

          <img

            className="first-image"

            alt="third"

            src="https://img.freepik.com/free-vector/software-development-app-optimization-programming-mobile-content-concept_335657-368.jpg?size=626&ext=jpg&ga=GA1.2.1105777500.1683981584&semt=ais"

          />

        </div>

        <div className="col-12 col-md-7 order-1 order-md-1">

          <Heading>Mobile Application Development</Heading>

          <ul>

            <Li>

              <ArrowIcon />

              Mobile apps for iOS and Android phones.

            </Li>

            <Li>

              <ArrowIcon />

              Custom Mobile applications on HTML5.

            </Li>

            <Li>

              <ArrowIcon />

              HTML5 responsive websites.

            </Li>

            <Li>

              <ArrowIcon />

              Web-based mobile applications.

            </Li>

            <Li>

              <ArrowIcon2 />

              Responsive design, native applications (Games,

              entertainment,business, Payment transferring applications, etc).

            </Li>

          </ul>

        </div>

      </div>

    </div>

  );

}




export default WebMobile;