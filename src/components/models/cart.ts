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

    removeProduct(productToRemove: IProduct): void {
        this.products = this.products.filter(p => p.id !== productToRemove.id);
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
        return this.products.some((product) => product.id === id)
    }
}
