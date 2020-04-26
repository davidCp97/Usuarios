import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTarjetaComponent } from './listar-tarjeta.component';

describe('CrearTarjetaComponent', () => {
  let component: ListarTarjetaComponent;
  let fixture: ComponentFixture<ListarTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
