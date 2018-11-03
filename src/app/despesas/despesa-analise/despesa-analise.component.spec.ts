import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaAnaliseComponent } from './despesa-analise.component';

describe('DespesaAnaliseComponent', () => {
  let component: DespesaAnaliseComponent;
  let fixture: ComponentFixture<DespesaAnaliseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesaAnaliseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaAnaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
