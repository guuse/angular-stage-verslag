import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from '../../pages/home/home.component';
import { StageComponent } from '../../pages/stage/stage.component';
import { DocumentenComponent } from '../../pages/documenten/documenten.component';
import { CompetentieComponent } from '../../pages/competentie/competentie.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NavbarComponent,
                HomeComponent,
                StageComponent,
                DocumentenComponent,
                CompetentieComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                NgbModule,
                FontAwesomeModule,
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
