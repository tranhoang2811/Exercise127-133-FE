import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise131Component } from './exercise131.component';

describe('Exercise131Component', () => {
  let component: Exercise131Component;
  let fixture: ComponentFixture<Exercise131Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise131Component]
    });
    fixture = TestBed.createComponent(Exercise131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
