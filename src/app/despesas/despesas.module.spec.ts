import { DespesasModule } from './despesas.module';

describe('DespesasModule', () => {
  let despesasModule: DespesasModule;

  beforeEach(() => {
    despesasModule = new DespesasModule();
  });

  it('should create an instance', () => {
    expect(despesasModule).toBeTruthy();
  });
});
