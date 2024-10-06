import { ValidationError } from "src/general/errors/validation-error";
import { ProductCode } from "./product-code";
import { ProductDTO } from "./product-dto";

interface Input {
    code: ProductCode
    last_purchase_price: number
    price: number
    group_id: number
    id: number|null
}

export class Product {
    private constructor (
        public code: ProductCode,
        public last_purchase_price: number,
        public price: number,
        public group_id: number,
        public id: number|null = null,
    ) {}

    static create ({ code, last_purchase_price, price, group_id, id }: Input): Product {
        if (price < 0) {
            throw new ValidationError('O preço deve ser maior que 0')
        }
        return new Product(code, last_purchase_price, price, group_id, id)
    }

    toDTO(): ProductDTO {
        return {
            code: this.code.get(),
            last_purchase_price: this.last_purchase_price,
            price: this.price,
            group_id: this.group_id,
            id: this.id
        }
    }
}