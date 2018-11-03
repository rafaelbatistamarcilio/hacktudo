import { Injectable } from '@angular/core';
import { Despesa } from './despesa.entity';
import { DespesasRepository } from './despesas.repository';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  public despesas: Despesa[];

  constructor( private despesasRepository: DespesasRepository) {
    this.despesas = [];
    this.updateStore();
  }

  async updateStore() {
    this.despesas = await this.getAll();
  }

  getStore() {
    return this.despesas;
  }

  async findById(id) {
    try {
      return await this.despesasRepository.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      return await this.despesasRepository.getAll();
    } catch (error) {
      throw error;
    }
  }

  async add(data) {
    try {
      const inserts = await this.despesasRepository.add(data);
      await this.updateStore();
      return inserts;
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      const updates = await this.despesasRepository.update(id, data);
      await this.updateStore();
      return updates;
    } catch (error) {
      throw error;
    }
  }

  async remove(id) {
    try {
      await this.despesasRepository.remove(id);
      this.updateStore();
      return true;
    } catch (error) {
      throw error;
    }
  }
}
