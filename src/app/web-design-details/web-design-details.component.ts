import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApolloService } from './../../models/apollo.service';
import { WebDesign } from "../../interfaces/web-design";

@Component({
    selector: 'app-web-design-details',
    templateUrl: './web-design-details.component.html',
    styleUrls: ['.././details.component.scss']
})
export class WebDesignDetailsComponent implements OnInit {

    public singleWebdesign: WebDesign;

    constructor(
        private route: ActivatedRoute,
        private apollo: ApolloService
    ) {
        this.singleWebdesign = {
            _id : "",
            title: "",
            description: "",
            screenPath: [""],
            profilPictureCreator: "",
            creatorName: "",
            tags: [""],
            colors: [""],
            websiteLink: "",
            createdAt: "",
        };
    }

    ngOnInit() : void
    {
        this.route.params.subscribe((params: Params) => {
            this.apollo.query(`{
              getWebDesign (id : "${params.id}") {
                _id
                title
                description
                screenPath
                profilPictureCreator
                creatorName
                colors
                websiteLink
                createdAt
              }
         }`).subscribe(r => {
                this.singleWebdesign = r.data.getWebDesign;
            });
        });
    }

}
