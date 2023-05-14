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
  public rating: number;

  constructor(
    name: string,
    price: number,
    description: string,
    image: string,
    category: string,
    quantity: number,
    rating: number
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.category = category;
    this.quantity = quantity;
    this.rating = rating;
  }
}
