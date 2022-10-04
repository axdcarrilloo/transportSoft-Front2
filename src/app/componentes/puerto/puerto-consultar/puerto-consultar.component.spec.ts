import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertoConsultarComponent } from './puerto-consultar.component';

describe('PuertoConsultarComponent', () => {
  let component: PuertoConsultarComponent;
  let fixture: ComponentFixture<PuertoConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuertoConsultarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuertoConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
