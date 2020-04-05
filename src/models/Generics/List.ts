import * as fs from "fs";

export interface IList<T> {
  add(model: T): T;
  delete(id: number): boolean;
  get(): T[];
  getSingle(id: number): T;
  update(id: number, model: T);
  load(fileName: string): void;
  save(): void;
}

export class List<T> implements IList<T> {
  collection: T[];
  private fileName: string;
  constructor(fileName: string, collection?: Array<T>) {
    this.fileName = `./src/json/${fileName}.json`;
    if (collection !== null) {
      this.collection = collection;
    } else {
      this.load(this.fileName);
    }
  }

  get(): Array<T> {
    return this.collection;
  }
  getSingle(id: number): T {
    let model = this.collection.filter((u: any) => {
      if (u.id === id) return true;
      return false;
    })[0];
    return model;
  }
  add(model: any): T {
    model.id = this.getNextId();
    this.collection.push(model);
    return model;
  }
  delete(id: number): boolean {
    try {
      this.collection = this.collection.filter((m: any) => {
        if (m.id !== id) {
          return true;
        } else {
          return false;
        }
      });
      return true;
    } catch (error) {
      console.log(`ERR: ${error}`);
      return false;
    }
  }
  update(id: number, model: T) {
    this.collection = this.collection.map((u: any) => {
      if (u.id === id) {
        u = model;
      }
      return u;
    });
    let updatedmodel = this.collection.filter((u: any) => {
      if (u.id === id) return true;
      return false;
    })[0];
    return updatedmodel;
  }
  private getNextId(): number {
    var id = this.collection.length + 1;
    return id;
  }
  load(fileName: string): void {
    this.collection = JSON.parse(
      fs.readFileSync(this.fileName, "utf8").toString()
    );
  }
  save(): void {
    fs.writeFile(this.fileName, JSON.stringify(this.collection), function (
      error
    ) {
      if (error) {
        console.error(error);
        return;
      }
      console.log("File has been created");
    });
  }
}
