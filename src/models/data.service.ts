import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    public webdesign = [];
    constructor() { }
    public getWebdesign() : Array<any>
    {
        return this.webdesign;
    }

    public setWebdesign(webdesign: Array<any>) : this
    {
        this.webdesign = webdesign;
        console.log(this.webdesign);
        return this;
    }

}
