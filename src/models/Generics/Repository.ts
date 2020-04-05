import * as fs from "fs";
import { IList, List } from "./../Generics/List";

export interface IRepository<T> {
  add(model: T): T;
  delete(id: number): boolean;
  get(): T[];
  getSingle(id: number): T;
  update(id: number, model: T);
}

export class Repository<T> implements IRepository<T> {
  list: IList<T>;
  constructor(list: IList<T>) {
    this.list = list;
  }
  add(model: T): T {
    return this.list.add(model);
  }
  delete(id: number): boolean {
    return this.list.delete(id);
  }
  get(): T[] {
    return this.list.get();
  }
  getSingle(id: number): T {
    return this.list.getSingle(id);
  }
  update(id: number, model: T) {
    return this.list.update(id, model);
  }
}
