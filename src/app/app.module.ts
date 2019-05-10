import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Editor3DModule } from 'ng2-3d-editor';

import { AppComponent } from './app.component';
import { RenderObjectComponent } from './render-object/render-object.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialLoaderComponent } from './material-loader/material-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    RenderObjectComponent,
    MaterialLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    Editor3DModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
