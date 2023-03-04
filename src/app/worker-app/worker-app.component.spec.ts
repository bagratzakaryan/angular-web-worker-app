import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerAppComponent } from './worker-app.component';

describe('WorkerAppComponent', () => {
  let component: WorkerAppComponent;
  let fixture: ComponentFixture<WorkerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
