import React from 'react';
import './Mywork.css'

const works = [
  {id: 1 , name: 'FrontendEnd web Development' , des:'I have been working on FrontendEnd Development for a long time, so I can do any work of FrontendEndDevelopment.'},
  {id: 1 , name: 'Backend web development' , des:"I've been working on backend development for a long time, so I can do any work on web backend development."},
  {id: 1 , name: 'MERN STACK DEVELOPER' , des:'Finally, I am a Marn Stack web developer, I can develop a small site alone with backend and frontend.'},

]

const Mywork = () => {
  return (
    <div>
       <div className="container my-5">
       <p className='m-0 p-0'> FEATURES </p>
       <h2 className='mb-4'> What I do</h2>
       <hr />
       

          <div className="row">
             {
               works.map(work => {
                 return (
                  <div className="col-lg-4">
                  <div className='work-content'>
                  <i className="far fa-file-code"></i>
                   <h5> {work.name}</h5>
                   <p> {work.des}</p>
                   <i className="fas fa-long-arrow-alt-right"></i>
                  </div>
               </div>
                 )
               })
             }
          </div>
       </div>
    </div>
  );
};

export default Mywork;