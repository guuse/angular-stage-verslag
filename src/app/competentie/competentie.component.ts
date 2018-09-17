import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Competentie} from '../competentie';
import {CompetentieService} from '../competentie.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-competentie',
    templateUrl: './competentie.component.html',
    styleUrls: ['./competentie.component.css']
})

export class CompetentieComponent implements OnInit {
    competentie: Competentie;

    constructor(private route: ActivatedRoute,
                private competentieService: CompetentieService,
                private location: Location
    ) {
    }

    getCompetentie(): void {
        this.route.params.subscribe(params => {
            let latestID = +params['id'];
            this.competentieService.getCompetentie(latestID)
                .subscribe(competentie => this.competentie = competentie);
        });
    }

    ngOnInit() {
        this.getCompetentie();
    }

}
