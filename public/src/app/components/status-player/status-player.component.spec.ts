import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPlayerComponent } from './status-player.component';

describe('StatusPlayerComponent', () => {
  let component: StatusPlayerComponent;
  let fixture: ComponentFixture<StatusPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
