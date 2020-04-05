import * as fs from "fs";
import { IList, List } from "./../Generics/List";
import { IRepository } from "./Repository";

export interface IService<T> {
  add(model: T): T;
  delete(id: number): boolean;
  get(): T[];
  getSingle(id: number): T;
  update(id: number, model: T);
}

export class Service<T> implements IService<T> {
  repo: IRepository<T>;
  constructor(repo: IRepository<T>) {
    this.repo = repo;
  }
  add(model: T): T {
    return this.repo.add(model);
  }
  delete(id: number): boolean {
    return this.repo.delete(id);
  }
  get(): T[] {
    return this.repo.get();
  }
  getSingle(id: number): T {
    return this.repo.getSingle(id);
  }
  update(id: number, model: T) {
    return this.repo.update(id, model);
  }
}
