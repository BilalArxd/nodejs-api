var users = require("../../data/users.json");

let get = function() {
  return users;
};

let getById = function(id) {
  const filteredUsers = users.filter(u => {
    if (u.id === id) return true;
    return false;
  });
  return filteredUsers;
};

let create = function(user) {
  user.id = users.length + 1;
  users.push(user);
  return user;
};

let update = function(id, user) {
  let filteredUsers = users.map(u => {
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

  filteredUsers = filteredUsers.filter(u => {
    if (u.id === id) return true;
    return false;
  });
  return filteredUsers;
};

let remove = function(id) {
  try {
    users = users.filter(u => {
      if (u.id !== id) return true;
      return false;
    });
    return true;
  } catch (error) {
    console.log(`ERR: ${error}`);
    return false;
  }
};

module.exports = {
  create: create,
  get: get,
  getById: getById,
  update: update,
  remove: remove
};
