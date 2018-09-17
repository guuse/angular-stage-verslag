import {Component, Input} from '@angular/core';
import PrismicDOM from 'prismic-dom';

@Component({
    selector: 'app-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.css']
})

export class TextComponent {
    @Input() slice: Object;
    PrismicDOM = PrismicDOM;
}
