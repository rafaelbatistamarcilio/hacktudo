import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaDetalheComponent } from './denuncia-detalhe.component';

describe('DenunciaDetalheComponent', () => {
  let component: DenunciaDetalheComponent;
  let fixture: ComponentFixture<DenunciaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenunciaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
