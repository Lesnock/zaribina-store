import { Product } from "../domain/product";
import { ProductRepository } from "./contracts/product-repository";

export class ProductRepositoryInMemory implements ProductRepository {
    private products: Product[] = []

    async save(product: Product): Promise<void> {
        this.products.push(product)
    }

    async findByCode(code: string): Promise<Product | null> {
        const product = this.products.find(product => product.code.get() === code)
        return product ?? null
    }
}