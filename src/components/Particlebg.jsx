import React from 'react'
import Particles from 'react-particles-js';
import ParticleConfig from "./particle-config"

export default function Particlebg() {
  return (
    <div id="particles-js">
   <Particles
  params={{
    particles: {
      color: {
        value: "#186A3B"
      },
      line_linked: {
        color: {
          value: "#000000"
        }
      },
      number: {
        value: 50
      },
      size: {
        value: 3
      }
    }
  }}
/>
    </div>
  )
}
