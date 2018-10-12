import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { StageComponent } from './stage/stage.component';
import { DocumentenComponent } from './documenten/documenten.component';
import { CompetentieComponent } from './competentie/competentie.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

qdescribe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
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
                CUSTOM_ELEMENTS_SCHEMA
            ],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
