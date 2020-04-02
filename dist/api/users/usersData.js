"use strict";
var users = require("../../data/users.json");
var getAll = function () {
    return users;
};
var getUserById = function (id) {
    var filteredUsers = users.filter(function (u) {
        if (u.id === id)
            return true;
        return false;
    });
    return filteredUsers;
};
var createUser = function (user) {
    user.id = users.length + 1;
    users.push(user);
    return user;
};
var updateUser = function (id, user) {
    var filteredUsers = users.map(function (u) {
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
    filteredUsers = filteredUsers.filter(function (u) {
        if (u.id === id)
            return true;
        return false;
    });
    return filteredUsers;
};
var removeUser = function (id) {
    try {
        users = users.filter(function (u) {
            if (u.id !== id)
                return true;
            return false;
        });
        return true;
    }
    catch (error) {
        console.log("ERR: " + error);
        return false;
    }
};
module.exports = {
    create: createUser,
    get: getAll,
    getById: getUserById,
    update: updateUser,
    remove: removeUser
};
