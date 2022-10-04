import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotaConsultarComponent } from './flota-consultar.component';

describe('FlotaConsultarComponent', () => {
  let component: FlotaConsultarComponent;
  let fixture: ComponentFixture<FlotaConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlotaConsultarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlotaConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
