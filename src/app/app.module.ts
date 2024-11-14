import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainSpaceComponent } from './main-space/main-space.component';
import { InformationalSpaceComponent } from './informational-space/informational-space.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotogaleryComponent } from './photogalery/photogalery.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MobilebarComponent } from './mobilebar/mobilebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainSpaceComponent,
    InformationalSpaceComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    Navbar2Component,
    PhotogaleryComponent,
    NotfoundComponent,
    MobilebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
