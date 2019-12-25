import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInformationComponent } from './events-information.component';

describe('EventsInformationComponent', () => {
  let component: EventsInformationComponent;
  let fixture: ComponentFixture<EventsInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
