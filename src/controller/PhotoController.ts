import { Request, Response } from "express";
import { PhotoBusiness } from "../business/PhotoBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { PhotoInputDTO } from "../model/Photo";
import { Authenticator } from "../services/Authenticator";

export class PhotoController {
  async createPhoto(req: Request, res: Response) {
    try {
      const authenticator = new Authenticator();
      const tokenData = authenticator.getData(
        req.headers.authorization as string
      );

      if (!tokenData) {
        throw new Error("É necessário estar logado para criar uma foto");
      }

      if (!tokenData.id) {
        throw new Error("Erro na solicitação, realize o login novamente");
      }

      const input: PhotoInputDTO = {
        subtitle: req.body.subtitle,
        date: req.body.date,
        collection: req.body.collection,
        file: req.body.file,
      };

      if (!input.subtitle || !input.date || !input.collection || !input.file) {
        throw new Error("Dados faltando para criação da foto");
      }

      const tags: string[] | string = req.body.tags;

      if (!tags) {
        throw new Error("Insira pelo menos uma tag");
      }

      const photoBusiness = new PhotoBusiness();

      await photoBusiness.createPhoto(input, tokenData.id, tags);

      res.sendStatus(200);
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }

  async getPhotos(req: Request, res: Response) {
    try {
      const authenticator = new Authenticator();
      const tokenData = authenticator.getData(
        req.headers.authorization as string
      );

      if (!tokenData) {
        throw new Error("É necessário estar logado para criar uma foto");
      }

      if (!tokenData.id) {
        throw new Error("Erro na solicitação, realize o login novamente");
      }

      const photoBusiness = new PhotoBusiness();
      const photos = await photoBusiness.getPhotos();

      res.status(200).send({
        photos: photos,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async getPhotoDetail(req: Request, res: Response) {
    try {
      const authenticator = new Authenticator();
      const tokenData = authenticator.getData(
        req.headers.authorization as string
      );

      if (!tokenData) {
        throw new Error("É necessário estar logado para criar uma foto");
      }

      const id = req.params.id;

      const photoBusiness = new PhotoBusiness();
      const photoDetail = await photoBusiness.getPhotoDetail(id);

      res.status(200).send({
        photo: photoDetail,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }
}
