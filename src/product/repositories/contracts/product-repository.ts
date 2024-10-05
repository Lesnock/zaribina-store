import { Product } from "../../domain/product"

export interface ProductRepository {
    save(product: Product): Promise<void>
    findByCode(code: string): Promise<Product|null>
}