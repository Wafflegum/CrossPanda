import * as THREE from "three";
import { floor } from "three/tsl";
// import { OrbitControls } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#canvas") });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

camera.position.set(5, 5, 5);

renderer.render(scene, camera);

const cube = new THREE.BoxGeometry(1, 1);
const material = new THREE.MeshStandardMaterial({
	color: "white",
});

const cubeMesh = new THREE.Mesh(cube, material);

const light = new THREE.AmbientLight(0x292929, 1);
const pointLight = new THREE.PointLight(0xffffff, 10, 50);
pointLight.position.set(0, 2, 2);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

scene.add(light, pointLight, cubeMesh, directionalLight);

camera.lookAt(cubeMesh.position);

// const controls = new OrbitControls(camera, renderer.domElement);

const floorObj = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshStandardMaterial({
	color: "white",
	side: THREE.FrontSide,
});

const floorMesh = new THREE.Mesh(floorObj, floorMaterial);
floorMesh.rotation.x = Math.PI / -2;
floorMesh.position.setY(-0.5);
scene.add(floorMesh);

canvas.addEventListener("click", () => {
	cubeMesh.position.z += -1;
});

function animate() {
	requestAnimationFrame(animate);

	// controls.update();

	renderer.render(scene, camera);
}

animate();
