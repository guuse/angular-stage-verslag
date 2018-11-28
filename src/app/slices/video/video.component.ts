import { Component, Input } from '@angular/core';
import { ProjectUtils } from '../../app.utils';
import { PrismicService } from '../../services/prismic.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent {
    private _url: SafeHtml;

    constructor(
        private prismicService: PrismicService,
    ) {
    }

    @Input()
    set slice(slice: Object) {
        this._url = this.prismicService.toHtmlVideo(ProjectUtils.childObjectBySelector(slice['primary'], 'embed/html', null));
    }

    get url(): SafeHtml {
        return this._url;
    }
}
