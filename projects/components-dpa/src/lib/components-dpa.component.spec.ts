import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDpaComponent } from './components-dpa.component';

describe('ComponentsDpaComponent', () => {
  let component: ComponentsDpaComponent;
  let fixture: ComponentFixture<ComponentsDpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsDpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsDpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
