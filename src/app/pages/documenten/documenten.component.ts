import { Component, OnInit } from '@angular/core';
import { PrismicService } from '../../services/prismic.service';
import { from } from 'rxjs';
import PrismicDOM from 'prismic-dom';

@Component({
    selector: 'app-documenten',
    templateUrl: './documenten.component.html',
    styleUrls: ['./documenten.component.scss']
})
export class DocumentenComponent implements OnInit {
    documenten = [];
    PrismicDOM = PrismicDOM;

    constructor(private prismicService: PrismicService) {
    }

    ngOnInit() {
        this.getDocumentenDocument();
    }

    getDocumentenDocument(): void {
        from(this.prismicService.getDocumentenDocument())
            .subscribe(documenten => this.documenten = documenten['value']);
    }

}
