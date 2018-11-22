import {Component, Input} from '@angular/core';
import { ProjectUtils } from '../../app.utils';

@Component({
    selector: 'app-documenten-lijst',
    templateUrl: './documenten-lijst.component.html',
    styleUrls: ['./documenten-lijst.component.css']
})
export class DocumentenLijstComponent {
    private _content: string;
    private _title: string;

    @Input()
    set slice(slice: Object) {
        this._title = ProjectUtils.childObjectBySelector(slice['primary'], 'docu_title/0/text', null);
        this._content = ProjectUtils.childObjectBySelector(slice['primary'], 'documenten/url', null);
    }

    get title(): string {
        return this._title;
    }

    get content(): string {
        return this._content;
    }
}
