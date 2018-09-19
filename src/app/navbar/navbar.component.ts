import {Component, OnInit} from '@angular/core';
import {faMoneyBillAlt} from '@fortawesome/free-regular-svg-icons';
import {from} from 'rxjs';
import {PrismicService} from '../prismic.service';
import PrismicDOM from 'prismic-dom';
import {CONFIG} from '../../prismic-configuration';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    faMoneyBillAlt = faMoneyBillAlt;
    PrismicDOM = PrismicDOM;
    Config = CONFIG;
    nav = Object;

    constructor(private prismicService: PrismicService) {

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
}
