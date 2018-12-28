import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { StageComponent } from './pages/stage/stage.component';
import { DocumentenComponent } from './pages/documenten/documenten.component';
import { CompetentieComponent } from './pages/competentie/competentie.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
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
