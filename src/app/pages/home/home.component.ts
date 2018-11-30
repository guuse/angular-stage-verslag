import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PrismicService } from '../../services/prismic.service';
import { SafeHtml } from '@angular/platform-browser';
import { ProjectUtils } from '../../app.utils';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    private _loaded: boolean;
    private _title: string;
    private _description: string;
    private _slices: {
        text: SafeHtml;
        url: string;
    }[];

    constructor(
        private router: Router,
        private prismicService: PrismicService
    ) {
    }

    ngOnInit() {
        this._loaded = false;
        this.getSingleDocument();
    }

    getSingleDocument(): void {
        from(this.prismicService.getSingle('homepage'))
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

    get slices(): { text: SafeHtml, url: string }[] {
        return this._slices;
    }

    private generateSlices(data) {
        return data.map((slice) => {
            return {
                text: this.prismicService.toHtml(ProjectUtils.childObjectBySelector(slice['primary'], 'text', [])),
                url: ProjectUtils.childObjectBySelector(slice['primary'], 'link/0/text', []),
            };
        });
    }

    goToBlock(url) {
        this.router.navigate([url]);
    }
}
