import express from "express";
import { PhotoController } from "../controller/PhotoController";

export const photoRouter = express.Router();

const photoController = new PhotoController();

photoRouter.post("/create", photoController.createPhoto);
photoRouter.get("/", photoController.getPhotos);
photoRouter.get("/:id", photoController.getPhotoDetail);
