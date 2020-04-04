import usersJson from "../json/users.json";
import { UserCollection, IUserCollection } from "./../models/IUser";

let users = usersJson;
let getAll = function (): IUserCollection {
  let userCollection: IUserCollection = new UserCollection(usersJson);
  return userCollection;
};

let getUserById = function (id: any) {
  const filteredUsers = users.filter((u: any) => {
    if (u.id === id) return true;
    return false;
  });
  return filteredUsers;
};

let createUser = function (user: any) {
  user.id = users.length + 1;
  users.push(user);
  return user;
};

let updateUser = function (id: any, user: any) {
  let filteredUsers = users.map((u: any) => {
    if (u.id === id) {
      if (user.name !== undefined) {
        u.name = user.name;
      }
      if (user.email !== undefined) {
        u.email = user.email;
      }
    }
    return u;
  });

  filteredUsers = filteredUsers.filter((u: any) => {
    if (u.id === id) return true;
    return false;
  });
  return filteredUsers;
};

let removeUser = function (id: any) {
  try {
    users = users.filter((u: any) => {
      if (u.id !== id) return true;
      return false;
    });
    return true;
  } catch (error) {
    console.log(`ERR: ${error}`);
    return false;
  }
};

export default {
  create: createUser,
  get: getAll,
  getById: getUserById,
  update: updateUser,
  remove: removeUser,
};
