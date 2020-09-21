export class Photo {
  constructor(
    private id: string,
    private subtitle: string,
    private date: Date,
    private author: string,
    private file: string,
    private tags: string[] | string,
    private collection: string
  ) {}

  getId() {
    return this.id;
  }

  getSubtitle() {
    return this.subtitle;
  }

  getDate() {
    return this.date;
  }

  getAuthor() {
    return this.author;
  }

  getFile() {
    return this.file;
  }

  getTags() {
    return this.tags;
  }

  getCollection() {
    return this.collection;
  }

  setId(id: string) {
    this.id = id;
  }

  setSubtitle(subtitle: string) {
    this.subtitle = subtitle;
  }

  setDate(date: Date) {
    this.date = date;
  }

  setAuthor(author: string) {
    this.author = author;
  }

  setFile(file: string) {
    this.file = file;
  }

  setTags(tags: string[] | string) {
    this.tags = tags;
  }

  setCollection(collection: string) {
    this.collection = collection;
  }

  static toPhotoModel(photo: any): Photo {
    return new Photo(
      photo.id,
      photo.subtitle,
      photo.date,
      photo.author,
      photo.file,
      photo.tags,
      photo.collection
    );
  }
}

export interface PhotoInputDTO {
  subtitle: string;
  date: Date;
  file: string;
  collection: string;
}
