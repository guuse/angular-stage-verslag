import { Component, Input } from '@angular/core';
import { ProjectUtils } from '../../app.utils';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})

export class ImageComponent {
    public clicked = false;
    private _src: string;
    private _description: string;

    @Input()
    set slice(slice: Object) {
        this._description = ProjectUtils.childObjectBySelector(slice['primary'], 'description/0/text', null);
        this._src = ProjectUtils.childObjectBySelector(slice['primary'], 'image/url', null);
    }

    get description(): string {
        return this._description;
    }

    get src(): string {
        return this._src;
    }

    public imageClicked() {
        this.clicked = true;
    }

    public childCloseEventHandler(): void {
        this.clicked = false;
    }
}
