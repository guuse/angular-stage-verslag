import { Component, Input } from '@angular/core';
import { ProjectUtils } from '../../app.utils';
import { SafeHtml } from '@angular/platform-browser';
import { PrismicService } from '../../services/prismic.service';

@Component({
    selector: 'app-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.css']
})

export class TextComponent {
    private _content: SafeHtml;

    constructor(
        private prismicService: PrismicService
    ) {
    }

    @Input()
    set slice(slice: Object) {
        this._content = this.prismicService.toHtml(ProjectUtils.childObjectBySelector(slice['primary'], 'text', null));
    }

    get content(): SafeHtml {
        return this._content;
    }
}
