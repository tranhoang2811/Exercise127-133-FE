import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise128Component } from './exercise128.component';

describe('Exercise128Component', () => {
  let component: Exercise128Component;
  let fixture: ComponentFixture<Exercise128Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise128Component]
    });
    fixture = TestBed.createComponent(Exercise128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
