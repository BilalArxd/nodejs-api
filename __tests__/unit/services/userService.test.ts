import { expect } from "chai";
import * as mocha from "mocha";
import { UserList, User } from "../../../src/models/User";
import { UserRepository } from "../../../src/data/userRepository";
import { UserService } from "../../../src/services/userService";

describe("userService", function () {
  it("get -> should return some users", function () {
    // 1. ARRANGE
    var userService = new UserService(new UserRepository(new UserList()));

    // 2. ACT
    var userCollection = userService.get();

    // 3. ASSERT
    expect(userCollection.length).to.be.greaterThan(0);
  });
  it("getSingle -> should return user with id", function () {
    // 1. ARRANGE
    var userService = new UserService(new UserRepository(new UserList()));
    var id = 1;
    // 2. ACT
    var user = userService.getSingle(id);

    // 3. ASSERT
    expect(user.id).to.be.equal(id);
  });
  it("add -> should add user with given id", function () {
    // 1. ARRANGE
    var userService = new UserService(new UserRepository(new UserList()));
    var id = 5;
    var user = new User(id, "Fifth User", "fifth@yopmail.com");
    // 2. ACT
    var addedUser = userService.add(user);

    // 3. ASSERT
    expect(user).to.be.equal(addedUser);
  });

  it("update -> should update user with given id", function () {
    // 1. ARRANGE
    var userService = new UserService(new UserRepository(new UserList()));
    var id = 4;
    var user = new User(id, "Updated User", "updated@yopmail.com");
    // 2. ACT
    userService.update(id, user);
    var userCollection = userService.get();

    // 3. ASSERT
    expect(user).to.be.equal(userCollection[id - 1]);
  });

  it("delete -> should delete user with given id", function () {
    // 1. ARRANGE
    var userService = new UserService(new UserRepository(new UserList()));
    var id = 4;
    // 2. ACT
    userService.delete(id);
    var userCollection = userService.get();

    // 3. ASSERT
    expect(userCollection.length).to.be.equal(3);
  });
});
