import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const GltfViewer = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 1, 5);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio); // Improves rendering on high-DPI screens
        mountRef.current.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 10, 5);
        scene.add(directionalLight);

        // Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Load GLTF Model
        const loader = new GLTFLoader();
        loader.load(
            "public/mobile/S11.gltf", // Replace with the path to your GLTF file
            (gltf) => {
                gltf.scene.scale.set(30, 30, 30); // Adjust model size
                scene.add(gltf.scene);
                console.log("Model loaded successfully!");
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
            },
            (error) => {
                console.error("An error occurred while loading the model:", error);
            }
        );

        const enableRightClick = (event) => {
            event.stopPropagation(); // Stop OrbitControls from handling the right-click
        };
        renderer.domElement.addEventListener("contextmenu", enableRightClick);


        // Handle window resizing
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix(); // Recalculate projection matrix
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        // Animate
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize); // Clean up event listener
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} />;
};

export default GltfViewer;
