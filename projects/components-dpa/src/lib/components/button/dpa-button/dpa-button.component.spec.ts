import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpaButtonComponent } from './dpa-button.component';

describe('DpaButtonComponent', () => {
  let component: DpaButtonComponent;
  let fixture: ComponentFixture<DpaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DpaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
