import React from 'react';
import Particles from 'react-particles-js';

const Animation = ({name}) => {
            return (
             <div>
                <Particles
              params={{
                "particles": {
                    "number": {
                        "value": 20
                    },
                    "size": {
                        "value": 3
                    }
                },
                
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
                
            
                
            }}
            height='100px'
            
            />


             </div>
            );
      
    
    
  
};

export default Animation;