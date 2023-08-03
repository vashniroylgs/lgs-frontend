import { Component } from "react";
import "./index.css";
import clients from "../images/clients.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../navbar";
import Footer from "../Footer";
import StartPopup from "../StartPopup";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="clients-hero-container">
            <p>OUR CLIENTS</p>
            <img
              alt="client-hero"
              className="clients-hero-image"
              src={clients}
            />
          </div>
        </div>
        <div className="main-container ">
          <div className="shadow-container">
            <div className="main-container2">
              <h1 className="career-container">Dr. Reddy's</h1>
              <p>
                Dr. Reddy's Laboratories is a renowned global pharmaceutical
                company dedicated to providing innovative healthcare solutions.
                With a strong focus on research and development, Dr. Reddy's is
                committed to delivering high-quality, affordable medicines that
                cater to diverse medical needs worldwide. With a presence in
                over 100 countries, the company's extensive portfolio spans a
                wide range of therapeutic areas, including cardiovascular,
                oncology, and central nervous system disorders. Driven by a
                culture of excellence and patient-centricity, Dr. Reddy's
                continues to pioneer breakthrough treatments, positively
                impacting millions of lives across the globe.
              </p>
              <div>
                <a
                  href="https://www.drreddys.com"
                  target="_black"
                  className="learn-Container"
                >
                  Learn More
                </a>
              </div>
              <div>
                <a href="https://www.drreddys.com" target="_black">
                  <button className="website-button">Dr. Reddy's</button>
                </a>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://res.cloudinary.com/dcczhcvjg/image/upload/v1690962717/reddys_ffyzgw.jpg"
                alt=""
                className="image-container2"
              />
            </div>
          </div>
          <div className="shadow-container">
            <div className="main-container2">
              <h1 className="career-container">Yes Bank</h1>
              <p>
                Yes Bank is a dynamic and customer-centric Indian bank, known
                for its comprehensive range of financial products and services.
                Committed to building lasting relationships, Yes Bank
                prioritizes trust, transparency, and customer satisfaction to
                provide banking solutions that meet the evolving needs of
                individuals and businesses. The bank's robust digital banking
                platform ensures convenient and secure access to financial
                services, making banking accessible to a diverse customer base.
                Through its Yes Foundation, the bank actively engages in
                impactful social initiatives, focusing on education, skill
                development, and sustainable livelihoods.
              </p>
              <div>
                <a
                  href="https://www.yesbank.in"
                  target="_black"
                  className="learn-Container"
                >
                  Learn More
                </a>
              </div>
              <div>
                <a href="https://www.yesbank.in" target="_black">
                  <button className="website-button">Yes Bank</button>
                </a>
              </div>
            </div>

            <div className="image-container">
              <img
                src="https://res.cloudinary.com/dcczhcvjg/image/upload/v1690968353/yesbanklogo_la3wyo.jpg"
                alt=""
                className="image-container2"
              />
            </div>
          </div>
          <div className="shadow-container">
            <div className="main-container2">
              <h1 className="career-container">Utkarsh Bank</h1>
              <p>
                Utkarsh Small Finance Bank is a progressive financial
                institution in India that aims to foster financial inclusion and
                empower marginalized communities. Through a wide range of
                banking services, Utkarsh Bank promotes financial literacy and
                provides opportunities for sustainable economic growth. The
                bank's Microfinance and Small Finance Bank model plays a pivotal
                role in providing access to credit and financial services to
                underserved populations, contributing to poverty alleviation and
                economic empowerment. Utkarsh Bank's customer-centric approach,
                combined with its commitment to social responsibility, has
                earned it recognition as a leading player in the microfinance
                sector.
              </p>
              <div>
                <a
                  href="https://www.utkarsh.bank"
                  target="_black"
                  className="learn-Container"
                >
                  Learn More
                </a>
              </div>
              <div>
                <a href="https://www.utkarsh.bank" target="_black">
                  <button className="website-button">Utkarsh Bank</button>
                </a>
              </div>
            </div>

            <div className="image-container">
              <img
                src="https://res.cloudinary.com/dcczhcvjg/image/upload/v1690970864/utkarsh-small-finance-bank-logo_1_ttp8yf.png"
                alt=""
                className="image-container2"
              />
            </div>
          </div>
          <div className="shadow-container">
            <div className="main-container2">
              <h1 className="career-container">Khaliji Bank</h1>
              <p>
                {" "}
                Khaliji Bank is a prominent financial institution operating in
                the Gulf region. Committed to excellence and innovation, the
                bank plays a vital role in driving economic prosperity and
                facilitating financial transactions in the Middle East,
                supporting the region's growth and development. Khaliji Bank's
                diversified product offerings include corporate and retail
                banking, wealth management, and treasury services, tailored to
                meet the unique financial needs of its diverse clientele.
                Emphasizing digital transformation, the bank provides
                cutting-edge digital banking solutions, enhancing convenience
                and efficiency for customers across the region.
              </p>
              <div>
                <a
                  href="https://khaleeji.bank"
                  target="_black"
                  className="learn-Container"
                >
                  Learn More
                </a>
              </div>
              <div>
                <a href="https://khaleeji.bank" target="_black">
                  <button className="website-button">Khaliji Bank</button>
                </a>
              </div>
            </div>

            <div className="image-container">
              <img
                src="https://res.cloudinary.com/dcczhcvjg/image/upload/v1690970166/Al-Khaliji-Bank_fhbjup.jpg"
                alt=""
                className="image-container2"
              />
            </div>
          </div>
          <div className="shadow-container">
            <div className="main-container2">
              <h1 className="career-container">HPCL</h1>
              <p>
                Hindustan Petroleum Corporation Limited (HPCL) is a leading
                Indian oil and natural gas company, primarily engaged in the
                downstream segment of the oil and gas industry. With a strong
                focus on refining, marketing, and distributing petroleum
                products, HPCL operates a vast network of fuel stations across
                the country. The company plays a crucial role in meeting India's
                energy demands and ensuring the availability of high-quality
                petroleum products to consumers. Committed to environmental
                sustainability and technological advancements, HPCL continues to
                be a key player in driving India's energy progress and
                supporting the nation's economic growth.
              </p>
              <div>
                <a
                  href="https://www.hindustanpetroleum.com"
                  target="_black"
                  className="learn-Container"
                >
                  Learn More
                </a>
              </div>
              <div>
                <a href="https://www.hindustanpetroleum.com" target="_black">
                  <button className="website-button">HPCL</button>
                </a>
              </div>
            </div>

            <div className="image-container">
              <img
                src="https://res.cloudinary.com/dcczhcvjg/image/upload/v1690970768/HINDPETRO.NS-6dfea446_vzf5in.png"
                alt=""
                className="image-container2"
              />
            </div>
          </div>
          <div className="shadow-container">
            <div className="main-container2">
              <h1 className="career-container">MRPL</h1>
              <p>
                Mangalore Refinery and Petrochemicals Limited (MRPL) is a
                subsidiary of Oil and Natural Gas Corporation (ONGC) and is one
                of the prominent players in the Indian refining industry. MRPL
                operates a state-of-the-art refinery located in Mangalore,
                Karnataka, with a focus on refining crude oil and producing a
                wide range of petroleum products. From motor spirit and diesel
                to aviation turbine fuel and specialty products, MRPL ensures
                the efficient processing and supply of petroleum products to
                meet the energy needs of the southern region of India. Committed
                to environmental sustainability and adhering to stringent
                quality standards, MRPL plays a vital role in supporting the
                country's energy security and economic development.
              </p>
              <div>
                <a
                  href="https://www.mrpl.co.in"
                  target="_black"
                  className="learn-Container"
                >
                  Learn More
                </a>
              </div>
              <div>
                <a href="https://www.mrpl.co.in" target="_black">
                  <button className="website-button">MRPL</button>
                </a>
              </div>
            </div>

            <div className="image-container">
              <img
                src="https://res.cloudinary.com/dcczhcvjg/image/upload/v1690971104/MRPL-Logo_h8tcrc.png"
                alt=""
                className="image-container2"
              />
            </div>
          </div>
        </div>
        <Footer />
        <StartPopup />
      </>
    );
  }
}
export default Clients;
