import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetentiesComponent } from './competenties.component';

describe('CompetentiesComponent', () => {
  let component: CompetentiesComponent;
  let fixture: ComponentFixture<CompetentiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetentiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetentiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
