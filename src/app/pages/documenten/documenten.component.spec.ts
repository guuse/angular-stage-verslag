import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentenComponent } from './documenten.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../routing/app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HomeComponent } from '../home/home.component';
import { StageComponent } from '../stage/stage.component';
import { CompetentieComponent } from '../competentie/competentie.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DocumentenComponent', () => {
  let component: DocumentenComponent;
  let fixture: ComponentFixture<DocumentenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          DocumentenComponent,
          HomeComponent,
          StageComponent,
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
