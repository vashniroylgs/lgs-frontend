import { Component } from 'react'
import './index.css'
import clients from '../images/clients.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ClientsPage extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='clients-hero-container col-12'>
                <p>OUR CLIENTS</p>
                <img alt="client-hero" className='clients-hero-image' src={clients} />
        </div>
      </div>
    )
  }
}

export default ClientsPage