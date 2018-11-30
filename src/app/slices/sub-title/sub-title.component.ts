import {Component, Input} from '@angular/core';
import { ProjectUtils } from '../../app.utils';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.scss']
})
export class SubTitleComponent  {
    private _content: string;

    @Input()
    set slice(slice: Object) {
        this._content = ProjectUtils.childObjectBySelector(slice['primary'], 'heading/0/text', null);
    }

    get content(): string {
        return this._content;
    }
}
