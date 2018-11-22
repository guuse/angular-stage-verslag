import {Component, Input} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { PrismicService } from '../../services/prismic.service';
import { ProjectUtils } from '../../app.utils';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.css']
})
export class SubTitleComponent  {
    private _content: SafeHtml;

    constructor(
        private prismicService: PrismicService
    ) {
    }

    @Input()
    set slice(slice: Object) {
        this._content = this.prismicService.toHtml(ProjectUtils.childObjectBySelector(slice['primary'], 'heading', null));
    }

    get content(): SafeHtml {
        return this._content;
    }
}
