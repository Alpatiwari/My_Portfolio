import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function StarField() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Add glass shards
    const shardGeometry = new THREE.PlaneGeometry(0.5, 0.5);
    const shardMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.1,
      roughness: 0,
      metalness: 0.1,
      transmission: 0.9,
      thickness: 0.5,
      ior: 1.5,
      side: THREE.DoubleSide
    });

    const shards = [];
    for (let i = 0; i < 20; i++) {
      const shard = new THREE.Mesh(shardGeometry, shardMaterial);
      shard.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      );
      shard.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(shard);
      shards.push(shard);
    }

    camera.position.z = 8;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 0.5);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x4338ca, 0.3);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      shards.forEach((shard, index) => {
        shard.rotation.x += 0.001 + index * 0.0001;
        shard.rotation.y += 0.002 + index * 0.0001;
        shard.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
        background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #000000 100%)',
      }}
    />
  );
}

