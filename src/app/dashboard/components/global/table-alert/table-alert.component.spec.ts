import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAlertComponent } from './table-alert.component';

describe('TableAlertComponent', () => {
  let component: TableAlertComponent;
  let fixture: ComponentFixture<TableAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
