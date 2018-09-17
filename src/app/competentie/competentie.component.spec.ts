import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetentieComponent } from './competentie.component';

describe('CompetentieComponent', () => {
  let component: CompetentieComponent;
  let fixture: ComponentFixture<CompetentieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetentieComponent ]
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
