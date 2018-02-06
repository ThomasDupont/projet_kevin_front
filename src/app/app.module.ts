import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ColorsComponent } from './colors/colors.component';
import { GradientsDetailsComponent } from './gradients-details/gradients-details.component';
import { PaletsComponent } from './palets/palets.component';
import { FontsComponent } from './fonts/fonts.component';
import { FontsDetailsComponent } from './fonts-details/fonts-details.component';
import { UiDesignComponent } from './ui-design/ui-design.component';
import { UiDesignDetailsComponent } from './ui-design-details/ui-design-details.component';
import { WebDesignDetailsComponent } from './web-design-details/web-design-details.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { LibraryComponent } from './library/library.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    ColorsComponent,
    GradientsDetailsComponent,
    PaletsComponent,
    FontsComponent,
    FontsDetailsComponent,
    UiDesignComponent,
    UiDesignDetailsComponent,
    WebDesignDetailsComponent,
    WebDesignComponent,
    SignInUpComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
