import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktimerComponent } from './worktimer.component';

describe('WorktimerComponent', () => {
  let component: WorktimerComponent;
  let fixture: ComponentFixture<WorktimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorktimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
