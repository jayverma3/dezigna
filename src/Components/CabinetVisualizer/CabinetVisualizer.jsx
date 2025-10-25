import React, { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture, Environment, ContactShadows, RoundedBox } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import { useCabinetData } from './useCabinetData';
import './CabinetVisualizer.css';

// --- 3D COMPONENTS ---

const applyTexture = (map, props) => {
  const texture = map.clone();
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(props.scale, props.scale);
  texture.rotation = THREE.MathUtils.degToRad(props.rotation);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
};

const Drawer = ({ position, size, texture }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pos } = useSpring({
    pos: isOpen ? [position[0], position[1], position[2] + size[2] * 0.7] : position,
    config: { mass: 0.5, tension: 300, friction: 40 },
  });

  return (
    <animated.group position={pos} onClick={() => setIsOpen(!isOpen)}>
      <RoundedBox args={[size[0], size[1], 0.15]} radius={0.02}>
        <meshStandardMaterial map={texture} />
      </RoundedBox>
      <mesh position={[0, 0, -size[2] / 2 + 0.075]}>
        <boxGeometry args={[size[0] - 0.1, size[1] - 0.1, size[2]]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      <RoundedBox position={[0, 0, 0.1]} args={[size[0] * 0.4, 0.08, 0.08]} radius={0.02}>
        <meshStandardMaterial color="#bbbbbb" metalness={1.0} roughness={0.2} />
      </RoundedBox>
    </animated.group>
  );
};

