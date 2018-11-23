import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PrismicService } from '../../services/prismic.service';
import PrismicDOM from 'prismic-dom';
import { ProjectUtils } from '../../app.utils';
import { SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-competenties',
    templateUrl: './competenties.component.html',
    styleUrls: ['./competenties.component.scss'],
})
export class CompetentiesComponent implements OnInit {
    private _loaded: boolean;
    private _title: string;
    private _slices: {
        text: string;
        items: {
            item: string;
        };
    }[];

    constructor(
        private prismicService: PrismicService
    ) {
    }

    ngOnInit() {
        this._loaded = false;
        this.getSingle();
    }

    getSingle(): void {
        from(this.prismicService.getSingle('navigation'))
            .subscribe((document) => {
                this._title = ProjectUtils.childObjectBySelector(document['value'], 'data/title/0/text', null);
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

    get slices(): { text: string, items: { item: string } }[] {
        return this._slices;
    }

    private generateSlices(data) {
        return data.map((slice) => {
            return {
                title: ProjectUtils.childObjectBySelector(slice['primary'], 'comp_title/0/text', []),
                items: slice.items.map((item) => {
                    return {
                        item: ProjectUtils.childObjectBySelector(item, 'comp_item/0/text', [])
                    };
                }),
            };
        });
    }

    public replace(content: string) {
        return content.replace(/-/g, ' ').replace(/1/g, '').replace(/E/g, 'e');
    }

}
