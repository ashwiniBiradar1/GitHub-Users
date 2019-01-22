import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GittComponent } from './gitt.component';

describe('GittComponent', () => {
  let component: GittComponent;
  let fixture: ComponentFixture<GittComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GittComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
