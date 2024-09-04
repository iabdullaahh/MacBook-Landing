import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./styles.css"
import {Environment, OrbitControls, ScrollControls} from '@react-three/drei'
import MacContainer from './MacContainer'


const App = () => {
  return (
    <div className='w-full h-screen'>
      <div className='absolute flex flex-col items-center text-white top-36 left-1/2 -translate-x-1/2 font-["Helvetica_Now_Display]'>
      <h3 className='masked text-7xl tracking tighter uppercase font-[700]'>macbook pro.</h3>
      <h5 className='masked uppercase font-bold text-3xl'>oh so pro!</h5>
      </div>
       
         
    
    <Canvas camera={{fov:20, position: [0, -10, 220]}}>
      <OrbitControls />
      <Environment
      files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",]}
      />
      <ScrollControls pages={3}>
      <MacContainer />
      </ScrollControls>
    </Canvas>
    </div>
  )
}

export default App
