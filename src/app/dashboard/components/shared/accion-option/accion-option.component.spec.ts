import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionOptionComponent } from './accion-option.component';

describe('AccionOptionComponent', () => {
  let component: AccionOptionComponent;
  let fixture: ComponentFixture<AccionOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccionOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
