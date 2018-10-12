import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetentieComponent } from './competentie.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from '../home/home.component';
import { StageComponent } from '../stage/stage.component';
import { DocumentenComponent } from '../documenten/documenten.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CompetentieComponent', () => {
    let component: CompetentieComponent;
    let fixture: ComponentFixture<CompetentieComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CompetentieComponent,
                HomeComponent,
                StageComponent,
                DocumentenComponent
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
        fixture = TestBed.createComponent(CompetentieComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
