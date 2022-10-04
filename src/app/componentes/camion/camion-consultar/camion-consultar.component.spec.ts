import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamionConsultarComponent } from './camion-consultar.component';

describe('CamionConsultarComponent', () => {
  let component: CamionConsultarComponent;
  let fixture: ComponentFixture<CamionConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamionConsultarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamionConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
