import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PrismicService } from '../../services/prismic.service';
import { SafeHtml } from '@angular/platform-browser';
import { ProjectUtils } from '../../app.utils';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    private _title: string;
    private _description: string;
    private _slices: {
        text: SafeHtml;
    }[];

    constructor(
        private prismicService: PrismicService
    ) {
    }

    ngOnInit() {
        this.getSingleDocument();
    }

    getSingleDocument(): void {
        from(this.prismicService.getSingle('homepage'))
            .subscribe((document) => {
                this._title = ProjectUtils.childObjectBySelector(document['value'], 'data/title/0/text', null);
                this._description = ProjectUtils.childObjectBySelector(document['value'], 'data/description/0/text', null);
                this._slices = this.generateSlices(ProjectUtils.childObjectBySelector(document['value'], 'data/body', []));
            });
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get slices(): { text: SafeHtml }[] {
        return this._slices;
    }

    private generateSlices(data) {
        return data.map((slice) => {
            return {
                text: this.prismicService.toHtml(slice.primary.text)
            };
        });
    }
}
