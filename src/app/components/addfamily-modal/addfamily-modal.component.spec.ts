import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfamilyModalPage } from './addfamily-modal.page';

describe('AddfamilyModalPage', () => {
  let component: AddfamilyModalPage;
  let fixture: ComponentFixture<AddfamilyModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfamilyModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfamilyModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
