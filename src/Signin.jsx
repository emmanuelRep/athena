import React, { useState, useEffect, useRef } from 'react'
import {styles} from './styles.css'
import * as THREE from 'three'

const Signin = () => {
    const [formData, setFormData] = useState({
        username: "", password: ""
    });

    console.log(formData)

    function handleChange(event){
        const {name, type, value, checked} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const renderer = new THREE.WebGL1Renderer({canvas})

        //set up scene
        const scene = new THREE.Scene()

        //setup my camera
        const camera = new THREE.PerspectiveCamera(
            75,
            canvas.clientWidth / canvas.clientHeight,
            0.1,
            1000
        )
        camera.position.z = 5

        //create stars
        const starGeometry = new THREE.BufferGeometry();
        const starPositions = []
        for( let i = 0; i < 1000; i++){
            const star = new THREE.Vector3()
            star.x = THREE.MathUtils.randFloatSpread(2000)
            star.y = THREE.MathUtils.randFloatSpread(2000)
            star.z = THREE.MathUtils.randFloatSpread(2000)
            starPositions.push(star.x, star.y, star.z)
        }
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3))
        const starMaterial = new THREE.PointsMaterial({color: 0xffffff})
        const stars = new THREE.Points(starGeometry, starMaterial)
        scene.add(stars)

        renderer.setClearColor(0x0C134F)

        //render loop
        const animate = () => {
            requestAnimationFrame(animate)

            //rotate stars
            stars.rotation.x += 0.001
            stars.rotation.y += 0.001

            //render scene
            renderer.setSize(canvas.clientWidth, canvas.clientHeight)
            renderer.render(scene, camera)
        }

        animate();

        //clean up effect
        return () => {
            renderer.dispose()
        }
    }, [])  

  return (
    <body className='body'>
        <div className='background-canvas-container'>
                <canvas className='background-canvas' ref={canvasRef}></canvas>
        </div>
        <div className='container'>
            <form className='form'>
            
            <p className='title'>Sign in to Athena</p>
                <input
                    className='textfield' 
                    type='textarea'
                    placeholder='username'
                    name='username'
                    onChange={handleChange}
                    value={formData.username}
                />
                <input
                    className='textfield' 
                    type='password'
                    placeholder='password'
                    name='password'
                    onChange={handleChange}
                    value={formData.password}
                />
                <button className='signin-btn'>Sign in</button>
                
            </form>
            
            
        </div>
        
    </body>
  )
}

export default Signin
