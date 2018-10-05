import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageComponent } from './stage.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

describe('StageComponent', () => {
  let component: StageComponent;
  let fixture: ComponentFixture<StageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageComponent ],
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
    fixture = TestBed.createComponent(StageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
