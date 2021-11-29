import React from 'react';
import './Project.css'
import img10 from '../../../webPage/web-10.png'
import img11 from '../../../webPage/web-11.png'
import img12 from '../../../webPage/web-12.png'

const Project = () => {
  return (
    <div>
      <div classNameName="container">
        <h2> my project </h2>
        <hr />
           
           <div className='container'>
             <div className="row">
                <div className="col-lg-4">
                   <div className='' style={{height: '500px'}}>
                   <img className='w-50'  style={{height: '400px'}} src={img10} alt="" /> 
                   </div>
                </div>
                <div className="col-lg-4">
                   <img className='w-100' src={img11} alt="" />
                </div>
                <div className="col-lg-4">
                   <img className='w-100' src={img12} alt="" />
                </div>
             </div>
           </div>
     
      </div>
    </div>
  );
};

export default Project;