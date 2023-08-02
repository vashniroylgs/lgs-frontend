import React from "react";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const TechnologiesPage = () => {
  return (
    <div className="container technology-main-container">
      <h3 className=" IndustriesHeading text-center text-uppercase mt-4">
        Technologies
      </h3>
      <div className="h-line"></div>
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3 text-center">
          <div className="imageContainer  text-center">
            <ImageElement
              alt=""
              className="technologyIndustriesImage"
              src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555717/14-html-5_fuaohf.svg"
            />
          </div>
        </div>

        <div className="col-12 col-lg-3 col-md-4 text-center">
          <div className="imageContainer  text-center">
            <ImageElement
              alt=""
              className="technologyIndustriesImage"
              src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555717/11-react-native-1_avarfs.svg"
            />
          </div>
        </div>

        <div className="col-12 col-lg-3 col-md-4 text-center">
          <div className="imageContainer  text-center">
            <ImageElement
              alt=""
              className="technologyIndustriesImage"
              src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555717/13-css-3_aaz2wv.svg"
            />
          </div>
        </div>

        <div className="col-12 col-lg-3 col-md-4 text-center">
          <div className="imageContainer  text-center">
            <ImageElement
              alt=""
              className="polarian-image-2"
              src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555716/07-node-js_dhu9en.svg"
            />
          </div>
        </div>

        <div className="col-12 col-lg-3 col-md-4 text-center">
          <div className="imageContainer  text-center">
            <ImageElement
              alt=""
              className="technologyIndustriesImage"
              src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555715/03-react-1_mrzfmb.svg"
            />
          </div>
        </div>

        <div className="col-12 col-lg-3 col-md-4 text-center">
          <div className="imageContainer">
            <ImageElement
              alt=""
              className="technologyIndustriesImage"
              src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555715/04-angular-js_s2wvp8.svg"
            />
          </div>
        </div>

        <div className="col-12 col-lg-3 col-md-4 text-center">
          <div className="imageContainer">
            <ImageElement
              alt="nothing"
              className="technologyIndustriesImage"
              src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555715/01-java-horizontal_dvpaym.svg"
            />
          </div>
        </div>

        <div className="col-12 col-lg-3 col-md-4  text-center">
          <div className="imageContainer">
            <ImageElement
              alt=""
              className="technologyIndustriesImage"
              src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555715/02-javascript-1_ufwrf9.svg"
            />
          </div>
        </div>

        <div className="col-12 col-lg-3  col-md-4 text-center">
          <div className="imageContainer">
            <ImageElement
              alt=""
              className="technologyIndustriesImage"
              src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555715/05-vuejs_muzxgg.svg"
            />
          </div>
        </div>

        <div className="col-12 col-lg-3  col-md-4 text-center">
          <div className="imageContainer">
            <ImageElement
              alt=""
              className="technologyIndustriesImage"
              src="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690548097/logos-09_kpehpk.png"
            />
          </div>
        </div>

        <div className="col-12 col-lg-3 col-md-4  text-center">
          <div className="imageContainer">
            <ImageElement
              alt=""
              className="angular-image"
              src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690556120/download_emcxnb.png"
            />
          </div>
        </div>

        <div className="col-12 col-lg-3 col-md-4  text-center">
          <div className="imageContainer">
            <ImageElement
              alt=""
              className="polarian-image"
              src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690556120/Polarion_small_cfwksb.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageElement = ({ src, className, alt }) => {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div className={`image-evolution ${visible ? "evolved" : ""}`} ref={ref}>
      <img src={src} className={className} alt={alt} />
    </div>
  );
};

export default TechnologiesPage;
