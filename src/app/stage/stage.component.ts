import {Component, OnInit} from '@angular/core';
import {PrismicService} from '../prismic.service';
import {from} from 'rxjs';
import PrismicDOM from 'prismic-dom';

@Component({
    selector: 'app-stage',
    templateUrl: './stage.component.html',
    styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
    stage = Object;
    PrismicDOM = PrismicDOM;

    constructor(private prismicService: PrismicService) {
    }

    ngOnInit() {
        this.getStageDocument();
    }

    getStageDocument(): void {
        from(this.prismicService.getStageDocument())
            .subscribe(stage => this.stage = stage['value']);
    }
}
