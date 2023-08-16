import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const OurClientsList = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Zoox_Motors_qhr2hn.png",
    height: 100,
    width: 100,
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Taulia_ffxzhx.png",
    height: 100,
    width: 100,
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Tata_Alexis_ptw73z.png",
    height: 100,
    width: 100,
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Medtronic_xgouix.png",
    height: 100,
    width: 100,
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Record_Linc_w9zxvc.jpg",
    height: 100,
    width: 100,
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689926991/64_BitStore_poolzk.png",
    height: 100,
    width: 100,
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/siemens_s7ucfi.png",
    height: 100,
    width: 100,
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/sedemac_dlcgdk.jpg",
    height: 100,
    width: 100,
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/ptc_xxn1tl.png",
    height: 100,
    width: 100,
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Padmini-Vna_ep4pwk.jpg",
    height: 100,
    width: 100,
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/CIBT_Visas_cfxkcy.png",
    height: 60,
    width: 100,
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Cognizant_esfsi8.png",
    height: 100,
    width: 100,
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927040/HCL_igijlj.png",
    height: 100,
    width: 100,
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Alcove_Furniture_feq4qz.png",
    height: 100,
    width: 100,
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Air_BNB_ijkep7.png",
    height: 100,
    width: 100,
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Nityas_Fashion_a9ly47.png",
    height: 100,
    width: 100,
  },
];

function Card() {
  return (
    <div className="container our-clients-main-container mt-4">
      <h1 className="text-center our-clients-heading">Our Clients</h1>
      <div className="h-line"></div>
      <div className="row">
        {OurClientsList.map((eachClient) => (
          <div
            className="col-12 col-md-4 col-lg-3 our-clients-image-container"
            key={eachClient.id}
          >
            <div className="our-clients-card-image">
              <img
                alt={`Client ${eachClient.id}`}
                src={eachClient.src}
                height={eachClient.height}
                width={eachClient.width}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Card;
