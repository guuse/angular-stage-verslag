import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PrismicService } from '../../services/prismic.service';
import { ProjectUtils } from '../../app.utils';

@Component({
    selector: 'app-stage',
    templateUrl: './stage.component.html',
    styleUrls: ['./stage.component.scss']
})

export class StageComponent implements OnInit {
    private _loaded: boolean;
    private _title: string;
    private _description: string;
    private _slices: {
        slice: Object;
        type: string
    }[];

    constructor(
        private prismicService: PrismicService
    ) {
    }

    ngOnInit() {
        this._loaded = false;
        this.getDocument();
    }

    getDocument(): void {
        from(this.prismicService.getDocument('stage'))
            .subscribe((document) => {
                this._title = ProjectUtils.childObjectBySelector(document['value'], 'data/title/0/text', null);
                this._description = ProjectUtils.childObjectBySelector(document['value'], 'data/description/0/text', null);
                this._slices = this.generateSlices(ProjectUtils.childObjectBySelector(document['value'], 'data/body', []));
                this._loaded = true;
            });
    }

    get loaded(): boolean {
        return this._loaded;
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get slices(): { slice: Object, type: string }[] {
        return this._slices;
    }

    private generateSlices(data) {
        return data.map((slice) => {
            return {
                slice: slice,
                type: slice.slice_type
            };
        });
    }
}
