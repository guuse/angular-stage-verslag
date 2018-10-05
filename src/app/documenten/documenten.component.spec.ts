import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentenComponent } from './documenten.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

describe('DocumentenComponent', () => {
  let component: DocumentenComponent;
  let fixture: ComponentFixture<DocumentenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentenComponent ],
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
    fixture = TestBed.createComponent(DocumentenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
