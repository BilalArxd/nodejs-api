import { IRepository, Repository } from "./../models/Generics/Repository";
import { IUser, IUserList } from "./../models/User";

export interface IUserRepository extends IRepository<IUser> {}
export class UserRepository extends Repository<IUser>
  implements IUserRepository {
  constructor(userList: IUserList) {
    super(userList);
  }
}
