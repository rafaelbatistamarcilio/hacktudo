import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaDetalheComponent } from './despesa-detalhe.component';

describe('DespesaDetalheComponent', () => {
  let component: DespesaDetalheComponent;
  let fixture: ComponentFixture<DespesaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
