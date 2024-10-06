import { ProductDTO } from "src/product/domain/product-dto";

export class ProductBuilder {
    private data: ProductDTO = {
        code: '240001',
        last_purchase_price: 0,
        price: 0,
        group_id: 1,
        id: null
    }

    public static aProduct(): ProductBuilder {
        return new ProductBuilder
    }

    withCode(code: string): ProductBuilder {
        this.data.code = code
        return this
    }

    withPrice(price: number): ProductBuilder {
        this.data.price = price
        return this
    }

    withLastPurchasePrice(price: number): ProductBuilder {
        this.data.last_purchase_price = price
        return this
    }

    buildAsDto(): ProductDTO {
        return this.data
    }
}