import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise132Component } from './exercise132.component';

describe('Exercise132Component', () => {
  let component: Exercise132Component;
  let fixture: ComponentFixture<Exercise132Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise132Component]
    });
    fixture = TestBed.createComponent(Exercise132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
