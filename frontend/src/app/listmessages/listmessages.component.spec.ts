import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmessagesComponent } from './listmessages.component';

describe('ListmessagesComponent', () => {
  let component: ListmessagesComponent;
  let fixture: ComponentFixture<ListmessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListmessagesComponent]
    });
    fixture = TestBed.createComponent(ListmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
