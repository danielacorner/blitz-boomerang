import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, KeyboardControls } from '@react-three/drei'
import Game from './components/Game'

function App() {
  return (
    <div className="w-full h-screen">
      <KeyboardControls
        map={[
          { name: 'moveForward', keys: ['ArrowUp', 'w', 'W'] },
          { name: 'moveBackward', keys: ['ArrowDown', 's', 'S'] },
          { name: 'moveLeft', keys: ['ArrowLeft', 'a', 'A'] },
          { name: 'moveRight', keys: ['ArrowRight', 'd', 'D'] },
        ]}
      >
        <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Game />
          <OrbitControls />
        </Canvas>
      </KeyboardControls>
    </div>
  )
}

export default App