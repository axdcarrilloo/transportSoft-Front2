import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertoRegistrarComponent } from './puerto-registrar.component';

describe('PuertoRegistrarComponent', () => {
  let component: PuertoRegistrarComponent;
  let fixture: ComponentFixture<PuertoRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuertoRegistrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuertoRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
