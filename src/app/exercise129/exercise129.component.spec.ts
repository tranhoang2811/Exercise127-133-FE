import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise129Component } from './exercise129.component';

describe('Exercise129Component', () => {
  let component: Exercise129Component;
  let fixture: ComponentFixture<Exercise129Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise129Component]
    });
    fixture = TestBed.createComponent(Exercise129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
