import { ProductCode } from "./product-code";
import { ProductDTO } from "./product-dto";

interface Input {
    code: ProductCode
    purchase_price: number
    desired_selling_price: number
    group_id: number
    id: number|null
}

export class Product {
    private constructor (
        public code: ProductCode,
        public purchase_price: number,
        public desired_selling_price: number,
        public group_id: number,
        public id: number|null = null,
    ) {}

    static create ({ code, purchase_price, desired_selling_price, group_id, id }: Input): Product {
        return new Product(code, purchase_price, desired_selling_price, group_id, id)
    }

    toDTO(): ProductDTO {
        return {
            code: this.code.get(),
            purchase_price: this.purchase_price,
            desired_selling_price: this.desired_selling_price,
            group_id: this.group_id,
            id: this.id
        }
    }
}