import type { IProduct } from "../../types";

export class Cart {
    protected products: IProduct[] = [];

    getProducts(): IProduct[] {
        return this.products;
    }

    addProduct(product: IProduct): void {
        const id = product.id;
        const hasProduct = this.products.find((productInCart) => productInCart.id === id);

        if (hasProduct) {
            console.error('Товар уже есть в корзине');
        }
        this.products.push(product);
    }

    removeProduct(product: IProduct): void {
        const idRemove = product.id;

        this.products.forEach((product, index) => {
            if (product.id === idRemove) {
                this.products.splice(index, 1);
            }
        });
    }

    clean(): void {
        this.products = [];
    }

    getTotal(): number {
        return this.products.reduce((total, product) => {
            if (typeof product.price === "number") {
                return total + product.price;
            } else {
                return total;
            }
        }, 0);
    }

    numberOfProducts(): number {
        return this.products.length;
    }

    isAvailable(id: string): boolean {
        const isExist = this.products.find((product) => product.id === id);
        if (isExist) {
            return true;
        } else {
            return false;
        }
    }
}
