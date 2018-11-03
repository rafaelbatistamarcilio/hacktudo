import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheVagaComponent } from './detalhe-vaga.component';

describe('DetalheVagaComponent', () => {
  let component: DetalheVagaComponent;
  let fixture: ComponentFixture<DetalheVagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheVagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
