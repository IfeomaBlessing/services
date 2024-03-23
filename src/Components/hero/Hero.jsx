import React, {useEffect, useState} from 'react'
import heroData from './heroData'
import '../hero/herostyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';


const Hero = () => {
    const [currentSlide, setCurrentSlide] =useState(0)
    const slideLength =heroData.length
    let scrollSlide = true;
     let slideInterval;

     function scroll(){
       slideInterval = setInterval(nextSlide, 5000)
     }

     useEffect(()=>{
      if(scrollSlide){
        scroll()
      }
       return ()=>clearInterval(slideInterval)
   }, [currentSlide])

   const nextSlide=()=>{
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 :
        currentSlide + 1)
   }
   const prevSlide=()=>{
    setCurrentSlide(currentSlide === 0 ? slideLength - 1:
        currentSlide - 1)
   }



    useEffect(()=>{
       setCurrentSlide(0)
    }, [])

  return (
    <section className='heroSection' id='Home'>
     <div className="heroWrapper">

     {heroData.map((data,index)=>(
       <div className={index === currentSlide ? "heroSlide current" :"heroSlide"}  key={index}>
           
           {index === currentSlide && (
                <>
                  <img className='bgImages' src={data.bgImage} alt={data.alt} />
                  <div className="hero-overlay">
                  <div className="hero-content">
                  <h1>{data.heroHeader}</h1>
                  <p>{data.heroText}</p>
                  <div className="btn">
                  <button>Contact Us</button>
                  </div>
                  </div>
                  </div>
                  </>
                         
           )}
       
        </div>
   
   
))}

     <div className="sliderButtons">
     <FontAwesomeIcon icon={ faArrowLeft} className='arrowIcon'onClick={prevSlide}/>
     <FontAwesomeIcon icon={ faArrowRight} className='arrowIcon' onClick={nextSlide}/>
     
     </div>
     </div>
    </section>
  )
}

export default Hero