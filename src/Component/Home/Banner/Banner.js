import React from 'react';
import './Banner.css'
import hedimg from '../../../img/gul.png'

const Banner = () => {
  return (
    <div className='banner-container'>
       <div className="container">
           <div className='d-flex justify-content-center align-items-center banner-content'>
              <div>
              
              <div className='more-content'>
                     <div className='more-more-content'>
                     <img height='250' width='250' className='rounded-circle mt-5 bg-dark' src={hedimg} alt="" />
                <h2 className='text-white text-center'> JAMINUR ISLAM  </h2>
                <h4 className='text-white text-center'> Mern stack web developer </h4>
                     </div>
              </div>
              
              </div>
           </div>
       </div>
    </div>
  );
};

export default Banner;