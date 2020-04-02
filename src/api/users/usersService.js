var usersData = require("./usersData");

let get = function() {
  const response = usersData.get();
  return response;
};

let getById = function(id) {
  const response = usersData.getById(id);
  return response;
};

let create = function(user) {
  const response = usersData.create(user);
  return response;
};

let update = function(id, user) {
  const response = usersData.update(id, user);
  return response;
};

let remove = function(id) {
  const response = usersData.remove(id);
  return response;
};

module.exports = {
  create: create,
  get: get,
  getById: getById,
  update: update,
  remove: remove
};
