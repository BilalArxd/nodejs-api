export interface IUser {
  id: number;
  name: string;
  email: string;
}
export interface IUserCollection {
  users: Array<IUser>;
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

export class UserCollection implements IUserCollection {
  users: IUser[];
  constructor(users: Array<IUser>) {
    this.users = users;
  }
}
