"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoBusiness = void 0;
var PhotoDatabase_1 = require("../data/PhotoDatabase");
var TagsDatabase_1 = require("../data/TagsDatabase");
var IdGenerator_1 = require("../services/IdGenerator");
var PhotoBusiness = /** @class */ (function () {
    function PhotoBusiness() {
    }
    PhotoBusiness.prototype.createPhoto = function (photo, authorId, tags) {
        return __awaiter(this, void 0, void 0, function () {
            var idGenerator, id, photoDatabase, tagsDatabase;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        idGenerator = new IdGenerator_1.IdGenerator();
                        id = idGenerator.generate();
                        photoDatabase = new PhotoDatabase_1.PhotoDatabase();
                        return [4 /*yield*/, photoDatabase.createPhoto(id, photo.subtitle, photo.date, authorId, photo.file, photo.collection)];
                    case 1:
                        _a.sent();
                        tagsDatabase = new TagsDatabase_1.TagsDatabase();
                        return [4 /*yield*/, tagsDatabase.insertTags(id, tags)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PhotoBusiness.prototype.getPhotos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var photoDatabase, photos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        photoDatabase = new PhotoDatabase_1.PhotoDatabase();
                        return [4 /*yield*/, photoDatabase.getPhotos()];
                    case 1:
                        photos = _a.sent();
                        if (!photos) {
                            throw new Error("Nenhuma foto encontrada");
                        }
                        return [2 /*return*/, photos];
                }
            });
        });
    };
    PhotoBusiness.prototype.getPhotoDetail = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var photoDatabase, photoDetail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        photoDatabase = new PhotoDatabase_1.PhotoDatabase();
                        return [4 /*yield*/, photoDatabase.getPhotoById(id)];
                    case 1:
                        photoDetail = _a.sent();
                        if (!photoDetail) {
                            throw new Error("Foto não encontrada");
                        }
                        return [2 /*return*/, photoDetail];
                }
            });
        });
    };
    return PhotoBusiness;
}());
exports.PhotoBusiness = PhotoBusiness;
