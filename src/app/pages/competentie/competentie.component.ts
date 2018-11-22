import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { PrismicService } from '../../services/prismic.service';
import PrismicDOM from 'prismic-dom';
import { Location } from '@angular/common';

@Component({
    selector: 'app-competentie',
    templateUrl: './competentie.component.html',
    styleUrls: ['./competentie.component.scss'],
})

export class CompetentieComponent implements OnInit {
    content = Object;
    PrismicDOM = PrismicDOM;

    constructor(
        private route: ActivatedRoute,
        private prismicService: PrismicService,
        private _location: Location,
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                const uid = this.route.snapshot.paramMap.get('uid');
                this.getDocument(uid);
            }
        );
    }

    getDocument(uid: string): void {
        from(this.prismicService.getDocument(uid))
            .subscribe(content => this.content = content['value']);
    }

    public replace(content: string) {
        return content.replace(/-/g, ' ').replace(/1/g, '').replace(/E/g, 'e');
    }

    toTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}
