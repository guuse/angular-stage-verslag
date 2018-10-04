import {Component, Input} from '@angular/core';
import PrismicDOM from 'prismic-dom';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})

export class ImageComponent {
    public clicked = false;

    @Input() slice: Object;
    PrismicDOM = PrismicDOM;

    public imageClicked() {
        this.clicked = true;
    }

    public childCloseEventHandler(): void {
        this.clicked = false; // this will trigger the unload of the child, since you have `*ngIf="clicked"` for the child component
    }
}
