"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photo = void 0;
var Photo = /** @class */ (function () {
    function Photo(id, subtitle, date, author, file, tags, collection) {
        this.id = id;
        this.subtitle = subtitle;
        this.date = date;
        this.author = author;
        this.file = file;
        this.tags = tags;
        this.collection = collection;
    }
    Photo.prototype.getId = function () {
        return this.id;
    };
    Photo.prototype.getSubtitle = function () {
        return this.subtitle;
    };
    Photo.prototype.getDate = function () {
        return this.date;
    };
    Photo.prototype.getAuthor = function () {
        return this.author;
    };
    Photo.prototype.getFile = function () {
        return this.file;
    };
    Photo.prototype.getTags = function () {
        return this.tags;
    };
    Photo.prototype.getCollection = function () {
        return this.collection;
    };
    Photo.prototype.setId = function (id) {
        this.id = id;
    };
    Photo.prototype.setSubtitle = function (subtitle) {
        this.subtitle = subtitle;
    };
    Photo.prototype.setDate = function (date) {
        this.date = date;
    };
    Photo.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Photo.prototype.setFile = function (file) {
        this.file = file;
    };
    Photo.prototype.setTags = function (tags) {
        this.tags = tags;
    };
    Photo.prototype.setCollection = function (collection) {
        this.collection = collection;
    };
    Photo.toPhotoModel = function (photo) {
        return new Photo(photo.id, photo.subtitle, photo.date, photo.author, photo.file, photo.tags, photo.collection);
    };
    return Photo;
}());
exports.Photo = Photo;
