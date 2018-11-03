import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Despesa } from './despesa.entity';
import Dexie from 'dexie';

@Injectable({
    providedIn: 'root'
})
export class DespesasRepository extends Dexie {

    private despesas: Dexie.Table<Despesa, number>;
    private readonly TABLE_NAME: string = 'despesas';

    constructor() {
        super(environment.DB.NAME);
        this.setupSchema();
        this.despesas = this.table( this.TABLE_NAME );
    }

    public setupSchema() {
        this.version(environment.DB.VERSION).stores({
            despesas: '++id, tipo, data, valor, descricao',
        });
    }

    async findById(id) {
        return await this.despesas.get(id);
    }

    async getAll() {
        return await this.despesas.toArray();
    }

    async add(data) {
        return await this.despesas.add(data);
    }

    async update(id, data) {
        return await this.despesas.update(id, data);
    }

    async remove(id) {
        return await this.despesas.delete(id);
    }
}
