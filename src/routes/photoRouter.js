"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.photoRouter = void 0;
var express_1 = __importDefault(require("express"));
var PhotoController_1 = require("../controller/PhotoController");
exports.photoRouter = express_1.default.Router();
var photoController = new PhotoController_1.PhotoController();
exports.photoRouter.post("/create", photoController.createPhoto);
exports.photoRouter.get("/", photoController.getPhotos);
exports.photoRouter.get("/:id", photoController.getPhotoDetail);
