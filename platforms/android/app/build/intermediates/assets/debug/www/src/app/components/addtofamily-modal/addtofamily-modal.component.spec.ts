import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtofamilyModalComponent } from './addtofamily-modal.component';

describe('AddtofamilyModalComponent', () => {
  let component: AddtofamilyModalComponent;
  let fixture: ComponentFixture<AddtofamilyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtofamilyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtofamilyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
