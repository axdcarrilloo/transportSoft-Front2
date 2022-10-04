import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegaConsultarComponent } from './bodega-consultar.component';

describe('BodegaConsultarComponent', () => {
  let component: BodegaConsultarComponent;
  let fixture: ComponentFixture<BodegaConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodegaConsultarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodegaConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
