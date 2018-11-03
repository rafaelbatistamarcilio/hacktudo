import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaCadastroComponent } from './despesa-cadastro.component';

describe('DespesaCadastroComponent', () => {
  let component: DespesaCadastroComponent;
  let fixture: ComponentFixture<DespesaCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesaCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
