import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreoGlobalComponent } from './monitoreo-global.component';

describe('MonitoreoGlobalComponent', () => {
  let component: MonitoreoGlobalComponent;
  let fixture: ComponentFixture<MonitoreoGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoreoGlobalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoreoGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
