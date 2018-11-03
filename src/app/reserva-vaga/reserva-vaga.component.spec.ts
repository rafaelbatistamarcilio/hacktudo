import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVagaComponent } from './reserva-vaga.component';

describe('ReservaVagaComponent', () => {
  let component: ReservaVagaComponent;
  let fixture: ComponentFixture<ReservaVagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaVagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
