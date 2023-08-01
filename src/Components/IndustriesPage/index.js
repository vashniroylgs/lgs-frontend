
import React from 'react';
import { useInView } from 'react-intersection-observer';

import "./index.css"

const IndustriesPage=()=>{
    return(
    <div className="totalToolsPageContainer">
        <div className="col-12">
                <h1 className="toolsHeading text-center text-uppercase">Industries</h1>
                <div className="h-line" ></div>
        </div>
        <div className="ToolsPageContainer">
                <div className="container">
                    <div className="row">
                        <div  className="col-6 col-md-3 col-lg-3 text-center mb-3">
                            <div className="imageContainer  text-center">
                                <ImageElement alt="" className="industriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690527089/Mask_group-6_ndvhi3.png" />
                                <p className=" toolPageParaColor text-uppercase toolPageParaColor">Hospital</p>
                            </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-3 text-center">
                    <div className="imageContainer  text-center">
                        <ImageElement alt="" className="industriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690529315/Mask_group-5_bprtvd.png" />
                        <p className=" toolPageParaColor text-uppercase">Travel</p>
                        </div>
                    </div>

                    
                    <div className="col-12 col-lg-3 col-md-3 text-center">
                    <div className="imageContainer  text-center">
                        <ImageElement alt="" className="industriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690530584/Mask_group-4_bjsibf.png" />
                        <p className=" toolPageParaColor text-uppercase">Logistic & shipping</p>
                        </div>
                    </div>

                    
                    <div className="col-12 col-lg-3 col-md-3 text-center">
                    <div className="imageContainer  text-center">
                        <ImageElement alt="" className="industriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690530818/Mask_group-2_okkdon.png" />
                        <p className=" toolPageParaColor text-uppercase">Banking</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-3 text-center">
                    <div className="imageContainer">
                        <ImageElement alt="" className="industriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690531020/Mask_group_vgkgra.png" />
                        <p className=" toolPageParaColor text-uppercase">Technology</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-3 text-center">
                    <div className="imageContainer">
                        <ImageElement alt="" className="industriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690531175/Mask_group-1_dsblk8.png" />
                        <p className=" toolPageParaColor text-uppercase">Manufacturing</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-3 text-center">
                    <div className="imageContainer">
                        <ImageElement alt="" className="industriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690531387/Layer_x0020_1_fv8ovq.png" />
                        <p className=" toolPageParaColor text-uppercase">Ecommerse</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-3 text-center">
                    <div className="imageContainer">
                        <ImageElement alt="" className="industriesImage educationImage" src ="https://res.cloudinary.com/dots1s0gu/image/upload/v1690541412/Education_copy_jxacqj.png" />
                        <p className=" toolPageParaColor text-uppercase">Education</p>
                        </div>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        
)
    }


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
          <div className={`image-evolution ${visible ? 'evolved' : ''}`} ref={ref}>
            <img src={src} className={className} alt={alt} />
          </div>
        );
      };
      

export default IndustriesPage