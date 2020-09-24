"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, name, email, password, nickname) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.nickname = nickname;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.getNickname = function () {
        return this.nickname;
    };
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.setNickname = function (nickname) {
        this.nickname = nickname;
    };
    User.toUserModel = function (user) {
        return new User(user.id, user.name, user.email, user.password, user.nickname);
    };
    return User;
}());
exports.User = User;
