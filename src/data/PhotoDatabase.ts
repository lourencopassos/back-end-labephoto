import { BaseDatabase } from "./BaseDatabase";
import { Photo } from "../model/Photo";
import moment from "moment";
import knex from "knex";

export class PhotoDatabase extends BaseDatabase {
  private static TABLE_NAME = "Photos";

  public async createPhoto(
    id: string,
    subtitle: string,
    date: Date,
    author: string,
    file: string,
    collection: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          subtitle,
          date,
          author,
          file,
          collection,
        })
        .into(PhotoDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getPhotos(): Promise<any> {
    const photos = await this.getConnection()
      .from("Photos")
      .leftJoin("ImageTags", "id", "image_id");

    const mappedPhotos = photos.map((item: any) => ({
      id: item.id,
      subtitle: item.subtitle,
      date: moment(item.createdAt).format("DD/MM/YYYY"),
      author: item.author,
      collection: item.collection,
      tags: item.tag,
    }));

    return mappedPhotos;
  }

  public async getPhotoById(id: string): Promise<Photo> {
    const result = await this.getConnection()
      .select("*")
      .from(PhotoDatabase.TABLE_NAME)
      .where({ id });

    return Photo.toPhotoModel(result[0]);
  }
}
