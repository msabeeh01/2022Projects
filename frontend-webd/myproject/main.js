import './style.css';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshBasicMaterial({color: 0xFF6347 } );
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(1,1,1);

//const ambLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

const controls = new OrbitControls(camera, renderer.domElement);

addEventListener("mousemove", (event) => {
  mouse.x = event.clientX / window.innerWidth - 0.5;
  mouse.y = -(event.clientY / window.innerHeight - 0.5);
});

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;

  torus.rotation.x = t+=100;

  camera.position.z = t*-0.01;
  camera.position.x = t* -0.0002;
  camera.position.y = t* -0.0002;
}

document.body.onscroll = moveCamera;

//animation loop
function animate(){
  requestAnimationFrame(animate);

  //Shape properties
  torus.rotation.x += 0.005;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.005;

  renderer.render(scene,camera);
}

animate();

//star loop
function addStar(){
  const geometry = new THREE.SphereGeometry(0.25,24,24);
  const material =  new THREE.MeshStandardMaterial({color: 0xffffff});
  const star = new THREE.Mesh(geometry, material);

  //randomly generate x,y,z values on 3D map
  const[x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  //assign each star a random location
  star.position.set(x,y,z);
  scene.add(star);
}

//spawn 200 stars
Array(200).fill().forEach(addStar);
