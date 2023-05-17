import { Recension } from './recension.model';

/**
 * Product model
 */
export class Product {
  public readonly id = crypto.randomUUID();
  public name: string;
  public price: number;
  public description: string;
  public image: string;
  public category: string;
  public quantity: number;
  public recensions: Recension[];

  constructor(
    name: string,
    price: number,
    description: string,
    image: string,
    category: string,
    quantity: number,
    recensions: Recension[]
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.category = category;
    this.quantity = quantity;
    this.recensions = recensions;
  }

  public get rating() {
    return Product.calculateRating(this.recensions);
  }

  private static calculateRating(r: Recension[]) {
    const ratings: number[] = [];
    let sum = 0;

    for (const recension of r) {
      ratings.push(recension.rating);
    }

    for (const rating of ratings) {
      sum += rating;
    }
    return sum / ratings.length;
  }
}
