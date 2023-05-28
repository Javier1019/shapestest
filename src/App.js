import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Cone, Box, Sphere, Cylinder } from '@react-three/drei';
import create from 'zustand';
import './App.css';

// Store to hold the active category
const useStore = create(set => ({
  activeCategory: 'Category 1',
  setActiveCategory: category => set(() => ({ activeCategory: category })),
}))

const RotatingCube = () => {
  const mesh = React.useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Box ref={mesh} args={[2, 2, 2]}>
      <meshStandardMaterial color="orange" />
    </Box>
  );
};

const RotatingSphere = () => {
  const mesh = React.useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Sphere ref={mesh} args={[1.5, 32, 32]}>
      <meshStandardMaterial color="green" />
    </Sphere>
  );
};

const RotatingPyramid = () => {
  const mesh = React.useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Cone ref={mesh} args={[1.5, 3, 4]}>
      <meshStandardMaterial color="red" />
    </Cone>
  );
};

const RotatingCuboid = () => {
  const mesh = React.useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Box ref={mesh} args={[2, 4, 6]}>
      <meshStandardMaterial color="yellow" />
    </Box>
  );
};

const RotatingCylinder = () => {
  const mesh = React.useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Cylinder ref={mesh} args={[1.5, 1.5, 3, 32]}>
      <meshStandardMaterial color="purple" />
    </Cylinder>
  );
};

const RotatingCone = () => {
  const mesh = React.useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Cone ref={mesh} args={[1.5, 3, 32]}>
      <meshStandardMaterial color="grey" />
    </Cone>
  );
};

// Define the RotatingPrism component using low-level APIs.
const RotatingPrism = () => {
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  const vertices = [
    -1, -1, -1,   1, -1, -1,   0,  1, -1,  // Bottom (base)
    -1, -1, 1,    1, -1, 1,    0,  1, 1   // Top
  ];

  const indices = [
    0, 1, 2,  // Bottom face
    3, 4, 5,  // Top face
    0, 3, 2,  // Sides
    2, 3, 5,  
    2, 5, 1,  
    1, 5, 4,  
    1, 4, 0,  
    0, 4, 3   
  ];

  return (
    <mesh ref={ref}>
      <polyhedronBufferGeometry args={[vertices, indices, 2]}>
        <meshStandardMaterial color="pink" />
      </polyhedronBufferGeometry>
    </mesh>
  );
};

const Scene = () => {
  const activeCategory = useStore(state => state.activeCategory);

  return (
    <Canvas className="full-screen" style={{ width: '100%', height: '100%' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {activeCategory === 'Category 1' && <RotatingCube />}
      {activeCategory === 'Category 2' && <RotatingSphere />}
      {activeCategory === 'Category 3' && <RotatingPyramid />}
      {activeCategory === 'Category 4' && <RotatingCuboid />}
      {activeCategory === 'Category 5' && <RotatingCylinder />}
      {activeCategory === 'Category 6' && <RotatingPrism />}
      {activeCategory === 'Category 7' && <RotatingCone />}
    </Canvas>
  );
};

const CategorySelector = () => {
  const setActiveCategory = useStore(state => state.setActiveCategory);

  return (
    <div className="button-bar">
      <button onClick={() => setActiveCategory('Category 1')}>Cube</button>
      <button onClick={() => setActiveCategory('Category 2')}>Sphere</button>
      <button onClick={() => setActiveCategory('Category 3')}>Pyramid</button>
      <button onClick={() => setActiveCategory('Category 4')}>Cuboid</button>
      <button onClick={() => setActiveCategory('Category 5')}>Cylinder</button>
      <button onClick={() => setActiveCategory('Category 6')}>Prism</button>
      <button onClick={() => setActiveCategory('Category 7')}>Cone</button>
    </div>
  );
};

export default function App() {
  return (
    <div className="full-screen">
      <CategorySelector />
      <Scene />
    </div>
  );
}
