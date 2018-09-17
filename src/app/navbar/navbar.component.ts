import {Component, OnInit} from '@angular/core';
import {faMoneyBillAlt} from '@fortawesome/free-regular-svg-icons';
import {Competentie} from '../competentie';
import {CompetentieService} from '../competentie.service';
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


    // competenties: Competentie[];
    //
    // constructor(private competentieService: CompetentieService) {
    // }
    //
    // getCompetenties(): void {
    //     this.competentieService.getCompetenties()
    //         .subscribe(competenties => this.competenties = competenties);
    // }
    //
    // ngOnInit() {
    //     this.getCompetenties();
    // }
    PrismicDOM = PrismicDOM;
    Config = CONFIG;
    nav = Object;

    constructor(private prismicService: PrismicService) {

    }

    getNavbarDocument(): void {
        from(this.prismicService.getNavbarDocument())
            .subscribe(nav => this.nav = nav['value']);
    }

    ngOnInit() {
        this.getNavbarDocument();
    }


}
