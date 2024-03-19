import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";
import { rule } from "postcss";

const ParticlesContainer = () => {
  const ParticlesInit = useCallback(async (engin) => {
    await loadFull(engin);
  }, []);
  const ParticlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles
    className="w-full h-full absolute translate-z-0 "
      id="tsparticles"
      init={ParticlesInit}
      loaded={ParticlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fps_limit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover:{
              enable:true,
              mode:'repulse'
            },
            resize:true,
            
          },
          modes :{
            push:{
              quantity:90
            },
            repuls:{
              distanse:200,
              duration:0.4
            }
          }
        },
        particles:{
          color:{
            value:'#e68e2e'
          },
          links:{
            color:'#f5d393',
            distanse:150,
            enable:true,
            opacity:0.5,
            width:1
          },
          collisions:{
            enable:true,

          },
          move:{
             direction:'none',
             enable:true,
             outModes:{
              default:'bounce'
             },
             random:false,
             speed:1,
             straight:false
          },
          number:{
            density:{
              enable:true,
              area:800
            },
            value:80
          },
          opacity:{
            value:0.5
          },
          shape:{
            type:"circle"
          },
           size:{
            value:{min:1,max:5}
          }
          
        },
        direction:true
      }}
    />
  );
};

export default ParticlesContainer;
