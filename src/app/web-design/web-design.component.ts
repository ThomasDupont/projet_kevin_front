import { Component, OnInit } from '@angular/core';
import { ApolloService } from './../../models/apollo.service';
import { Router } from '@angular/router';
import { WebDesign } from "../../interfaces/web-design";

@Component({
    selector: 'app-web-design',
    templateUrl: './web-design.component.html',
    styleUrls: ['.././feed.component.scss']
})
export class WebDesignComponent implements OnInit {

    public title = "WEB DESIGN";
    public webdesign: Array<WebDesign>;
    public page: number;

    constructor(private apollo: ApolloService, private router: Router) {
        apollo.query(`{
              getWebDesignList (page : 0) {
                _id
                title
                description
                screenPath
                profilPictureCreator
                creatorName
                websiteLink
                createdAt
              }
         }`).subscribe(r => this.webdesign = r.data.getWebDesignList);
        this.page = 1;
    }

    ngOnInit() {

    }

    loadMore() : void
    {
        this.apollo.query(`{
              getWebDesignList (page : ${this.page++}) {
                id
                title
                description
                screenPath
                profilPictureCreator
                creatorName
                websiteLink
                createdAt
              }
         }`).subscribe(r => {
            let temp = JSON.parse(JSON.stringify(this.webdesign));
            console.log(r.data.getWebDesignList.length);
            for (let i = 0; i < r.data.getWebDesignList.length; i++) {
                temp.push(r.data.getWebDesignList[i]);
            }
            this.webdesign = temp;
        });
    }

    /**
     *
     * @param {String} id
     */
    public getDetail(id : String) : void {
        this.router.navigate([`/web-design/details/${id}`]);
    }

}
