import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PrismicService } from '../../services/prismic.service';
import PrismicDOM from 'prismic-dom';
import { routerTransition } from '../../routing/animations';

@Component({
  selector: 'app-competenties',
  templateUrl: './competenties.component.html',
  styleUrls: ['./competenties.component.scss']
})
export class CompetentiesComponent implements OnInit {
    PrismicDOM = PrismicDOM;
    nav = Object;

    constructor(private prismicService: PrismicService) {

    }

    getNavbarDocument(): void {
        from(this.prismicService.getNavbarDocument())
            .subscribe(nav => this.nav = nav['value']);
    }

    public replace(content: string) {
        return content.replace(/-/g, ' ').replace(/1/g, '').replace(/E/g, 'e');
    }

    ngOnInit() {
        this.getNavbarDocument();
    }
}
