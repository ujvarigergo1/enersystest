import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KezdolapComponent } from './kezdolap.component';

describe('KezdolapComponent', () => {
  let component: KezdolapComponent;
  let fixture: ComponentFixture<KezdolapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KezdolapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KezdolapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
