import userData from "../data/userData";

let get = function() {
  const response = userData.get();
  return response;
};

let getById = function(id: any) {
  const response = userData.getById(id);
  return response;
};

let create = function(user: any) {
  const response = userData.create(user);
  return response;
};

let update = function(id: any, user: any) {
  const response = userData.update(id, user);
  return response;
};

let remove = function(id: any) {
  const response = userData.remove(id);
  return response;
};

export default {
  create: create,
  get: get,
  getById: getById,
  update: update,
  remove: remove
};
