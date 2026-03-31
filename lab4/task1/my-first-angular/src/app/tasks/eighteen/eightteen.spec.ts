import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eightteen } from './eightteen';

describe('Eightteen', () => {
  let component: Eightteen;
  let fixture: ComponentFixture<Eightteen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eightteen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eightteen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
