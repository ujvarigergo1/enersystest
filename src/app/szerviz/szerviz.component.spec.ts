import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzervizComponent } from './szerviz.component';

describe('SzervizComponent', () => {
  let component: SzervizComponent;
  let fixture: ComponentFixture<SzervizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzervizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzervizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
