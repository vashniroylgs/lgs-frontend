import React from "react";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// List of Technologies in one list
const TechnologiesList = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555717/14-html-5_fuaohf.svg",
    class: "technologyIndustriesImage",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555717/11-react-native-1_avarfs.svg",
    class: "technologyIndustriesImage",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555717/13-css-3_aaz2wv.svg",
    class: "technologyIndustriesImage",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555716/07-node-js_dhu9en.svg",
    class: "polarian-image-2",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555715/03-react-1_mrzfmb.svg",
    class: "technologyIndustriesImage",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555715/04-angular-js_s2wvp8.svg",
    class: "technologyIndustriesImage",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555715/01-java-horizontal_dvpaym.svg",
    class: "technologyIndustriesImage",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555715/02-javascript-1_ufwrf9.svg",
    class: "technologyIndustriesImage",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555715/05-vuejs_muzxgg.svg",
    class: "technologyIndustriesImage",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dkajxnnlq/image/upload/v1690548097/logos-09_kpehpk.png",
    class: "technologyIndustriesImage",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1690556120/download_emcxnb.png",
    class: "angular-image",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1690556120/Polarion_small_cfwksb.png",
    class: "polarian-image",
  },
];

const TechnologiesPage = () => {
  return (
    <div className="container technology-main-container">
      <h3 className=" IndustriesHeading text-center text-uppercase mt-4">
        Technologies
      </h3>
      <div className="h-line"></div>
      <div className="row">
        {/* here used list for mapping the elements  */}
        {TechnologiesList.map((eachImage) => (
          <div className="col-12 col-md-4 col-lg-3 text-center">
            <div className="imageContainer  text-center">
              <ImageElement
                alt={`Technologies ${eachImage.id}`}
                className={eachImage.class}
                src={eachImage.src}
              />
            </div>
          </div>
        ))}
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
