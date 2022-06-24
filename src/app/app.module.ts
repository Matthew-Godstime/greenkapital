import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ElementAnimationDirective } from './element-animation.directive';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NgImageSliderModule } from 'ng-image-slider';

const routs: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AboutComponent,
    ElementAnimationDirective
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    ImageCropperModule,
    NgxUsefulSwiperModule,
    NgImageSliderModule,
    RouterModule.forRoot(routs),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
