import { Recension } from 'src/models/recension.model';
import { Product } from '../models/product.model';
import { products } from './data.json';

export class InitData {
  private static _instance: InitData;
  private _products: Product[] = [];

  private constructor() {
    console.log('InitDate init');
    this.initProducts();
  }

  public static getInstance(): InitData {
    if (!this._instance) {
      this._instance = new InitData();
    }
    return this._instance;
  }

  public get products(): Product[] {
    return this._products;
  }

  private initProducts(): void {
    this._products = products.map(
      (product) =>
        new Product(
          product.name,
          product.price,
          product.description,
          product.image,
          product.category,
          product.quantity,
          product.recensions.map(
            (recension) =>
              new Recension(
                recension.title,
                recension.name,
                recension.comment,
                recension.rating
              )
          )
        )
    );
  }
}
