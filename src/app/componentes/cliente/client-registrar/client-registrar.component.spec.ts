import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegistrarComponent } from './client-registrar.component';

describe('ClientRegistrarComponent', () => {
  let component: ClientRegistrarComponent;
  let fixture: ComponentFixture<ClientRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRegistrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
