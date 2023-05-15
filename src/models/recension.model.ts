export class Recension {
  public readonly id = crypto.randomUUID();
  public title: string;
  public description: string;
  public rating: number;

  constructor(title: string, description: string, rating: number) {
    this.title = title;
    this.description = description;
    this.rating = rating;
  }
}
