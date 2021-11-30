import React from "react";
import Particles from "react-particles-js";

const Animation = () => {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 10,
            },
            size: {
              value: 3,
            },
          },

          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
        height="85vh"
      />
    </div>
  );
};

export default Animation;
