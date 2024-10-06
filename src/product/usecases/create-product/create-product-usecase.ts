import { Product } from "../../domain/product";
import { ProductCode } from "../../domain/product-code";
import { ProductRepository } from "../../repositories/contracts/product-repository";
import { ProductCodeSpecification } from "../../domain/specifications/product-code-specification";
import { EventBus } from "../../../general/events/event-bus";

interface Input {
    code: string
    last_purchase_price: number
    price: number
    group_id: number
}

export class CreateProductUsecase {
    constructor(
        private productRepository: ProductRepository,
        private eventBus: EventBus
    ) {}

    async execute(input: Input): Promise<void> {
        const product = Product.create({
            code: ProductCode.build(input.code, new ProductCodeSpecification()),
            last_purchase_price: input.last_purchase_price,
            price: input.price,
            group_id: input.group_id,
            id: null
        })
        await this.productRepository.save(product)
        this.eventBus.emit('product.created', product.toDTO())
    }
}