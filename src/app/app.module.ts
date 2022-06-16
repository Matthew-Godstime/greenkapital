import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ElementAnimationDirective } from './element-animation.directive';

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
    RouterModule.forRoot(routs),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
