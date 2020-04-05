import { IUser } from "../models/User";
import { IService, Service } from "./../models/Generics/Service";
import { IUserRepository } from "./../data/userRepository";

export interface IUserService extends IService<IUser> {}
export class UserService extends Service<IUser> implements IUserService {
  constructor(userRepo: IUserRepository) {
    super(userRepo);
  }
}
