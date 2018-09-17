import {Component, Input} from '@angular/core';
import PrismicDOM from 'prismic-dom';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css']
})

export class ImageComponent {
    @Input() slice: Object;
    PrismicDOM = PrismicDOM;
}
