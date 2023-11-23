import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/loader'

const home = () => {
  return (
    <section className='w-full h-screen relative' >
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        pop
      </div> */}
      <Canvas
        className='w-full h-full bg-transparent'
        camera={{ near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader/>}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default home
