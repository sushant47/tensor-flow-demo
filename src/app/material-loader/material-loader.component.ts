import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-material-loader',
  templateUrl: './material-loader.component.html',
  styleUrls: ['./material-loader.component.css']
})
export class MaterialLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var mtlLoader = new (THREE as any).ObjectLoader();
    mtlLoader.setPath('assets/IronMan');
    console.log(mtlLoader);
    mtlLoader.load('/IronMan.mtl', (materials: any)=>{
console.log(materials);
    });
  //   mtlLoader.load('IronMan.mtl', function (materials) {
  //     materials.preload();
  //     var loader = new (THREE as any).OBJLoader();
  //     loader.setMaterials(materials);
  //     loader.load('../../assets/IronMan/IronMan.obj', 
  //     function (object) {
  //       console.log(object);
  //     }, function (object) {
  //       console.log(object);
  //     }, function (object) {
  //       console.log(object);
  //     }
  // }
}
}
