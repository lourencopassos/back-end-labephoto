import { BaseDatabase } from "./BaseDatabase";


export class TagsDatabase extends BaseDatabase {
  private static TABLE_NAME = "ImageTags";

  public async insertTags(
    image_id: string,
    tag: string | string[]
  ): Promise<void> {
    try {
      if (Array.isArray(tag)) {
        const fieldsToInsert = tag.map((item) => ({
          image_id: image_id,
          tag: item,
        }));

        await this.getConnection()
          .insert(fieldsToInsert)
          .into(TagsDatabase.TABLE_NAME);
      } else {
        await this.getConnection()
          .insert({
            image_id,
            tag,
          })
          .into(TagsDatabase.TABLE_NAME);
      }
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
