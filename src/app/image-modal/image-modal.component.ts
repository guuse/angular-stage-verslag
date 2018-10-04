import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import PrismicDOM from 'prismic-dom';
import {ClickOutsideModule} from 'ng-click-outside';

@Component({
    selector: 'app-image-modal',
    templateUrl: './image-modal.component.html',
    styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent  {
    @Input() slice: Object;
    PrismicDOM = PrismicDOM;
    @Output() close = new EventEmitter();

    public hideModal() {
        this.close.emit();
    }
}
