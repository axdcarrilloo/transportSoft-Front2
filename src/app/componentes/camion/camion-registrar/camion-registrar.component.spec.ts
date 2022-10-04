import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamionRegistrarComponent } from './camion-registrar.component';

describe('CamionRegistrarComponent', () => {
  let component: CamionRegistrarComponent;
  let fixture: ComponentFixture<CamionRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamionRegistrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamionRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
