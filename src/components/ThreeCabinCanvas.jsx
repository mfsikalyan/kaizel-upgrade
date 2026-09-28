import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Ultra High-Resolution 2048x2048 Procedural PBR Texture Generators
function createMarbleTextureHD() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 2048;
  const ctx = canvas.getContext('2d');

  // Base Calacatta White Marble Surface
  const grad = ctx.createRadialGradient(1024, 1024, 100, 1024, 1024, 1400);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(0.6, '#f8fafc');
  grad.addColorStop(1, '#e2e8f0');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 2048, 2048);

  // Soft grey organic vein networks
  for (let i = 0; i < 14; i++) {
    ctx.beginPath();
    ctx.strokeStyle = `rgba(148, 163, 184, ${0.15 + Math.random() * 0.25})`;
    ctx.lineWidth = Math.random() * 6 + 2;
    let x = Math.random() * 2048;
    let y = 0;
    ctx.moveTo(x, y);
    while (y < 2048) {
      x += (Math.random() - 0.5) * 120;
      y += Math.random() * 120 + 60;
      ctx.quadraticCurveTo(x + (Math.random() - 0.5) * 80, y - 30, x, y);
    }
    ctx.stroke();
  }

  // Polished Tile Seam Grid Lines
  ctx.strokeStyle = 'rgba(203, 213, 225, 0.6)';
  ctx.lineWidth = 3;
  ctx.strokeRect(4, 4, 2040, 2040);
  ctx.beginPath();
  ctx.moveTo(1024, 0); ctx.lineTo(1024, 2048);
  ctx.moveTo(0, 1024); ctx.lineTo(2048, 1024);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function createWoodTextureHD() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 2048;
  const ctx = canvas.getContext('2d');

  // Rich Teak & Mahogany Wood Base
  const grad = ctx.createLinearGradient(0, 0, 0, 2048);
  grad.addColorStop(0, '#78350f');
  grad.addColorStop(0.25, '#92400e');
  grad.addColorStop(0.5, '#b45309');
  grad.addColorStop(0.75, '#78350f');
  grad.addColorStop(1, '#451a03');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 2048, 2048);

  // Micro-timber grain strands
  for (let i = 0; i < 600; i++) {
    ctx.fillStyle = i % 2 === 0 ? 'rgba(45, 16, 2, 0.18)' : 'rgba(254, 240, 138, 0.12)';
    const y = Math.random() * 2048;
    ctx.fillRect(0, y, 2048, Math.random() * 6 + 1);
  }

  // Polished Brass Inlay Divider Strips
  const gradientBrass = ctx.createLinearGradient(0, 0, 2048, 0);
  gradientBrass.addColorStop(0, '#fbbf24');
  gradientBrass.addColorStop(0.5, '#fef08a');
  gradientBrass.addColorStop(1, '#d97706');
  ctx.fillStyle = gradientBrass;
  
  [512, 1024, 1536].forEach(x => {
    ctx.fillRect(x - 6, 0, 12, 2048);
  });

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

function createSteelTextureHD() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 2048;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 2048, 2048);
  grad.addColorStop(0, '#cbd5e1');
  grad.addColorStop(0.3, '#f8fafc');
  grad.addColorStop(0.6, '#94a3b8');
  grad.addColorStop(1, '#e2e8f0');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 2048, 2048);

  // Vertical Hairline Brushed Grain Lines
  ctx.fillStyle = 'rgba(71, 85, 105, 0.08)';
  for (let i = 0; i < 800; i++) {
    const x = Math.random() * 2048;
    ctx.fillRect(x, 0, Math.random() * 2 + 1, 2048);
  }

  // Polished Mirror Inlay Lines
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(512 - 10, 0, 20, 2048);
  ctx.fillRect(1536 - 10, 0, 20, 2048);

  return new THREE.CanvasTexture(canvas);
}

