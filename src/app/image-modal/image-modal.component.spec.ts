import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageModalComponent } from './image-modal.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

describe('ImageModalComponent', () => {
  let component: ImageModalComponent;
  let fixture: ComponentFixture<ImageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageModalComponent ],
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
    fixture = TestBed.createComponent(ImageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
