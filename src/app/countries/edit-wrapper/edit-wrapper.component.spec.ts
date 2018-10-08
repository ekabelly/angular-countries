import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWrapperComponent } from './edit-wrapper.component';

describe('EditWrapperComponent', () => {
  let component: EditWrapperComponent;
  let fixture: ComponentFixture<EditWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
