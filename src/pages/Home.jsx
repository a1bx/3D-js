import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/loader'
import Island from '../models/island'

const home = () => {
  // const adjustBiplaneForScreenSize = () => {
  //   let screenScale, screenPosition;

  //   // If screen width is less than 768px, adjust the scale and position
  //   if (window.innerWidth < 768) {
  //     screenScale = [1.5, 1.5, 1.5];
  //     screenPosition = [0, -1.5, 0];
  //   } else {
  //     screenScale = [3, 3, 3];
  //     screenPosition = [0, -4, -4];
  //   }

  //   return [screenScale, screenPosition];
  // };
  const adjustScreen = () => {
    // let screenScale=null;
    // let screenPosition=[0,-6.5,-43]
    // let screenRotation=[0.1,4.7,0]
    let screenScale,screenPosition,screenRotation;

    if (window.innerWidth < 768) {
       screenScale=[0.9,0.9,0.9];
       screenPosition=[0,-6.5,-43];
    } else {
      screenScale=[1,1,1];
       screenPosition=[0,-6.5,-43];
    }
    return [screenScale,screenPosition,screenRotation];
  }

  const [islandScale,islandPosition,islandRotation]=adjustScreen();

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
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Island
            position={islandPosition}
            scale={islandScale}  
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default home
