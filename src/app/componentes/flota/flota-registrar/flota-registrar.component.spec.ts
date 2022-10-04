import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotaRegistrarComponent } from './flota-registrar.component';

describe('FlotaRegistrarComponent', () => {
  let component: FlotaRegistrarComponent;
  let fixture: ComponentFixture<FlotaRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlotaRegistrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlotaRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
