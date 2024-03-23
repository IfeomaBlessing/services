import React, {useState} from 'react'
import {Link} from 'react-scroll'
import '../footer/fstyle.css'

const Footer = () => {
  const [clicked, setClicked] = useState(false);
  const clickMenu =()=> {setClicked(!clicked)}
  return (
    <div className='footer'>
      <h3>Business Name</h3>

      <div className="footer-link">
         <footer>
    
            <ul className={clicked ? 'footer-menu active' : 'footer-menu'}>
           <li>
                        <Link to= "Home" className='foot-link'
                         onClick ={clickMenu} >
                          Home</Link>
                    </li>
                           <li>
                        <Link to="About" className='foot-link'
                        onClick ={clickMenu}>
                          About</Link>
                    </li>
    
                    <li>
                        <Link to="Services" className='foot-link'>Services</Link>
                    </li>
    
                    <li>
                        <Link to="Contact"className='foot-link'>
                          Contact</Link>
                    </li>
    
            </ul>
         </footer>
      </div>
      <hr />
      <div className="foot">
        <h6>&copy; 2024  Company name. All rights reserved</h6>
      </div>
    </div>
  )
}

export default Footer;