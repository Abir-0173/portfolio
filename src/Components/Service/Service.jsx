import React from 'react'
import './Service.css'
import service_1 from '../../assets/web-2.jpg'
import service_2 from '../../assets/Cloud.avif'
import service_3 from '../../assets/Shopify-1.jpg'
import service_icon_1 from '../../assets/Web-service.png'
import service_icon_2 from '../../assets/Cloud-icon.png'
import service_icon_3 from '../../assets/E-commerce.png'

const Service = () => {
  return (
    <div className='services'>
      <div className="service">
        <img src={service_1} alt="" />
        <div className="caption">
          <img src={service_icon_1} alt="" />
          <p>Web Development</p>
        </div>
      </div>
      <div className="service">
        <img src={service_2} alt="" />
        <div className="caption">
          <img src={service_icon_2} alt="" />
          <p>Cloud & Deployment</p>
        </div> 
      </div>
      <div className="service">
        <img src={service_3} alt="" />
        <div className="caption">
          <img src={service_icon_3} alt="" />
          <p>E-commerce</p>
        </div> 
      </div>
    </div>
  )
}

export default Service