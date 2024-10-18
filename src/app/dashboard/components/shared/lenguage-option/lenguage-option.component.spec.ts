import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguageOptionComponent } from './lenguage-option.component';

describe('LenguageOptionComponent', () => {
  let component: LenguageOptionComponent;
  let fixture: ComponentFixture<LenguageOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LenguageOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenguageOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
