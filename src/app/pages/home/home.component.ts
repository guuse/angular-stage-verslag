import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PrismicService } from '../../services/prismic.service';
import PrismicDOM from 'prismic-dom';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    home = Object;
    PrismicDOM = PrismicDOM;

    constructor(private prismicService: PrismicService) {
    }

    ngOnInit() {
        this.getHomepageDocument();
    }

    getHomepageDocument(): void {
        from(this.prismicService.getHomepageDocument())
            .subscribe(home => this.home = home['value']);
    }
}
