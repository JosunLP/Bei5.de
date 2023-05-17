export class Recension {
  public readonly id = crypto.randomUUID();
  public title: string;
  public name: string;
  public comment: string;
  public rating: number;

  constructor(
    title: string,
    name: string,
    description: string,
    rating: number
  ) {
    this.title = title;
    this.name = name;
    this.comment = description;
    this.rating = rating;
  }
}
