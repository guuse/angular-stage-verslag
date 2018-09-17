import {Component, OnInit} from '@angular/core';
import {faMoneyBillAlt} from '@fortawesome/free-regular-svg-icons';
import {Competentie} from '../competentie';
import {CompetentieService} from '../competentie.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    faMoneyBillAlt = faMoneyBillAlt;

    competenties: Competentie[];

    constructor(private competentieService: CompetentieService) {
    }

    getCompetenties(): void {
        this.competentieService.getCompetenties()
            .subscribe(competenties => this.competenties = competenties);
    }

    ngOnInit() {
        this.getCompetenties();
    }

}
