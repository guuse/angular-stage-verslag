import {Component, Input} from '@angular/core';
import PrismicDOM from 'prismic-dom';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.css']
})
export class SubTitleComponent  {
    @Input() slice: Object;
    PrismicDOM = PrismicDOM;
}
