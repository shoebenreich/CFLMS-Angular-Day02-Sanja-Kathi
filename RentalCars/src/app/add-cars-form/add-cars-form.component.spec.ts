import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarsFormComponent } from './add-cars-form.component';

describe('AddCarsFormComponent', () => {
  let component: AddCarsFormComponent;
  let fixture: ComponentFixture<AddCarsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
