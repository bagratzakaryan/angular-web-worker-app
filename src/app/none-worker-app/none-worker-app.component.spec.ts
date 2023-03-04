import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneWorkerAppComponent } from './none-worker-app.component';

describe('NoneWorkerAppComponent', () => {
  let component: NoneWorkerAppComponent;
  let fixture: ComponentFixture<NoneWorkerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoneWorkerAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneWorkerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