function createSkylineTextureHD() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 2048;
  const ctx = canvas.getContext('2d');

  // Vibrant Outdoor Sky & Atrium Sunset Gradient
  const grad = ctx.createLinearGradient(0, 0, 0, 2048);
  grad.addColorStop(0, '#0284c7');
  grad.addColorStop(0.35, '#38bdf8');
  grad.addColorStop(0.65, '#f97316');
  grad.addColorStop(0.9, '#ea580c');
  grad.addColorStop(1, '#0f172a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 2048, 2048);

  // High-Rise Skyscraper Towers
  ctx.fillStyle = '#0f172a';
  const buildings = [
    { x: 80, w: 260, h: 1400 },
    { x: 380, w: 320, h: 1700 },
    { x: 740, w: 280, h: 1500 },
    { x: 1060, w: 360, h: 1850 },
    { x: 1460, w: 280, h: 1300 },
    { x: 1780, w: 220, h: 1600 },
  ];

  buildings.forEach(b => {
    ctx.fillRect(b.x, 2048 - b.h, b.w, b.h);

    // Illuminated Office Windows
    ctx.fillStyle = '#fef08a';
    for (let wy = 2048 - b.h + 40; wy < 1980; wy += 55) {
      for (let wx = b.x + 25; wx < b.x + b.w - 25; wx += 45) {
        if (Math.random() > 0.2) {
          ctx.fillRect(wx, wy, 24, 35);
        }
      }
    }
    ctx.fillStyle = '#0f172a';
  });

  // Architectural Atrium Glass Truss Beams
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
  ctx.lineWidth = 8;
  for (let x = 0; x <= 2048; x += 256) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 2048);
    ctx.stroke();
  }
  for (let y = 0; y <= 2048; y += 256) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(2048, y);
    ctx.stroke();
  }

  return new THREE.CanvasTexture(canvas);
}

