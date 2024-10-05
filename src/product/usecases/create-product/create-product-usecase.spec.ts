import { it, expect } from "vitest";
import { CreateProductUsecase } from "./create-product-usecase";
import { ProductRepositoryInMemory } from "../../../product/repositories/product-repository-in-memory";

it('should create product', () => {
    const repository = new ProductRepositoryInMemory()
    const usecase = new CreateProductUsecase(repository)
    usecase.execute({
        code: '240001',
        purchase_price: 100,
        desired_selling_price: 120,
        group_id: 1
    })
    expect(repository.findByCode('240001')).toBeTruthy()
})