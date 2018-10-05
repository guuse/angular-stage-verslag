import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetentieComponent } from './competentie.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

describe('CompetentieComponent', () => {
  let component: CompetentieComponent;
  let fixture: ComponentFixture<CompetentieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetentieComponent ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            NgbModule,
            FontAwesomeModule,
        ]
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
