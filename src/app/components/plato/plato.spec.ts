import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plato } from './plato';

describe('Plato', () => {
  let component: Plato;
  let fixture: ComponentFixture<Plato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
