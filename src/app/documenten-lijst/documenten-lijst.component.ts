import {Component, Input} from '@angular/core';
import PrismicDOM from 'prismic-dom';

@Component({
  selector: 'app-documenten-lijst',
  templateUrl: './documenten-lijst.component.html',
  styleUrls: ['./documenten-lijst.component.css']
})
export class DocumentenLijstComponent {
    @Input() slice: Object;
    PrismicDOM = PrismicDOM;
}
