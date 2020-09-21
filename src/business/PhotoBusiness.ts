import { PhotoDatabase } from "../data/PhotoDatabase";
import { TagsDatabase } from "../data/TagsDatabase";
import { Photo, PhotoInputDTO } from "../model/Photo";
import { IdGenerator } from "../services/IdGenerator";

export class PhotoBusiness {
  async createPhoto(
    photo: PhotoInputDTO,
    authorId: string,
    tags: string | string[]
  ) {
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const photoDatabase = new PhotoDatabase();
    await photoDatabase.createPhoto(
      id,
      photo.subtitle,
      photo.date,
      authorId,
      photo.file,
      photo.collection
    );

    const tagsDatabase = new TagsDatabase();

    await tagsDatabase.insertTags(id, tags);
  }

  async getPhotos(): Promise<Photo[] | Photo> {
    const photoDatabase = new PhotoDatabase();
    const photos = await photoDatabase.getPhotos();

    if (!photos) {
      throw new Error("Nenhuma foto encontrada");
    }

    return photos;
  }

  async getPhotoDetail(id: any): Promise<Photo> {
    const photoDatabase = new PhotoDatabase();
    const photoDetail = await photoDatabase.getPhotoById(id);

    if (!photoDetail) {
      throw new Error("Foto não encontrada");
    }

    return photoDetail;
  }
}
