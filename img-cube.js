import * as THREE from "https://code4fukui.github.io/three.js/build/three.module.js";
import { style } from "https://js.sabae.cc/css.js";

const CSS = `
img-cube {
	display: inline-block;
  min-width: 300px;
  min-height: 300px;
}
`;

export class ImageCube extends HTMLElement {
  constructor() {
    super();
		style(CSS);

		const scene = new THREE.Scene();
		//scene.background = new THREE.Color( 0x444444 );

		const [w, h] = [this.clientWidth, this.clientHeight];
		const camera = new THREE.PerspectiveCamera(50, w / h, 0.01, 100);
		//camera.position.set(0, 1.2, 0.3);
		//camera.aspect = window.innerWidth / window.innerHeight;
		//camera.updateProjectionMatrix();

		scene.add(new THREE.HemisphereLight(0x808080, 0x606060));

		const light = new THREE.DirectionalLight(0xffffff);
		light.position.set(0, 6, 0);
		light.castShadow = true;
		light.shadow.camera.top = 2;
		light.shadow.camera.bottom = - 2;
		light.shadow.camera.right = 2;
		light.shadow.camera.left = - 2;
		light.shadow.mapSize.set( 4096, 4096 );
		scene.add( light );

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(w, h);
		renderer.outputEncoding = THREE.sRGBEncoding;
		renderer.shadowMap.enabled = true;
		renderer.xr.enabled = true;
		renderer.xr.cameraAutoUpdate = false;

		this.appendChild(renderer.domElement);

		// main
		const consoleGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.15);
		const consoleMaterial = new THREE.MeshPhongMaterial({ color: 0x595959 });
		const consoleMesh = new THREE.Mesh(consoleGeometry, consoleMaterial);
		consoleMesh.position.set(0, 0, -0.3);
		consoleMesh.castShadow = true;
		consoleMesh.receiveShadow = true;
		consoleMesh.rotation.x = -10;
		scene.add(consoleMesh);

		renderer.setAnimationLoop(() => {
			consoleMesh.rotation.y += 0.01;
			renderer.render(scene, camera);
		});
  }
}

customElements.define("img-cube", ImageCube);
