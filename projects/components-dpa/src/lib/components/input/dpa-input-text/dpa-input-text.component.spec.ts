import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpaInputTextComponent } from './dpa-input-text.component';

describe('DpaInputTextComponent', () => {
  let component: DpaInputTextComponent;
  let fixture: ComponentFixture<DpaInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpaInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DpaInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
