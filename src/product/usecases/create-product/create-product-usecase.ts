import { Product } from "../../domain/product";
import { ProductCode } from "../../domain/product-code";
import { ProductRepository } from "../../repositories/contracts/product-repository";
import { ProductCodeSpecification } from "../../domain/specifications/product-code-specification";

interface Input {
    code: string
    purchase_price: number
    desired_selling_price: number
    group_id: number
}

export class CreateProductUsecase {
    constructor(
        private productRepository: ProductRepository
    ) {}

    async execute(input: Input): Promise<void> {
        const product = Product.create({
            code: ProductCode.build(input.code, new ProductCodeSpecification()),
            purchase_price: input.purchase_price,
            desired_selling_price: input.desired_selling_price,
            group_id: input.group_id,
            id: null
        })
        await this.productRepository.save(product)
    }
}