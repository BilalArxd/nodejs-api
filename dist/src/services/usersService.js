var usersData = require("../data/usersData");
var get = function () {
    var response = usersData.get();
    return response;
};
var getById = function (id) {
    var response = usersData.getById(id);
    return response;
};
var create = function (user) {
    var response = usersData.create(user);
    return response;
};
var update = function (id, user) {
    var response = usersData.update(id, user);
    return response;
};
var remove = function (id) {
    var response = usersData.remove(id);
    return response;
};
module.exports = {
    create: create,
    get: get,
    getById: getById,
    update: update,
    remove: remove
};
