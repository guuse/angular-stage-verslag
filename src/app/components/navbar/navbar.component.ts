import { Component, DoCheck, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements DoCheck {
    public comp: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
    ) {
    }

    ngDoCheck() {
        this.comp = false;
        this.checkRoute(this.router.url);
    }

    public uncheck() {
        document.getElementById('openSidebarMenu')['checked'] = false;
    }

    private checkRoute(url) {
        if (url.indexOf('competenties/') >= 0) {
            this.comp = true;
        }
        return this.comp;
    }

    public goBack() {
        this.location.back();
    }

    public toTop() {
        document.body.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        }) ;
    }
}
