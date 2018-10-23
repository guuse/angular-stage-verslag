import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PrismicService } from '../../services/prismic.service';
import PrismicDOM from 'prismic-dom';
import { routerTransition } from '../../routing/animations';
import {Location} from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    PrismicDOM = PrismicDOM;
    nav = Object;

    constructor(private prismicService: PrismicService,
                private _location: Location) {

    }

    getNavbarDocument(): void {
        from(this.prismicService.getNavbarDocument())
            .subscribe(nav => this.nav = nav['value']);
    }

    public replace(content: string) {
        return content.replace(/-/g, ' ').replace(/1/g, '').replace(/E/g, 'e');
    }

    ngOnInit() {
        this.getNavbarDocument();
    }

    goBack() {
        this._location.back();
    }
}
