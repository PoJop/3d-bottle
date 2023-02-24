import gsap from "gsap-trial";
import React from "react"
import * as THREE from 'three';
import { useSwiperContext } from "../../context";

interface IModel3DProps {
    slideNum: number;
}

export const Model3D: React.FC<IModel3DProps> = ({ slideNum }) => {


    const { state } = useSwiperContext()
    const { currentSlide, direction } = state
    const canvasRef = React.useRef<HTMLDivElement>(null)
    const animateRef = React.useRef<{ on: boolean, right: boolean, max: number }>({ on: true, right: true, max: 1 })

    React.useEffect(() => {
        if (slideNum === currentSlide) {
            gsap.fromTo(canvasRef.current, { x: "-20%", duration: 1 }, { x: "0%", duration: 1 })

            animateRef.current.max = direction === "right" ? 2 : -2
            animateRef.current.right = direction === "right"
        }
        // else {
        //     if (currentSlide < slideNum) {

        //         animateRef.current.max = 2
        //         animateRef.current.right = true
        //         gsap.to(canvasRef.current, { x: "-20%", duration: 1 })
        //     } else {

        //         animateRef.current.max = -2
        //         animateRef.current.right = false
        //         gsap.to(canvasRef.current, { x: "+20%", duration: 1 })
        //     }

        // }
    }, [direction, slideNum, currentSlide])


    React.useEffect(() => {
        if (!canvasRef.current) return

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({ alpha: true });

        renderer.setSize(600, 400);
        canvasRef.current?.appendChild(renderer.domElement)

        const white = new THREE.Color(0xffffff);
        const grey = new THREE.Color(0xdddddd);
        const red = new THREE.Color(0xff0000);
        const green = new THREE.Color(0x00ff00);
        const blue = new THREE.Color(0x0000ff);


        let state = {
            cubeColor: slideNum === 0 ? grey : slideNum === 1 ? red : green,
            previousTweenColor: slideNum === 0 ? grey : slideNum === 1 ? red : green,
            nextTweenColor: slideNum === 0 ? grey : slideNum === 1 ? red : green,
            alphaUnit: 0
        }
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial();
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.y = 0;
        directionalLight.position.z = 1;
        scene.add(directionalLight);

        cube.material.color.set(state.cubeColor);
        camera.position.z = 5;
        camera.position.z = 5;
        var angle = 0;
        var radius = 25;



        function animate() {
            requestAnimationFrame(animate);

            // cube.rotation.x = 1;
            const { on, max, right } = animateRef.current

            if (on) {
                if (right) {
                    cube.rotation.y += 0.02;
                } else  {
                    cube.rotation.y -= 0.02;
                }

            }
            renderer.render(scene, camera);
        }

        animate();

        return () => {
            if (canvasRef.current) {
                canvasRef.current.innerHTML = ''
            }
        }
    }, [])

    return (
        <>
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full pointer-events-none">
                <div
                    className="relative z-[100]"
                    ref={canvasRef}
                />
            </div>
        </>
    )
}