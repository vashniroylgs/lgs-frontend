import {Link} from "react-router-dom"
import "./index.css"


const Header=()=>(

    <nav className="navbar navbar-expand-lg navbar-light userNavbar">
        <a className="navbar-brand" href="navbar"><img alt="headerImage" className="headerImage" src="https://res.cloudinary.com/dkajxnnlq/image/upload/v1689764804/download_jlbxxy.jpg"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto text-left navbarText">
            <div className="Headerbutton-container">
            <Link to="/" className="link">
                <p className="Headerhover-button HeaderText">HOME</p>
            </Link>
            </div>
        <div className="Headerbutton-container">
        <Link to="/aboutus" className="link"><p className="Headerhover-button HeaderText">ABOUT US</p></Link>
       
    </div>

    <div className="Headerbutton-container">

      <p className="Headerhover-button HeaderText">SERVICES</p>
      <div className="Headeroptions">
        <Link to="/polarianalm" className="link">
          <option className="Headeroption-item">Polarion ALM</option>
        </Link>
        <Link to="/saascloudsolutions" className="link">

        <option className="Headeroption-item">SAAS & cloud Solutions</option>
        </Link>
        <Link to="/ptcintegrity" className="link">
          <option className="Headeroption-item">PTC Integrity</option>
        </Link>

        <Link to="/mobileandappdevelopment" className="link">

            <option className="Headeroption-item">Mobile & APP Development</option>

        </Link>




        <Link to="/mendix" className="link">

          <option className="Headeroption-item">Mendix</option>

        </Link>




        <Link to="/microsoftdynamics" className="link">

           <option className="Headeroption-item">Microsoft Dynamic</option>

        </Link>




        <Link to="/salesforce" className="link">

          <option className="Headeroption-item">Sales Force</option>

        </Link>

         

         <Link to="/training" className="link">

          <option className="Headeroption-item">Training</option>

         </Link>  

      </div>

    </div>




    <div className="Headerbutton-container">

      <Link to="/careers" className="link">

      <p className="Headerhover-button HeaderText">CAREERS</p>

      </Link>

    </div>




    <div className="Headerbutton-container">

      <Link to="/blogs" className="link">

        <p className="Headerhover-button HeaderText">BLOGS</p>

        </Link>

     

    </div>




    <div className="Headerbutton-container">

      <p className="Headerhover-button HeaderText">RESELLER</p>

      <div className="Headeroptions">

          <Link to="/resellerpolarian" className="link">

          <option className="Headeroption-item">Polarion</option>

          </Link>

          <Link to="/resellermendix" className="link">

          <option className="Headeroption-item">Mendix</option>

          </Link>

      </div>

    </div>

    <div className="Headerbutton-container">

      <Link to="/contactus" className="link">

        <p className="Headerhover-button HeaderText">CONTACT US</p>

        </Link>

    </div>      

    </div>

  </div>

</nav>
)

export default Header