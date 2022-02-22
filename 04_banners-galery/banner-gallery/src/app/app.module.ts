import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './pages/banner/banner.component';
import { PagesComponent } from './pages/pages.component';
import { AnimationMenusComponent } from './pages/animation-menus/animation-menus.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationTypesComponent } from './pages/animation-types/animation-types.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    BannerComponent,
    AnimationMenusComponent,
    AnimationTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
