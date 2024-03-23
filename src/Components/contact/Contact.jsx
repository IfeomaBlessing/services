import React from 'react'
import '../contact/cstyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faMailBulk, faPhone} from '@fortawesome/free-solid-svg-icons';
import cimage1 from '../../assets/cimage1.jpg'

const Contact = () => {
  return (
    <div id='Contact' className='section-p'>

      <div className="info">
        <div className="left">
          <h2>Chat To Our Friendly Team</h2>
          <p>We'd love to hear from you! Please get in touch</p>
        </div>
        <div className="right">
            <div className="co">
            <FontAwesomeIcon icon={ faAddressBook} className='arrowIcon'/>
            <p>Lagos, Nigeria</p>
            </div>

            <div className="co">
            <FontAwesomeIcon icon={ faPhone} className='arrowIcon'/>
             <p>+234906573944</p>
            </div>

            <div className="co">
            <FontAwesomeIcon icon={ faMailBulk} className='arrowIcon'/>
         <p>gmail.com</p>
            </div>
        </div>
      </div>
      <div className="bg">
      <img src={cimage1} alt="image" />
      </div>
    </div>
  )
}

export default Contact