const CabinetModel = ({ config }) => {
  const { body, countertop, dimensions, pbr } = config;
  const bodyTexture = useTexture(body.mapUrl);
  const countertopTexture = useTexture(countertop.mapUrl);

  const bodyMap = applyTexture(bodyTexture, body);
  const countertopMap = applyTexture(countertopTexture, countertop);

  const { width, height, depth } = dimensions;
  const countertopHeight = 0.15;
  const baseHeight = 0.2;
  const bodyHeight = height - countertopHeight - baseHeight;

  return (
    <group>
      {/* Countertop */}
      <mesh position={[0, height / 2 - countertopHeight / 2, 0]}>
        <boxGeometry args={[width + 0.05, countertopHeight, depth + 0.05]} />
        <meshStandardMaterial map={countertopMap} metalness={pbr.metalness} roughness={pbr.roughness} />
      </mesh>

      {/* Body */}
      <mesh position={[0, bodyHeight / 2 - baseHeight / 2, 0]}>
        <boxGeometry args={[width, bodyHeight, depth]} />
        <meshStandardMaterial map={bodyMap} metalness={pbr.metalness} roughness={pbr.roughness} />
      </mesh>

      {/* Drawers */}
      <Drawer
        position={[0, bodyHeight * 0.25 - baseHeight / 2, depth / 2]}
        size={[width * 0.9, bodyHeight * 0.45, depth * 0.9]}
        texture={bodyMap}
      />
      <Drawer
        position={[0, -bodyHeight * 0.25 - baseHeight / 2, depth / 2]}
        size={[width * 0.9, bodyHeight * 0.45, depth * 0.9]}
        texture={bodyMap}
      />

      {/* Base */}
      <mesh position={[0, -height / 2 + baseHeight / 2, 0]}>
        <boxGeometry args={[width - 0.1, baseHeight, depth - 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </group>
  );
};


// --- UI COMPONENTS ---

const MaterialPicker = ({ title, materials, selected, onChange }) => (
  <div className="picker">
    <h4>{title}</h4>
    <div className="thumbnails">
      {materials.map(material => (
        <img
          key={material.name}
          src={material.mapUrl}
          alt={material.name}
          className={selected.name === material.name ? 'active' : ''}
          onClick={() => onChange(material)}
        />
      ))}
    </div>
  </div>
);

const Slider = ({ label, value, ...props }) => (
  <div className="slider">
    <label>{label}</label>
    <span>{Number(value).toFixed(2)}</span>
    <input type="range" value={value} {...props} />
  </div>
);


// --- MAIN VISUALIZER COMPONENT ---

const CabinetVisualizer = () => {
  const { data, loading, error } = useCabinetData();
  const [config, setConfig] = useState({
    dimensions: { width: 3, height: 4, depth: 2 },
    body: null,
    countertop: null,
    pbr: { metalness: 0.2, roughness: 0.8 },
    scene: { brightness: 1.5 },
  });

  useEffect(() => {
    if (data) {
      setConfig(prev => ({
        ...prev,
        body: { ...data.bodyMaterials[0], scale: 0.5, rotation: 0 },
        countertop: { ...data.countertopMaterials[0], scale: 1, rotation: 0 },
      }));
    }
  }, [data]);

  const handleConfigChange = (category, key, value) => {
    setConfig(prev => ({
      ...prev,
      [category]: { ...prev[category], [key]: value }
    }));
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error loading data.</div>;
  if (!data || !config.body) return null;

  return (
    <div className="visualizer-wrapper">
      <div className="viewer-container">
        <Canvas camera={{ position: [4, 3, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <Environment preset="city" />
            <pointLight 
              position={[10, 10, 10]} 
              intensity={config.scene.brightness} 
              decay={2}
            />
            <CabinetModel config={config} />
            <ContactShadows position={[0, -2.1, 0]} opacity={0.75} scale={10} blur={2.5} far={4.2} />
          </Suspense>
          <OrbitControls minDistance={3} maxDistance={10} enablePan={false} />
        </Canvas>
      </div>

      <div className="configurator-panel">
        <div className="header">
          <h2>Dezigna Cabinet</h2>
          <p>Customize your cabinet in real-time.</p>
        </div>

        <details open>
          <summary>Materials</summary>
          <MaterialPicker
            title="Body Material"
            materials={data.bodyMaterials}
            selected={config.body}
            onChange={material => handleConfigChange('body', 'name', material.name) || setConfig(p => ({...p, body: {...p.body, ...material}}))}
          />
          <MaterialPicker
            title="Countertop Material"
            materials={data.countertopMaterials}
            selected={config.countertop}
            onChange={material => handleConfigChange('countertop', 'name', material.name) || setConfig(p => ({...p, countertop: {...p.countertop, ...material}}))}
          />
        </details>

        <details>
          <summary>Material Properties</summary>
          <Slider label="Body Texture Scale" value={config.body.scale} min="0.1" max="2" step="0.05" onChange={e => handleConfigChange('body', 'scale', e.target.value)} />
          <Slider label="Countertop Texture Scale" value={config.countertop.scale} min="0.1" max="3" step="0.05" onChange={e => handleConfigChange('countertop', 'scale', e.target.value)} />
          <Slider label="Roughness" value={config.pbr.roughness} min="0" max="1" step="0.01" onChange={e => handleConfigChange('pbr', 'roughness', e.target.value)} />
          <Slider label="Metalness" value={config.pbr.metalness} min="0" max="1" step="0.01" onChange={e => handleConfigChange('pbr', 'metalness', e.target.value)} />
        </details>

        <details>
          <summary>Dimensions</summary>
          <Slider label="Width" value={config.dimensions.width} min="2" max="6" step="0.1" onChange={e => handleConfigChange('dimensions', 'width', e.target.value)} />
          <Slider label="Height" value={config.dimensions.height} min="3" max="5" step="0.1" onChange={e => handleConfigChange('dimensions', 'height', e.target.value)} />
          <Slider label="Depth" value={config.dimensions.depth} min="1.5" max="3" step="0.1" onChange={e => handleConfigChange('dimensions', 'depth', e.target.value)} />
        </details>
        
        <details>
          <summary>Scene</summary>
          <Slider label="Brightness" value={config.scene.brightness} min="0.5" max="3" step="0.1" onChange={e => handleConfigChange('scene', 'brightness', e.target.value)} />
        </details>
      </div>
    </div>
  );
};

export default CabinetVisualizer;