import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {from} from 'rxjs';
import {PrismicService} from '../prismic.service';
import PrismicDOM from 'prismic-dom';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
    selector: 'app-competentie',
    templateUrl: './competentie.component.html',
    styleUrls: ['./competentie.component.css'],
    animations: [
        trigger('openClose', [
            state('open', style({opacity: 1,})),
            state('closed', style({opacity: 0.5,})),
            transition('open => closed', [animate('1s')]),
            transition('closed => open', [animate('0.5s')]),
        ]),
    ]
})

export class CompetentieComponent implements OnInit {
    content = Object;
    PrismicDOM = PrismicDOM;

    constructor(
        private route: ActivatedRoute,
        private prismicService: PrismicService
    ) {
    }

    isOpen = true;

    toggle() {
        this.isOpen = !this.isOpen;
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
