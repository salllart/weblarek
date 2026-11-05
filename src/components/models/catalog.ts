import type { IProduct } from '../../types';

export class Catalog {
  protected products: IProduct[] = [];
  protected currentProduct: IProduct | undefined = undefined;

  setProducts(products: IProduct[]): void {
    this.products = products;
  }

  getProducts(): IProduct[] {
    return this.products;
  }

  setCurrentProduct(product: IProduct): void {
    this.currentProduct = product;
  }

  getCurrentProduct(): IProduct | undefined {
    return this.currentProduct;
  }

  getProduct(id: string): IProduct | undefined {
    return this.products.find((product) => product.id === id);
  }
}
