import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';

@Component({
  selector: 'app-render-object',
  templateUrl: './render-object.component.html',
  styleUrls: ['./render-object.component.css']
})
export class RenderObjectComponent implements OnInit {
  scene: any;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  constructor() { }

  ngOnInit() {
    OBJLoader(THREE);
    // console.log(typeof THREE.OBJLoader);
    const canvas = <HTMLCanvasElement>document.getElementById('scene');
    this.renderer = new THREE.WebGLRenderer({ canvas: canvas });
    const ww = window.innerWidth;
    const wh = window.innerHeight;
    this.renderer.setSize(ww, wh);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(50, ww / wh, 0.1, 10000);
    this.camera.position.set(0, 0, 500);
    this.scene.add(this.camera);

    //Add a light in the scene
    let directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 0, 350);
    directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
    this.scene.add(directionalLight);

    //Load the obj file
    this.loadOBJ();
  }

  public loadOBJ() {

    //Manager from ThreeJs to track a loader and its status
    var manager = new THREE.MaterialLoader();
    // console.log(OBJLoader);
    //Loader for Obj from Three.js
    // const objLoader = new OBJLoader();
    var loader = new OBJLoader(manager).load('../assets/pizza.obj',
     function (obj) {
        // Add the loaded object to the scene
        this.addBananaInScene(obj);
      }, function (obj) {
        // Add the loaded object to the scene
       console.log(obj);
      },
      function (obj) {
        // Add the loaded object to the scene
       console.log(obj);
      });
    console.log(loader);
    this.addBananaInScene(loader);
    // loader.load('../assets/pizza.obj', function (object) {
    //   console.log(object);

    // });
    console.log(loader);
    //Launch loading of the obj file, addBananaInScene is the callback when it's ready 
    // loader.load('../assets/pizza.obj', function (obj) {
    //   // Add the loaded object to the scene
    //   this.addBananaInScene(obj);
    // });

  }
  addBananaInScene(object) {
    let banana = object;
    //Move the banana in the scene
    banana.rotation.x = Math.PI / 2;
    banana.position.y = -200;
    banana.position.z = 50;
    //Go through all children of the loaded object and search for a Mesh
    object.traverse(function (child) {
      //This allow us to check if the children is an instance of the Mesh constructor
      // if(child instanceof THREE.Mesh){
      // 	child.material.color = new THREE.Color(0X00FF00);
      // 	//Sometimes there are some vertex normals missing in the .obj files, ThreeJs will compute them
      // 	child.geometry.computeVertexNormals();
      // }
    });
    //Add the 3D object in the scene
    this.scene.add(banana);
    this.render();
  }
  render() {

    //Turn the banana
    // banana.rotation.z += .01;

    this.renderer.render(this.scene, this.camera);
  };
}
