import React from 'react'
import './index.css'


const ScrolllingImages1 = [
          ,
          
        "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Oracle_dmaiik.png",
   
        
         
        ,
         
         
        ,
       
      "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927040/LJB_lladcr.png",
         
      ,
               
      "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927009/DrR_Logo_wvw2gc.jpg",
       
      ,


].map((image) => ({

  id: crypto.randomUUID(),

  image

}));




const ScrolllingImages2 = [

    "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927009/Fidelity_investments_y7t61u.png",
          
      "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927009/Esnaad_gba3ox.png",
        
    "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Delight_Cabs_aet4l7.png",
        
  "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Covidien_kbldon.png",
        
  "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Compliance_Group_x8sgyy.jpg",
      
  "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/ConvaTec_almrlt.png",
       
   "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Capgemini-Logo_xe2sql.png",

].map((image) => ({

  id: crypto.randomUUID(),

  image

}));



function Card() {
  return (
    <div className='technologies-card-container sizing-container'>
        <div>
            <h1 className='text-center'>Our Clients</h1>
        </div>
    <div className='container-fluid' >
        <div className="row card-holding-container">
        <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Zoox_Motors_qhr2hn.png" height={100} width={100} />

        </div>
          </div>
          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Taulia_ffxzhx.png" height={100} width={100} />

        </div>
          </div>
          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Tata_Alexis_ptw73z.png" height={100} width={100} />

        </div>
          </div>
          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Medtronic_xgouix.png" height={100} width={100} />

        </div>
          </div>
          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Record_Linc_w9zxvc.jpg" height={100} width={100} />

        </div>
          </div>
          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689926991/64_BitStore_poolzk.png" height={100} width={100} />

        </div>
          </div>
          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/siemens_s7ucfi.png" height={100} width={100} />

        </div>
          </div>
          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/sedemac_dlcgdk.jpg" height={100} width={100} />

        </div>
          </div>

          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/ptc_xxn1tl.png" height={100} width={100} />

        </div>
          </div>
          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Padmini-Vna_ep4pwk.jpg" height={100} width={100} />

        </div>
          </div>
          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/CIBT_Visas_cfxkcy.png" height={60} width={100} />

        </div>
          </div>
          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Cognizant_esfsi8.png" height={100} width={100} />

        </div>
          </div>
          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927040/HCL_igijlj.png" height={100} width={100} />

        </div>
          </div>
          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Alcove_Furniture_feq4qz.png" height={100} width={100} />

        </div>
          </div>
          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Air_BNB_ijkep7.png" height={100} width={100} />

        </div>
          </div>
          <div className="col-12 col-md-3">
          <div className='technology-card-image'> 
            <img src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Nityas_Fashion_a9ly47.png" height={100} width={100} />

        </div>
          </div>
          </div> 
    </div>
    </div>
  )
}
export default Card
