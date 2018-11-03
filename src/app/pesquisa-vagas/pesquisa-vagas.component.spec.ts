import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaVagasComponent } from './pesquisa-vagas.component';

describe('PesquisaVagasComponent', () => {
  let component: PesquisaVagasComponent;
  let fixture: ComponentFixture<PesquisaVagasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaVagasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
