import { it, expect } from "vitest";
import { CreateProductUsecase } from "./create-product-usecase";
import { ProductRepositoryInMemory } from "../../../product/repositories/product-repository-in-memory";
import { ProductBuilder } from "../../../product/testing/builders/product-builder";

it('should create product', () => {
    const repository = new ProductRepositoryInMemory()
    const usecase = new CreateProductUsecase(repository)
    usecase.execute(ProductBuilder.aProduct().withCode('240001').buildAsDto())
    expect(repository.findByCode('240001')).toBeTruthy()
})