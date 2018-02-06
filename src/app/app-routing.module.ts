import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {AboutComponent} from "./about/about.component";
import {ColorsComponent} from "./colors/colors.component";
import {FontsComponent} from "./fonts/fonts.component";
import {FontsDetailsComponent} from "./fonts-details/fonts-details.component";
import {GradientsDetailsComponent} from "./gradients-details/gradients-details.component";
import {LibraryComponent} from "./library/library.component";
import {PaletsComponent} from "./palets/palets.component";
import {SignInUpComponent} from "./sign-in-up/sign-in-up.component";
import {UiDesignComponent} from "./ui-design/ui-design.component";
import {UiDesignDetailsComponent} from "./ui-design-details/ui-design-details.component";
import {WebDesignComponent} from "./web-design/web-design.component";
import {WebDesignDetailsComponent} from "./web-design-details/web-design-details.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'about', component: AboutComponent },
    { path: 'colors', component: ColorsComponent },
    { path: 'fonts', component: FontsComponent },
    { path: 'fonts-details', component: FontsDetailsComponent },
    { path: 'gradients-details', component: GradientsDetailsComponent },
    { path: 'library', component: LibraryComponent },
    { path: 'palets', component: PaletsComponent },
    { path: 'sign-in-up', component: SignInUpComponent },
    { path: 'ui-design', component: UiDesignComponent },
    { path: 'ui-design-details', component: UiDesignDetailsComponent },
    { path: 'web-design', component: WebDesignComponent },
    { path: 'web-design-details', component: WebDesignDetailsComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
