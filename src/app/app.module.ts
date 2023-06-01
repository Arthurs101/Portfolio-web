import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigationBarComponent} from './nav-bar/navbar.component'
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProjectsComponent } from './projects/projects.component';
import { ImageSliderModule } from './imageSlider/imageSlider.module';
import {GreeterComponent} from './greeter/greeter.component'

import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AngularFireModule } from '@angular/fire/compat';

import {firebaseConfig} from 'src/environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HabilidadesComponent,
    ProjectsComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    SlickCarouselModule,
    ImageSliderModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
