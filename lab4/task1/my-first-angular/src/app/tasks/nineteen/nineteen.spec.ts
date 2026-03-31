import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nineteen } from './nineteen';

describe('Nineteen', () => {
  let component: Nineteen;
  let fixture: ComponentFixture<Nineteen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nineteen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nineteen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
