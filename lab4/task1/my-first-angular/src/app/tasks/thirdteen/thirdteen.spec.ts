import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thirdteen } from './thirdteen';

describe('Thirdteen', () => {
  let component: Thirdteen;
  let fixture: ComponentFixture<Thirdteen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thirdteen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thirdteen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
