import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaVagasComponent } from './auditoria-vagas.component';

describe('AuditoriaVagasComponent', () => {
  let component: AuditoriaVagasComponent;
  let fixture: ComponentFixture<AuditoriaVagasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriaVagasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
