import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RenderObjectComponent } from './render-object/render-object.component';
import { MaterialLoaderComponent } from './material-loader/material-loader.component';

const routes: Routes = [
  { path: 'render', component: RenderObjectComponent },
  { path: 'mtl', component: MaterialLoaderComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
