import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentenLijstComponent } from './documenten-lijst.component';

describe('DocumentenLijstComponent', () => {
  let component: DocumentenLijstComponent;
  let fixture: ComponentFixture<DocumentenLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentenLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentenLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
