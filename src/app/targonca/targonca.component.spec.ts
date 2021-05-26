import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargoncaComponent } from './targonca.component';

describe('TargoncaComponent', () => {
  let component: TargoncaComponent;
  let fixture: ComponentFixture<TargoncaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargoncaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargoncaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
