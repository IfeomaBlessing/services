import React,{useState} from 'react'
import '../service/sstyle.css'
import serviceData from './serviceData'
import Faq from './Faq'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Service = () => {
  const [accordion, setAccordion] =useState(null)
  const handleAccordion =(currAccordion)=>{
     if (accordion === currAccordion){
      return setAccordion(null)
     }else{
      setAccordion(currAccordion)
     }

  }
  

  return (
    <div id='Services'>
    <section className='serviceHead'>
        <h1>Our Services</h1>
    </section>
    
    <section className="serviceContainer section-p">
        <h2>Our Main Focus</h2>
        <div className="serviceWrapper">
            {
             serviceData.map((data)=> (
         <div className="card">
                    <div className="img-container">
                    <img src={data.bgImage} alt="" />
                    </div>
                    
                    <div className="overlay"></div>
                    <div className="card-content">
                        <h3>{data.header}</h3>
                        <p>{data.text}</p>
                     </div>
                   
                  </div>
             ))
            }
        </div>
    </section>

    <section className="FAQ section-p">
    <h3>Frequently Asked Questions</h3>
    
     <div className="accordion-container">
     {Faq.map((x, currAccordion)=> (                
                   <div className="wrapper">
                   <div className={accordion === currAccordion ?"question active":"question"} onClick={()=>handleAccordion(currAccordion)}>
                     <h4>{x.question}</h4>
                     <div className="Acc-Icons">
                      {accordion === currAccordion ?(<FontAwesomeIcon icon={ faPlus}/>): (<FontAwesomeIcon icon={ faMinus} />)}
                     </div>
                    
                   </div>
                   <div className={accordion === currAccordion ?"showAnswer":"answer"}>
                     <p>{x.answer}</p>
                   </div>
                 </div>
             
              
             ))
            }
     </div>
    </section>
    </div>
  )
}

export default Service