import React from 'react';
import './About.css'
import myimg from '../../../img/about.png' ;

const About = () => {
  return (
    <div className='about  my-5'>
       <div className='container py-4'>
         <h2> About me </h2>
         <hr />
         <div className='about-container'>
            <div className=' py-2 img-container'>
               <img width='400' src={myimg} alt="" />
            </div>
            <div>
              <div className='w-75 mx-auto'>


              <h1>My name is sagor khan </h1>
              <h2 className='text-white'> I am Mern stack web developer </h2>
             
              <p> I have been involved in the technology industry for the last 3 years. And as a MERN-STACK web developer, I am now 2 years old. I have completed 36 standard projects of different types of websites and applications using technology such as-
              HTML, CSS, javascript, bootstrap, component UI, responsive, firebase, nodes, rest APIs, express, MongoDB.</p>

            
             <div className='d-flex'>
               <div>
                 <h5> Find with me </h5>
               <ul>
                <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                <li><a href=""><i class="fab fa-facebook-square"></i></a></li>
                <li><a href=""><i class="fab fa-twitter-square"></i></a></li>
                
              </ul>
               </div>

               <div>

               </div>
             </div>
              </div>
            
         
            </div>
         </div>
       </div>
    </div>
  );
};

export default About;