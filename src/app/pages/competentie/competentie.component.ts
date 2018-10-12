import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { PrismicService } from '../../services/prismic.service';
import PrismicDOM from 'prismic-dom';

@Component({
    selector: 'app-competentie',
    templateUrl: './competentie.component.html',
    styleUrls: ['./competentie.component.css'],
})

export class CompetentieComponent implements OnInit {
    content = Object;
    PrismicDOM = PrismicDOM;

    constructor(
        private route: ActivatedRoute,
        private prismicService: PrismicService
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                const uid = this.route.snapshot.paramMap.get('uid');
                this.getPageDocument(uid);
            }
        );
    }

    getPageDocument(uid: string): void {
        from(this.prismicService.getPageDocument(uid))
            .subscribe(content => this.content = content['value']);
    }
}
