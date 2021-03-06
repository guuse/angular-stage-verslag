import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { PrismicService } from '../../services/prismic.service';
import { ProjectUtils } from '../../app.utils';
import { SafeHtml } from '@angular/platform-browser';
import { PageScrollConfig } from 'ngx-page-scroll';
import { Location } from '@angular/common';

@Component({
    selector: 'app-competentie',
    templateUrl: './competentie.component.html',
    styleUrls: ['./competentie.component.scss'],
})

export class CompetentieComponent implements OnInit {
    private _loaded: boolean;
    private _id = 'test';
    private _body: any;
    private _title: string;
    private _category: string;
    private _competenties: {
        title: string;
        desc: SafeHtml;
    };
    private _slices: {
        slice: Object;
        type: string
    }[];

    constructor(
        private route: ActivatedRoute,
        private prismicService: PrismicService,
        private location: Location,
    ) {
        PageScrollConfig.defaultScrollOffset = 70;
        PageScrollConfig.defaultDuration = 500;
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this._loaded = false;
                const uid = this.route.snapshot.paramMap.get('uid');
                this.getDocument(uid);
            }
        );
    }

    getDocument(uid: string): void {
        from(this.prismicService.getDocument(uid))
            .subscribe((document) => {
                this._body = ProjectUtils.childObjectBySelector(document['value'], 'data/body/1', null);
                this._title = ProjectUtils.childObjectBySelector(document['value'], 'data/title/0/text', null);
                this._category = ProjectUtils.childObjectBySelector(document['value'], 'data/competentie_cat/0/text', null);
                this._competenties = this.generateCompetenties(ProjectUtils.childObjectBySelector(document['value'], 'data/competenties', []));
                this._slices = this.generateSlices(ProjectUtils.childObjectBySelector(document['value'], 'data/body', []));
                this._loaded = true;
            });
    }

    private generateCompetenties(data) {
        return data.map((competentie) => {
            return {
                title: ProjectUtils.childObjectBySelector(competentie, 'comp_titel/0/text', []),
                desc: this.prismicService.toHtml(ProjectUtils.childObjectBySelector(competentie, 'comp_desc', [])),
            };
        });
    }

    private generateSlices(data) {
        return data.map((slice) => {
            return {
                slice: slice,
                type: slice.slice_type
            };
        });
    }

    get id(): string {
        return this._id;
    }

    get loaded(): boolean {
        return this._loaded;
    }

    get category(): string {
        return this._category;
    }

    get body(): any {
        return this._body;
    }

    get competenties(): { title: string; desc: SafeHtml } {
        return this._competenties;
    }

    get title(): string {
        return this._title;
    }

    get subTitles() {
        return this.slices.map((slice) => {
            if (slice.type === 'sub-title') {
                return ProjectUtils.childObjectBySelector(slice['slice'], 'primary/heading/0/text', null);
            }
            return null;
        });
    }

    get slices(): { slice: Object; type: string }[] {
        return this._slices;
    }

    public goBack() {
        this.location.back();
    }

    public replaceSpace(content: string) {
        return content.replace(/ /g, '-');
    }

    public replace(content: string) {
        return content.replace(/-/g, ' ').replace(/1/g, '').replace(/E/g, 'e');
    }
}
