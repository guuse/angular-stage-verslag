import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComponent } from './image.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HomeComponent } from '../home/home.component';
import { StageComponent } from '../stage/stage.component';
import { DocumentenComponent } from '../documenten/documenten.component';
import { CompetentieComponent } from '../competentie/competentie.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ImageComponent,
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
