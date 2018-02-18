import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'creaDolphin';
    constructor(private router: Router) {

    }

    public load(page : String) {
        this.router.navigate([`/${page}`]);
    }
}
