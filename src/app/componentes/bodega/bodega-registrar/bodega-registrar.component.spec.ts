import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegaRegistrarComponent } from './bodega-registrar.component';

describe('BodegaRegistrarComponent', () => {
  let component: BodegaRegistrarComponent;
  let fixture: ComponentFixture<BodegaRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodegaRegistrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodegaRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
