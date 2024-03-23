
import React, {useState} from 'react'
import {Link} from 'react-scroll'
import '../navbar/navstyle.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = ({scroll}) => {
       
    const [clicked, setClicked] = useState(false);
    const clickMenu =()=> {setClicked(!clicked)}
  return (
 
        <>      
         <header className={scroll ? 'header scrolled' : 'header'} >
           <div className='logo'>
            <h3>logo/brand</h3>
               {/* <img src={logo} alt='logo'/>  */}
            </div>
            
         <nav>
    
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
           <li>
                        <Link to= "Home" className='navlink'
                        activeClass='activeLink'
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-100} onClick ={clickMenu} >
                          Home</Link>
                    </li>
                           <li>
                        <Link to="About" className='navlink'
                        activeClass='activeLink'
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-70} onClick ={clickMenu}>
                          About</Link>
                    </li>
    
                    <li>
                        <Link to="Services" className='navlink'
                        activeClass='activeLink'
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-50} onClick ={clickMenu}>
                          Services</Link>
                    </li>
    
                    <li>
                        <Link to="Contact" className='navlink'
                        activeClass='activeLink'
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-90} onClick ={clickMenu}>
                          Contact</Link>
                    </li>
    
            </ul>
    
            <div className='Menu' onClick={clickMenu}>
              <div className='icons'>
              {clicked ?  (<FontAwesomeIcon icon={faTimes} /> ) :
          (<FontAwesomeIcon icon={faBars}/>)}
              </div>
           
            </div>
    
         </nav>
         </header>
           
        </>
    
      );
    }

export default Navbar