import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import PrismicDOM from 'prismic-dom';

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
        setTimeout(() => {
            this.close.emit();
        }, 100);
    }
}
