import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/spacehack.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Walls.geometry}
        material={materials.Material}
        position={[0, 1.599, 0]}
        scale={1.003}
      />
      <OrthographicCamera
        makeDefault={false}
        far={100}
        near={0.1}
        position={[6.556, 6.556, 6.556]}
        rotation={[-0.654, 0.671, 0.444]}
      />
      <mesh
        geometry={nodes.Floor.geometry}
        material={materials['Material.001']}
        position={[0.009, 2.139, 0.012]}
        scale={[1.03, 1.611, 1.029]}
      />
      <mesh
        geometry={nodes.Rug.geometry}
        material={materials.Material}
        position={[0.471, 0.286, 0.526]}
        scale={[0.924, 0.748, 0.923]}
      />
      <group position={[0, 1.599, 0]} scale={1.003}>
        <mesh geometry={nodes.Cube003_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials['Material.003']} />
      </group>
      <mesh
        geometry={nodes.Shelflamp.geometry}
        material={materials['Material.004']}
        position={[1.509, 2.671, -1.023]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.063}>
        <mesh
          geometry={nodes.Lightbulb.geometry}
          material={materials['Material.017']}
          position={[0, 0.358, 0.392]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.086}
        />
      </mesh>
      <mesh
        geometry={nodes.Shelf.geometry}
        material={materials['Material.018']}
        position={[0.503, 1.567, -1.041]}
        scale={[0.975, 1.312, 0.29]}
      />
      <mesh
        geometry={nodes.Plant.geometry}
        material={materials['Material.007']}
        position={[-0.878, 0.554, -0.894]}
        scale={0.277}
      />
      <mesh
        geometry={nodes.shelfinside.geometry}
        material={materials['Material.019']}
        position={[0.503, 0.919, -1.074]}
        scale={[0.847, 0.835, 0.319]}
      />
      <mesh
        geometry={nodes.BOOK.geometry}
        material={materials['Material.012']}
        position={[-0.093, 1.834, -0.869]}
        scale={[0.076, 0.255, 0.195]}
      />
      <mesh
        geometry={nodes.books1.geometry}
        material={materials['Material.011']}
        position={[0.843, 1.171, -1.04]}
        scale={[0.076, 0.255, 0.22]}
      />
      <mesh
        geometry={nodes.books2.geometry}
        material={materials['Material.014']}
        position={[0.368, 2.502, -1.094]}
        scale={[0.076, 0.255, 0.195]}
      />
      <mesh
        geometry={nodes.books3.geometry}
        material={materials['Material.005']}
        position={[0.18, 0.512, -0.998]}
        rotation={[0, 0, 1.572]}
        scale={[0.076, 0.255, 0.207]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials['Material.005']}
        position={[0.121, 2.492, -1.001]}
        rotation={[0, 0, -0.476]}
        scale={[0.069, 0.224, 0.202]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials['Material.013']}
        position={[0.586, 1.179, -1.033]}
        rotation={[0, 0, -0.476]}
        scale={[0.071, 0.248, 0.202]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials['Material.009']}
        position={[0.6, 0.644, -1.02]}
        rotation={[0, 0, 0.532]}
        scale={[0.067, 0.209, 0.202]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials['Material.010']}
        position={[0.764, 0.667, -1.035]}
        rotation={[0, 0, 0.558]}
        scale={[0.071, 0.248, 0.202]}
      />
      <mesh
        geometry={nodes.Plantmini.geometry}
        material={materials['Material.007']}
        position={[-0.021, 1.026, -1.016]}
        scale={0.099}
      />
      <mesh
        geometry={nodes.treeroot.geometry}
        material={materials['Material.008']}
        position={[-0.877, 0.603, -0.9]}
        rotation={[0, 0.401, 0]}
        scale={[0.071, 0.125, 0.125]}
      />
      <mesh
        geometry={nodes.rootmini.geometry}
        material={materials['Material.008']}
        position={[0.01, 1.003, -1.036]}
        rotation={[0, 1.07, 0]}
        scale={[0.034, 0.026, 0.034]}
      />
      <mesh
        geometry={nodes.Tree.geometry}
        material={materials['Material.005']}
        position={[-0.858, 1.711, -0.862]}
        scale={0.482}
      />
      <mesh
        geometry={nodes.Tree001.geometry}
        material={materials['Material.005']}
        position={[-0.002, 1.284, -1.021]}
        scale={0.137}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials['Material.027']}
        position={[-0.984, -0.077, -0.557]}
        scale={8.548}
      />
      <mesh
        geometry={nodes.Tree002.geometry}
        material={materials['Material.024']}
        position={[0.988, 1.865, -1.022]}
        rotation={[0, -1.496, 0]}
        scale={0.105}
      />
      <mesh
        geometry={nodes.rootmtyini001.geometry}
        material={materials['Material.025']}
        position={[1, 1.647, -1.014]}
        rotation={[0, -0.426, 0]}
        scale={[0.026, 0.02, 0.026]}
      />
      <mesh
        geometry={nodes.Plantmini001.geometry}
        material={materials['Material.026']}
        position={[0.983, 1.666, -1.036]}
        rotation={[0, -1.496, 0]}
        scale={0.076}
      />
    </group>
  )
}

useGLTF.preload('/spacehack.glb')