import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise130Component } from './exercise130.component';

describe('Exercise130Component', () => {
  let component: Exercise130Component;
  let fixture: ComponentFixture<Exercise130Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise130Component]
    });
    fixture = TestBed.createComponent(Exercise130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
