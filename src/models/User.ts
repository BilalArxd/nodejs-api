import { IList, List } from "./Generics/List";
import * as fs from "fs";

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export class User implements IUser {
  id: number;
  name: string;
  email: string;
  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

export interface IUserList extends IList<IUser> {}

export class UserList extends List<IUser> implements IUserList {
  constructor() {
    super("users", null);
  }
}
