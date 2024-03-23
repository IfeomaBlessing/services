import React from 'react'
import "../about/about.css"
import image2 from '../../assets/image2.jpg'
import Testimonial from './Testimonials'

const About = () => {
  return (
    <div className='about-page section-p' id='About'>
      <h1 className='aboutHeader'>Who We Are</h1>
    <section className="aboutContent">
        <div className="left-about" >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Autem minus quos architecto quidem, ad aspernatur repellendus
                 tempora culpa iure, laboriosam, sit recusandae aliquid incidunt eaque tempore natus optio minima. 
                 Dolorum veritatis repudiandae saepe dignissimos iste minus ab est. Maiores perferendis nihil quos blanditiis quod laudantium, culpa odit architecto deserunt fuga sapiente ut error similique earum enim possimus iste harum corrupti qui rem reprehenderit? Ratione sed consequuntur harum quo aspernatur laboriosam ut blanditiis atque error. Tempore neque ipsa, ducimus dicta nesciunt in obcaecati tenetur placeat voluptas expedita. Similique, est error? Eaque harum inventore 
                aperiam ullam porro laborum aspernatur nam doloremque facere?</p>
        </div>
        <div className="right-about">

      
          <img src={image2} alt="image" className="bigImg"/>

            
        </div>
    </section>

    <section className="testimonial">
    <p>Testimonials</p>
    <h3 className='test-header'>What Our Clients Say</h3>

     <div className="testimonial-container">
     {Testimonial.map((x)=> (                
                    <div className="test-content">
                       <p>{x.text}</p>
                        <h3>{x.name}</h3>
                      </div>
             ))
            }
     </div>
    </section>
    </div>
  )
}

export default About