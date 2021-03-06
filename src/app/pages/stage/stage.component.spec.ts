import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageComponent } from './stage.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../routing/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from '../home/home.component';
import { DocumentenComponent } from '../documenten/documenten.component';
import { CompetentieComponent } from '../competentie/competentie.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('StageComponent', () => {
    let component: StageComponent;
    let fixture: ComponentFixture<StageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                StageComponent,
                HomeComponent,
                DocumentenComponent,
                CompetentieComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                FontAwesomeModule,
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
