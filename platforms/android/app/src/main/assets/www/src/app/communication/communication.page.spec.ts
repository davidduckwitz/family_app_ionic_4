import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationPage } from './communication.page';

describe('CommunicationPage', () => {
  let component: CommunicationPage;
  let fixture: ComponentFixture<CommunicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