export default function ThreeCabinCanvas({ wallFinish, flooring, lighting, viewAngle, activeFloor }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  
  const backWallMeshRef = useRef(null);
  const leftWallMeshRef = useRef(null);
  const rightWallMeshRef = useRef(null);
  const floorMeshRef = useRef(null);
  const ceilingLightRef = useRef(null);
  const spotLightRef = useRef(null);
  const sunLightRef = useRef(null);
  const copScreenMeshRef = useRef(null);
  const starryPointsRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 4.2);
    cameraRef.current = camera;

    // 2. High Exposure WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.7; // Bright vivid photorealistic exposure
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 3. Smooth Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 1.8;
    controls.minPolarAngle = Math.PI / 4;
    controls.minDistance = 2.0;
    controls.maxDistance = 6.0;
    controls.target.set(0, 0, -0.4);
    controlsRef.current = controls;

    // 4. Bright Multi-Point Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffedd5, 3.8);
    sunLight.position.set(5, 6, 5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    const mainSpot = new THREE.SpotLight(0x0066ff, 5.0);
    mainSpot.position.set(0, 2.3, 0);
    mainSpot.angle = Math.PI / 2.2;
    mainSpot.penumbra = 0.5;
    mainSpot.castShadow = true;
    scene.add(mainSpot);
    spotLightRef.current = mainSpot;

    const fillLight = new THREE.PointLight(0xffffff, 2.2, 10);
    fillLight.position.set(0, 0.8, 3.0);
    scene.add(fillLight);

    // 5. Textures
    const marbleTex = createMarbleTextureHD();
    const woodTex = createWoodTextureHD();
    const steelTex = createSteelTextureHD();
    const skylineTex = createSkylineTextureHD();

    // 6. Build Detailed 3D Elevator Cabin Room
    const cabinWidth = 3.2;
    const cabinHeight = 3.2;
    const cabinDepth = 3.2;

    // OUTDOOR SKYLINE BACKDROP
    const skyGeo = new THREE.PlaneGeometry(16, 10);
    const skyMat = new THREE.MeshBasicMaterial({
      map: skylineTex,
      side: THREE.DoubleSide
    });
    const skyMesh = new THREE.Mesh(skyGeo, skyMat);
    skyMesh.position.set(0, 0, -cabinDepth / 2 - 1.2);
    scene.add(skyMesh);

    // BACK WALL
    const backWallGeo = new THREE.PlaneGeometry(cabinWidth, cabinHeight);
    const backWallMat = new THREE.MeshPhysicalMaterial({
      color: 0xf59e0b,
      metalness: 0.95,
      roughness: 0.12,
      map: woodTex,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1
    });
    const backWallMesh = new THREE.Mesh(backWallGeo, backWallMat);
    backWallMesh.position.set(0, 0, -cabinDepth / 2);
    backWallMesh.receiveShadow = true;
    scene.add(backWallMesh);
    backWallMeshRef.current = backWallMesh;

    // BEVELED POLISHED MIRROR PANEL ON BACK WALL
    const mirrorGeo = new THREE.PlaneGeometry(1.2, cabinHeight * 0.88);
    const mirrorMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 1.0,
      roughness: 0.01,
      clearcoat: 1.0,
      reflectivity: 1.0
    });
    const mirrorMesh = new THREE.Mesh(mirrorGeo, mirrorMat);
    mirrorMesh.position.set(0, 0, -cabinDepth / 2 + 0.015);
    scene.add(mirrorMesh);

    // Mirror Bevel Trim Frame
    const mirrorFrameGeo = new THREE.BoxGeometry(1.26, cabinHeight * 0.9, 0.02);
    const mirrorFrameMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.95, roughness: 0.1 });
    const mirrorFrameMesh = new THREE.Mesh(mirrorFrameGeo, mirrorFrameMat);
    mirrorFrameMesh.position.set(0, 0, -cabinDepth / 2 + 0.008);
    scene.add(mirrorFrameMesh);

    // LEFT WALL
    const sideWallGeo = new THREE.PlaneGeometry(cabinDepth, cabinHeight);
    const leftWallMat = backWallMat.clone();
    const leftWallMesh = new THREE.Mesh(sideWallGeo, leftWallMat);
    leftWallMesh.position.set(-cabinWidth / 2, 0, 0);
    leftWallMesh.rotation.y = Math.PI / 2;
    leftWallMesh.receiveShadow = true;
    scene.add(leftWallMesh);
    leftWallMeshRef.current = leftWallMesh;

    // RIGHT WALL
    const rightWallMat = backWallMat.clone();
    const rightWallMesh = new THREE.Mesh(sideWallGeo, rightWallMat);
    rightWallMesh.position.set(cabinWidth / 2, 0, 0);
    rightWallMesh.rotation.y = -Math.PI / 2;
    rightWallMesh.receiveShadow = true;
    scene.add(rightWallMesh);
    rightWallMeshRef.current = rightWallMesh;

    // FLOOR SLAB (POLISHED MARBLE/GRANITE/STEEL WITH CLEARCOAT GLAZE)
    const floorGeo = new THREE.PlaneGeometry(cabinWidth, cabinDepth);
    const floorMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      map: marbleTex,
      roughness: 0.05,
      metalness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
      reflectivity: 0.9
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.position.set(0, -cabinHeight / 2, 0);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);
    floorMeshRef.current = floorMesh;

    // CEILING SLAB
    const ceilingGeo = new THREE.PlaneGeometry(cabinWidth, cabinDepth);
    const ceilingMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.2
    });
    const ceilingMesh = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceilingMesh.position.set(0, cabinHeight / 2, 0);
    ceilingMesh.rotation.x = Math.PI / 2;
    scene.add(ceilingMesh);

    // OVERHEAD ILLUMINATED LIGHT BOX FIXTURE
    const fixtureGeo = new THREE.BoxGeometry(2.5, 0.06, 2.5);
    const fixtureMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x0066ff,
      emissiveIntensity: 1.8
    });
    const fixtureMesh = new THREE.Mesh(fixtureGeo, fixtureMat);
    fixtureMesh.position.set(0, cabinHeight / 2 - 0.03, 0);
    scene.add(fixtureMesh);
    ceilingLightRef.current = fixtureMesh;

    // STARRY FIBEROPTIC POINTS
    const starsGeo = new THREE.BufferGeometry();
    const starCount = 200;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 2.8;
      starPos[i * 3 + 1] = cabinHeight / 2 - 0.02;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 2.8;
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x00d2ff,
      size: 0.06,
      transparent: true,
      opacity: 0.95
    });
    const starryPoints = new THREE.Points(starsGeo, starMat);
    starryPoints.visible = false;
    scene.add(starryPoints);
    starryPointsRef.current = starryPoints;

    // 3D CHROME HANDRAIL
    const handrailGeo = new THREE.CylinderGeometry(0.045, 0.045, cabinWidth * 0.88, 24);
    const handrailMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 1.0,
      roughness: 0.01,
      clearcoat: 1.0
    });
    const handrailMesh = new THREE.Mesh(handrailGeo, handrailMat);
    handrailMesh.rotation.z = Math.PI / 2;
    handrailMesh.position.set(0, -0.3, -cabinDepth / 2 + 0.12);
    handrailMesh.castShadow = true;
    scene.add(handrailMesh);

    [-1.1, 1.1].forEach(x => {
      const bracketGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.12, 16);
      const bracketMesh = new THREE.Mesh(bracketGeo, handrailMat);
      bracketMesh.rotation.x = Math.PI / 2;
      bracketMesh.position.set(x, -0.3, -cabinDepth / 2 + 0.06);
      scene.add(bracketMesh);
    });

    // 3D COP BUTTON OPERATING PANEL
    const copGeo = new THREE.BoxGeometry(0.04, 1.55, 0.45);
    const copMat = new THREE.MeshPhysicalMaterial({
      color: 0x475569,
      metalness: 0.95,
      roughness: 0.08
    });
    const copMesh = new THREE.Mesh(copGeo, copMat);
    copMesh.position.set(cabinWidth / 2 - 0.03, 0.1, 0.3);
    scene.add(copMesh);

    // COP Screen Display Box
    const screenGeo = new THREE.BoxGeometry(0.05, 0.32, 0.36);
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x0066ff });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(cabinWidth / 2 - 0.035, 0.55, 0.3);
    scene.add(screenMesh);
    copScreenMeshRef.current = screenMesh;

    // 3D ENTRANCE DOOR FRAME AT FRONT
    const doorFrameMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9, roughness: 0.2 });
    const leftPostGeo = new THREE.BoxGeometry(0.3, cabinHeight, 0.1);
    const leftPost = new THREE.Mesh(leftPostGeo, doorFrameMat);
    leftPost.position.set(-cabinWidth / 2 + 0.15, 0, cabinDepth / 2 - 0.05);
    scene.add(leftPost);

    const rightPost = new THREE.Mesh(leftPostGeo, doorFrameMat);
    rightPost.position.set(cabinWidth / 2 - 0.15, 0, cabinDepth / 2 - 0.05);
    scene.add(rightPost);

    const topHeaderGeo = new THREE.BoxGeometry(cabinWidth, 0.3, 0.1);
    const topHeader = new THREE.Mesh(topHeaderGeo, doorFrameMat);
    topHeader.position.set(0, cabinHeight / 2 - 0.15, cabinDepth / 2 - 0.05);
    scene.add(topHeader);

    // 7. Render Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      controls.dispose();
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // Update Materials & Camera Angle Presets live
  useEffect(() => {
    if (!backWallMeshRef.current) return;

    const backWallMat = backWallMeshRef.current.material;
    const leftWallMat = leftWallMeshRef.current.material;
    const rightWallMat = rightWallMeshRef.current.material;

    if (wallFinish === 'steel') {
      backWallMat.map = createSteelTextureHD();
      backWallMat.color.setHex(0xffffff);
      backWallMat.metalness = 0.98;
      backWallMat.roughness = 0.08;
      backWallMat.transparent = false;
      backWallMat.opacity = 1.0;
    } else if (wallFinish === 'gold') {
      backWallMat.map = null;
      backWallMat.color.setHex(0xf59e0b);
      backWallMat.metalness = 0.95;
      backWallMat.roughness = 0.1;
      backWallMat.transparent = false;
      backWallMat.opacity = 1.0;
    } else if (wallFinish === 'wood') {
      backWallMat.map = createWoodTextureHD();
      backWallMat.color.setHex(0xffffff);
      backWallMat.metalness = 0.1;
      backWallMat.roughness = 0.35;
      backWallMat.transparent = false;
      backWallMat.opacity = 1.0;
    } else if (wallFinish === 'glass') {
      backWallMat.map = null;
      backWallMat.color.setHex(0x38bdf8);
      backWallMat.metalness = 0.95;
      backWallMat.roughness = 0.02;
      backWallMat.transparent = true;
      backWallMat.opacity = 0.22; // Transparent glass revealing outdoor city skyline!
    }

    leftWallMat.copy(backWallMat);
    rightWallMat.copy(backWallMat);

    // Floor Materials
    const floorMat = floorMeshRef.current.material;
    if (flooring === 'marble') {
      floorMat.map = createMarbleTextureHD();
      floorMat.color.setHex(0xffffff);
      floorMat.roughness = 0.04;
      floorMat.metalness = 0.2;
    } else if (flooring === 'granite') {
      floorMat.map = null;
      floorMat.color.setHex(0x334155);
      floorMat.roughness = 0.04;
      floorMat.metalness = 0.4;
    } else if (flooring === 'diamond') {
      floorMat.map = null;
      floorMat.color.setHex(0x94a3b8);
      floorMat.roughness = 0.35;
      floorMat.metalness = 0.85;
    } else if (flooring === 'vinyl') {
      floorMat.map = null;
      floorMat.color.setHex(0x0d9488);
      floorMat.roughness = 0.25;
      floorMat.metalness = 0.1;
    }

    // Lighting Updates
    if (spotLightRef.current && ceilingLightRef.current && sunLightRef.current) {
      if (lighting === 'recessed') {
        spotLightRef.current.color.setHex(0x0066ff);
        spotLightRef.current.intensity = 5.0;
        sunLightRef.current.intensity = 3.8;
        ceilingLightRef.current.material.emissive.setHex(0x0066ff);
        if (starryPointsRef.current) starryPointsRef.current.visible = false;
      } else if (lighting === 'luminous') {
        spotLightRef.current.color.setHex(0xffffff);
        spotLightRef.current.intensity = 7.5;
        sunLightRef.current.intensity = 4.5;
        ceilingLightRef.current.material.emissive.setHex(0xffffff);
        if (starryPointsRef.current) starryPointsRef.current.visible = false;
      } else if (lighting === 'starry') {
        spotLightRef.current.color.setHex(0x00d2ff);
        spotLightRef.current.intensity = 3.5;
        sunLightRef.current.intensity = 2.8;
        ceilingLightRef.current.material.emissive.setHex(0x00d2ff);
        if (starryPointsRef.current) starryPointsRef.current.visible = true;
      }
    }

    // COP Display Color
    if (copScreenMeshRef.current) {
      copScreenMeshRef.current.material.color.setHex(activeFloor % 2 === 0 ? 0x0066ff : 0x00d2ff);
    }

    // Smooth Orbit Camera Controls Angle Presets
    if (controlsRef.current && cameraRef.current) {
      if (viewAngle === 'perspective') {
        cameraRef.current.position.set(0.8, 0.4, 4.2);
        controlsRef.current.target.set(0, 0, -0.4);
      } else if (viewAngle === 'front') {
        cameraRef.current.position.set(0, 0, 4.2);
        controlsRef.current.target.set(0, 0, -0.4);
      } else if (viewAngle === 'panoramic') {
        cameraRef.current.position.set(-1.2, -0.2, 4.4);
        controlsRef.current.target.set(0, 0, -0.4);
      }
      controlsRef.current.update();
    }

  }, [wallFinish, flooring, lighting, viewAngle, activeFloor]);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing border border-kaizel-borderDark shadow-2xl bg-gradient-to-b from-sky-900/40 to-slate-900">
      <div ref={mountRef} className="w-full h-full" />

      {/* Orbit & Zoom Hint */}
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-kaizel-darker/90 backdrop-blur-md border border-kaizel-borderDark text-[10px] font-mono font-bold text-kaizel-accent pointer-events-none flex items-center gap-1.5 shadow-md">
        <span className="w-2 h-2 rounded-full bg-kaizel-accent animate-ping" />
        <span>3D ORBIT: DRAG MOUSE / SCROLL TO ZOOM</span>
      </div>
    </div>
  );
}
